#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = path.resolve(process.argv[2] ?? process.cwd());
const output = path.resolve(root, process.argv[3] ?? "content/site-copy.json");
const locales = ["en", "pl", "ru", "uk"];
const localized = Object.fromEntries(locales.map((locale) => [locale, []]));
const shared = [];
const scannedSources = new Set();

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function listFiles(dir, extensions) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(absolute, extensions);
    return extensions.some((extension) => entry.name.endsWith(extension)) ? [absolute] : [];
  });
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

function unwrap(expression) {
  let current = expression;
  while (
    ts.isAsExpression(current) ||
    ts.isSatisfiesExpression(current) ||
    ts.isParenthesizedExpression(current) ||
    ts.isNonNullExpression(current)
  ) {
    current = current.expression;
  }
  return current;
}

function propertyName(name, sourceFile) {
  if (ts.isIdentifier(name) || ts.isStringLiteralLike(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }
  return name.getText(sourceFile);
}

function looksLikeCopy(value) {
  const text = value.trim();
  return text.length > 1 && /\p{L}/u.test(text) && !/^(https?:|mailto:|\/|#)/.test(text);
}

function addLocalized(locale, file, node, copyPath, value, sourceFile) {
  if (!looksLikeCopy(value)) return;
  localized[locale].push({
    source: relative(file),
    line: sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1,
    path: copyPath.join("."),
    text: value.trim(),
  });
}

function walkExpression(rawExpression, context) {
  const expression = unwrap(rawExpression);
  const { file, sourceFile, copyPath, locale } = context;

  if (ts.isStringLiteralLike(expression)) {
    if (locale) addLocalized(locale, file, expression, copyPath, expression.text, sourceFile);
    return;
  }

  if (ts.isNoSubstitutionTemplateLiteral(expression)) {
    if (locale) addLocalized(locale, file, expression, copyPath, expression.text, sourceFile);
    return;
  }

  if (ts.isObjectLiteralExpression(expression)) {
    for (const property of expression.properties) {
      if (!ts.isPropertyAssignment(property)) continue;
      const key = propertyName(property.name, sourceFile);
      walkExpression(property.initializer, {
        ...context,
        copyPath: [...copyPath, key],
        locale: locales.includes(key) ? key : locale,
      });
    }
    return;
  }

  if (ts.isArrayLiteralExpression(expression)) {
    expression.elements.forEach((element, index) => {
      walkExpression(element, { ...context, copyPath: [...copyPath, String(index)] });
    });
    return;
  }

  if (ts.isCallExpression(expression)) {
    expression.arguments.forEach((argument, index) => {
      walkExpression(argument, { ...context, copyPath: [...copyPath, `arg${index}`] });
    });
    return;
  }

  ts.forEachChild(expression, (child) => {
    if (ts.isExpression(child)) walkExpression(child, context);
  });
}

function collectSource(file) {
  const source = fs.readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(
    relative(file),
    source,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  scannedSources.add(relative(file));

  function visit(node) {
    if (ts.isVariableDeclaration(node) && node.initializer) {
      walkExpression(node.initializer, {
        file,
        sourceFile,
        copyPath: [node.name.getText(sourceFile)],
        locale: undefined,
      });
    }

    if (ts.isJsxText(node) && looksLikeCopy(node.text)) {
      shared.push({
        source: relative(file),
        line: sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1,
        text: node.text.replace(/\s+/g, " ").trim(),
      });
    }

    if (
      ts.isJsxAttribute(node) &&
      node.initializer &&
      ts.isStringLiteral(node.initializer) &&
      ["alt", "title", "aria-label", "placeholder"].includes(node.name.getText(sourceFile)) &&
      looksLikeCopy(node.initializer.text)
    ) {
      shared.push({
        source: relative(file),
        line: sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1,
        text: node.initializer.text.trim(),
      });
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

const messages = {};
for (const locale of locales) {
  const baseFile = path.join(root, "messages", `${locale}.json`);
  const homeFile = path.join(root, "messages", "fragments", `home-${locale}.json`);
  const servicesFile = path.join(root, "messages", "fragments", `services-${locale}.json`);
  messages[locale] = {
    ...readJson(baseFile),
    home: readJson(homeFile),
    services: readJson(servicesFile),
  };
  [baseFile, homeFile, servicesFile].forEach((file) => scannedSources.add(relative(file)));
}

const sourceFiles = [
  ...listFiles(path.join(root, "src", "content"), [".ts", ".tsx"]),
  ...listFiles(path.join(root, "src", "data"), [".ts", ".tsx"]),
  ...listFiles(path.join(root, "src", "app"), [".ts", ".tsx"]),
  ...listFiles(path.join(root, "src", "components"), [".ts", ".tsx"]),
];
sourceFiles.forEach(collectSource);

for (const locale of locales) {
  localized[locale].sort((a, b) =>
    a.source.localeCompare(b.source) || a.line - b.line || a.path.localeCompare(b.path),
  );
}
shared.sort((a, b) => a.source.localeCompare(b.source) || a.line - b.line);

const corpus = {
  _meta: {
    schema: "mikitalashytski.site-copy.v1",
    generatedBy: ".agents/skills/service-brand-copywriter/scripts/build-copy-corpus.mjs",
    locales,
    sourceCount: scannedSources.size,
    note: "Editorial inventory generated from runtime messages, localized content data, and visible JSX text. Edit source files, then regenerate this file.",
  },
  locales: Object.fromEntries(
    locales.map((locale) => [locale, { messages: messages[locale], content: localized[locale] }]),
  ),
  shared,
};

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(corpus, null, 2)}\n`);

const counts = Object.fromEntries(locales.map((locale) => [locale, localized[locale].length]));
console.log(JSON.stringify({ output: relative(output), sources: scannedSources.size, localized: counts, shared: shared.length }, null, 2));

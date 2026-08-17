#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? process.cwd());
const corpusFile = path.resolve(root, process.argv[3] ?? "content/site-copy.json");
const corpus = JSON.parse(fs.readFileSync(corpusFile, "utf8"));

const patterns = [
  { id: "where-breaks", re: /где\s+(?:чаще\s+)?ломается|where it breaks|gdzie.*psuje|де.*ламається/iu },
  { id: "pressure", re: /без давления|without pressure|bez presji|без тиску/iu },
  { id: "three-paths", re: /три (?:нормальных|понятных) (?:входа|пути)|three (?:clear|simple) paths/iu },
  { id: "more-than", re: /^(?:это больше,? чем|more than (?:a|just)|to więcej niż|це більше,? ніж)/iu },
  { id: "not-just", re: /\bне просто\b|\bnot just\b.{0,80}\bbut\b|\bnie tylko\b.{0,80}\b(?:ale|lecz)\b|\bне лише\b.{0,80}\bа\b/iu },
  { id: "idea-to-launch", re: /от идеи до (?:запуска|релиза)|from idea to (?:launch|release)|od pomysłu do|від ідеї до/iu },
  { id: "website-that-works", re: /сайт,? который работает|website that works|stron[ay],? któr[ae] działa|сайт,? який працює/iu },
  { id: "no-fluff", re: /без воды|no fluff|bez lania wody|без води/iu },
  { id: "digital-presence", re: /цифровое присутствие|digital presence|cyfrowa obecność|цифрова присутність/iu },
];

const findings = [];

function inspect(value, location) {
  if (typeof value === "string") {
    for (const pattern of patterns) {
      if (pattern.re.test(value)) findings.push({ pattern: pattern.id, location, text: value });
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => inspect(item, `${location}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) inspect(item, `${location}.${key}`);
  }
}

inspect(corpus, "siteCopy");

if (findings.length === 0) {
  console.log("Copy audit passed: no configured AI-style patterns found.");
  process.exit(0);
}

console.log(`Copy audit found ${findings.length} phrase(s) for editorial review:\n`);
for (const finding of findings) {
  console.log(`[${finding.pattern}] ${finding.location}\n  ${finding.text}\n`);
}
process.exitCode = 1;

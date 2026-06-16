import { setRequestLocale } from "next-intl/server";
import { VintageHome } from "@/components/vintage/VintageHome";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <VintageHome />;
}

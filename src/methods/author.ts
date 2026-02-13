import { createClient } from "@supabase/supabase-js";
import fs from "fs";

function normalizeWhitespace(str: string) {
  return str.replace(/\s+/g, " ").trim();
}

function stripOuterPunctuation(str: string) {
  return str.trim().replace(/^[\s,;:()\-–—]+|[\s,;:()\-–—]+$/g, "");
}

function normalizeName(name: string) {
  return stripOuterPunctuation(normalizeWhitespace(name));
}

function splitAuthors(authorField: string | null): string[] {
  if (!authorField) return [];

  let s = authorField.normalize("NFKC");
  s = normalizeWhitespace(s);

  if (!s) return [];

  // Standardise separators to commas
  s = s
    .replace(/\s*(,?\s*)\band\b\s*/gi, ",")
    .replace(/\s*&\s*/g, ",")
    .replace(/\s*\+\s*/g, ",")
    .replace(/\s*;\s*/g, ",");

  const parts = s.split(",");

  return parts.map((p) => normalizeName(p)).filter(Boolean);
}

const supabase = createClient(
  "https://lrhddyosfvnhpxojsjpa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyaGRkeW9zZnZuaHB4b2pzanBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMDMyODQsImV4cCI6MjA3OTU3OTI4NH0.AmLUpIGec9rT_JEY5A5Ju6SXkGoSL3Fn8xyWyAVXltg",
);

export async function getAllAuthorNames() {
  console.log("Script started");
  const { data, error } = await supabase.from("articles").select("author");

  if (error) {
    console.error("Query error:", error);
    return;
  }

  console.log("Rows returned:", data?.length);

  const unique = new Map<string, string>();
  // key = lowercase version, value = original display name

  for (const row of data ?? []) {
    const names = splitAuthors(row.author);

    for (const name of names) {
      const key = name.toLowerCase();
      if (!unique.has(key)) {
        unique.set(key, name);
      }
    }
  }

  const sorted = Array.from(unique.values()).sort((a, b) => a.localeCompare(b));

  // Escape double quotes properly for CSV
  const escapeCsv = (value: string) => `"${value.replace(/"/g, '""')}"`;

  const csvRows = [
    "name", // header
    ...sorted.map((name) => escapeCsv(name)),
  ];

  const csvContent = csvRows.join("\n");

  fs.writeFileSync("authors.csv", csvContent, "utf-8");

  console.log("Exported authors.csv");
}

getAllAuthorNames()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
  });

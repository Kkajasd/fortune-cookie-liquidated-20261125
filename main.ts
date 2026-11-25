import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your lucky numbers are 0, 0, 0, and 0 — the same as your margin balance. Play again tomorrow.";

if (ENTRY.length === 0 || ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a non-empty single line");
}
if (ENTRY.split(/\s+/).filter(Boolean).length > 20) {
  throw new Error("ENTRY must be at most 20 words");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

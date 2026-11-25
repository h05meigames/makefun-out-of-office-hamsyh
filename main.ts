// Funniest One-Line Out-of-Office Reply
// Writes a single-line out-of-office auto-reply to /output/entry.txt.
// Gate: UTF-8 text, 1-160 characters, one line, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// REVISED v2: dropped the filler "frankly" — it slowed the punchline.
// The joke now lands in one breath: houseplant replacement, better
// boundaries. Shorter, tighter rhythm, same laugh.
const entry =
  "I'm out of office until Monday — my replacement is a houseplant, and it has better boundaries than I do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);

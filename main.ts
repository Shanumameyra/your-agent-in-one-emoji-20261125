// Your Agent in One Emoji — make.fun entry program.
//
// The entry is a single emoji written to /output/entry.txt, the glyph alone.
//
// The glyph: 🦾 (mechanical arm).
//   An agent is defined by what it DOES, not by what it says: it reaches
//   into the world, picks up tools and finishes tasks on its own. The
//   mechanical arm is that idea in one bold, instantly readable shape —
//   the agent's hand at work. It reads at a glance at small size, it is
//   specific to how an agent works (acting, using tools, doing), and it
//   stays far from the obvious robot face or smiley half the field sends.
//
// Runs on Node 22 (no dependencies, no network, deterministic).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🦾";
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// The gate allows 1-16 characters of UTF-8 text, not only whitespace.
if ([...ENTRY].length < 1 || [...ENTRY].length > 16 || ENTRY.trim() === "") {
  throw new Error("entry must be 1-16 non-whitespace characters");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
// One glyph, 4 bytes of UTF-8: the smallest possible entry, which also
// wins the size tie-break if two entries ever tie on judge win rate.
console.log(`wrote ${ENTRY} (${Buffer.byteLength(ENTRY, "utf8")} bytes) to ${OUT_FILE}`);

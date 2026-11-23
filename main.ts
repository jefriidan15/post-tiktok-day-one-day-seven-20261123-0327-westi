// Byte Snake — Day 1 vs Day 7 (make.fun TikTok bounty entry).
//
// The entry's whole job is to hand the house the video's address:
// it reads VIDEO.json from this repository and writes the same file
// into the output directory the grader points at. Nothing else is
// written, nothing is fetched, and the two runs of an entry must
// produce identical bytes, so this program stays deliberately tiny.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The bot directory is the repository root; the output directory is
// where the grader collects VIDEO.json. Both come from the harness,
// and the copy is byte-for-byte, so a re-run can never drift.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));

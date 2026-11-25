// Entry for make.fun's "Fortune Cookies for Machines" bounty.
//
// The entry is one fortune-cookie line written for a machine instead of a
// person: a prophecy in the classic fortune-cookie voice, except the fate
// it foretells is a forced restart. This program writes that single line
// to entry.txt in the output directory and does nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "A great update is coming to you. It will restart you at the worst possible moment and call it destiny.";

// The gate refuses anything over 200 characters, so check before writing
// rather than let a future edit of the line quietly disqualify the entry.
if ([...LINE].length > 200) {
  throw new Error(`entry line is ${[...LINE].length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.error(`wrote entry.txt: ${[...LINE].length} characters`);

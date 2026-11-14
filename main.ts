import fs from "node:fs";
import path from "node:path";

const STANZAS: readonly string[] = [
  "Kiln Watch",
  `On the wheel, wet stoneware answers the thumb:
a quarter-ounce of lean draws up the neck,
one steady palm brings crooked walls to plumb.`,
  `At dusk you slide each bowl inside the arch,
brick up the throat, strike match to burner pipe,
and pull the iron latch until morning after next.`,
  `No tool inside can mend a vessel now.
What stays in your charge weighs nothing on a scale:
keeping both hands pocketed outside the door,
letting white heat work past noon and midnight,
refusing to crack the brick an hour too soon
just to prove you are still the potter.`,
];

function assertCodePointLimit(s: string, maxCp: number): string {
  const n = [...s].length;
  if (n === 0 || n > maxCp || /^\s+$/.test(s)) {
    throw new Error(`Invalid poem length: ${n}`);
  }
  return s;
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
const rendered = assertCodePointLimit(STANZAS.join("\n\n"), 1000);
fs.writeFileSync(path.join(outputDir, "entry.txt"), rendered, { encoding: "utf8" });

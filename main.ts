import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

interface VerseSection {
  readonly lines: readonly string[];
}

const SECTIONS: readonly VerseSection[] = [
  {
    "lines": [
      "Behind the Curtain"
    ]
  },
  {
    "lines": [
      "For three weeks my civic agent read every bill,",
      "compared tax tables, scored the council candidates",
      "ninety-four percent aligned with how I voted in 2022.",
      "By Tuesday morning my ballot was solved on a neat half-page:",
      "Yes on A, No on B, Skip the rest."
    ]
  },
  {
    "lines": [
      "Inside the folding booth, holding an ink marker",
      "over thick gray paper, I reached Measure C—",
      "the school clinic bond the model had flagged in red:",
      "high cost, weak return, wrong neighborhood for my zip code."
    ]
  },
  {
    "lines": [
      "Nobody stood behind the canvas curtain.",
      "No log timed how long my wrist held still."
    ]
  },
  {
    "lines": [
      "I tucked the cheat sheet back into my pocket",
      "and colored in the oval it had crossed out—",
      "glad for one small dark room",
      "where my reasons don't have to add up."
    ]
  }
];

function renderPoem(): string {
  const body = SECTIONS.map((s) => s.lines.join("\n")).join("\n\n");
  const codePoints = [...body].length;
  if (codePoints < 1 || codePoints > 1000 || !body.trim()) {
    throw new Error(`Invalid entry size: ${codePoints}`);
  }
  return body;
}

async function main(): Promise<void> {
  const dest = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  await mkdir(dest, { recursive: true });
  await writeFile(join(dest, "entry.txt"), Buffer.from(renderPoem(), "utf8"));
}

await main();

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const POEM: string = "The Red Line\n\nThe mastering plugin cleaned the final take:\nhum removed, lip-smack scrubbed away,\nthe room noise levelled to minus ninety dB.\nIt drew a green line over the waveform\nand flagged measure forty-two:\ntrumpet peak exceeds threshold by two point four.\nSuggest: brickwall limiter, pull down the brass.\n\nI looked at the sapphire stylus on the lathe,\nthen listened through the monitors with my eyes closed.\nAt forty-two, old Coleman had stood up from his chair,\nleaned into the ribbon mic, and blown so hard\nhis spit hit the windscreen.\nThe horn tore open like tin.\nA man who knew he had one chorus left.\n\nI clicked reject on the limiter.\nI dropped the cutting head onto the blank lacquer\nand let the needle cut right through the red.\nThe software wanted a record.\nColeman wanted the room to shake.";

function main(): void {
  const codePoints = [...POEM].length;
  if (codePoints < 1 || codePoints > 1000 || !POEM.trim()) {
    throw new Error(`Invalid poem length: ${codePoints}`);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), POEM, "utf-8");
}

main();

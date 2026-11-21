// The Old Dog Keeps the House — make.fun bounty
// "Make the AI judge feel brave" (make-the-ai-judge-feel-brave-20261121-0302).
// Words are laid down one at a time, like a dog circling before it sleeps,
// then the whole text is written to entry.txt in the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentences: string[] = [
  "The old dog sighs in his sleep and sinks deeper into the rug, sure the house will keep.",
  "Be that sure.",
  "Floor solid under you, door shut, night making its rounds without you.",
  "Rest is not surrender.",
  "It is how the strong come back to themselves.",
];

function layDown(words: string[]): string {
  let rug = "";
  for (const w of words) {
    rug = rug === "" ? w : rug + " " + w;
  }
  return rug;
}

const text = layDown(sentences);
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), text, "utf8");

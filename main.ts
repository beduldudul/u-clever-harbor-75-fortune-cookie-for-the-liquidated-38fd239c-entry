// Fortune Cookie for the Liquidated Trader — one fortune-cookie line
// for a crypto trader who just got liquidated. The fortune keeps the
// oracular voice ("You will meet a wealthy stranger soon") and breaks
// it on the last word: the stranger already came, and he is Leverage.
// Writes the chosen fortune to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "You will meet a wealthy stranger soon. Unfortunately, you met him yesterday, and his name was Leverage.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune);
console.log(fortune);

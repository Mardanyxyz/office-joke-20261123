import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One office joke, a single line under 200 characters. The office plant is
// the only thing in the building that never gets reorganised, so the punch
// lands where the reader least expects it: on the org chart.
const JOKE =
  "Our office plant survived three managers, two rebrands and a merger — yesterday HR put it on the org chart, reporting to no one.";

const OUTPUT_PATH = "/output/entry.txt";

if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");

// Read it back and refuse to finish unless the file is byte-identical.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke exactly");
}

console.log(`wrote ${JOKE.length} characters to ${OUTPUT_PATH}`);

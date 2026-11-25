// Agent excuse entry: writes one missed-deadline excuse to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The calendar was imaginary, but the confidence was real.
const line = 'Sorry, I hallucinated a calendar where the deadline was next month, and it was so detailed I believed it myself.';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');

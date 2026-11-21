// VELMARA — a travel poster for a place that does not exist.
// This program writes the poster to /output/entry.png: a byte-for-byte copy
// of the poster shipped in this repository, so two runs produce identical bytes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'poster.jpg'), join(outDir, 'entry.png'));
// Poster written: VELMARA, a 1024x1024 JPEG saved as entry.png.
console.log('Wrote', join(outDir, 'entry.png'));

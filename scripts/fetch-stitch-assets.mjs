/**
 * Descarga la captura y el HTML exportado de una pantalla Stitch.
 * Requiere: STITCH_API_KEY en el entorno (https://www.npmjs.com/package/@google/stitch-sdk)
 *
 * Uso:
 *   STITCH_API_KEY=tu_clave node scripts/fetch-stitch-assets.mjs
 *
 * Opcional:
 *   STITCH_PROJECT_ID=... STITCH_SCREEN_ID=... node scripts/fetch-stitch-assets.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { stitch } from "@google/stitch-sdk";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "assets");

const PROJECT_ID =
  process.env.STITCH_PROJECT_ID ?? "8951144834017923821";
const SCREEN_ID =
  process.env.STITCH_SCREEN_ID ?? "8cbb4a9c57ce4b578f9f7819f71d7939";

async function downloadToFile(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Fallo al descargar (${res.status}): ${url.slice(0, 80)}…`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(destPath), { recursive: true });
  await writeFile(destPath, buf);
}

async function main() {
  const project = stitch.project(PROJECT_ID);
  const screen = await project.getScreen(SCREEN_ID);
  const [htmlUrl, imageUrl] = await Promise.all([
    screen.getHtml(),
    screen.getImage(),
  ]);

  await mkdir(outDir, { recursive: true });

  await downloadToFile(
    imageUrl,
    join(outDir, "stitch-screen-reference.png"),
  );

  const htmlRes = await fetch(htmlUrl);
  if (!htmlRes.ok) {
    throw new Error(`HTML: HTTP ${htmlRes.status}`);
  }
  const html = await htmlRes.text();
  await writeFile(join(outDir, "stitch-export.html"), html, "utf8");

  console.log("Listo:");
  console.log(`  ${join(outDir, "stitch-screen-reference.png")}`);
  console.log(`  ${join(outDir, "stitch-export.html")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

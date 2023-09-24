import fs from "node:fs/promises";

console.log("Build started");

await Promise.all([
  // копируем публичные файлы в папку
  fs.cp("./public", "./out", { recursive: true }),

  // билдим скрипты
  Bun.build({
    entrypoints: ["./src/index.tsx"],
    outdir: "./out",
  }),
])
  .then(() => console.log("Build finished successfully"!))
  .catch((err) => console.error("Build failed!\n", err));

const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "public", "data");
const outputFile = path.join(__dirname, "public", "fileList.json");

fs.readdir(dataDir, (err, files) => {
  if (err) {
    console.error("Fehler beim Lesen des Ordners:", err);
    return;
  }

  // Optional: Nur Dateien (keine Ordner) filtern
  const onlyFiles = files.filter((file) => {
    const fullPath = path.join(dataDir, file);
    return fs.statSync(fullPath).isFile();
  });

  // JSON-Datei schreiben
  fs.writeFile(outputFile, JSON.stringify(onlyFiles, null, 2), (err) => {
    if (err) {
      console.error("Fehler beim Schreiben der fileList.json:", err);
    } else {
      console.log(`fileList.json wurde erstellt mit ${onlyFiles.length} Dateien.`);
    }
  });
});

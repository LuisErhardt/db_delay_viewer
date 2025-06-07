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

  const monthNumbers = files
    .filter((file) => /^delays\d{2}\.csv$/.test(file)) // Filter files matching the pattern
    .map((file) => file.match(/^delays(\d{2})\.csv$/)[1]); // Extract the month number
  // JSON-Datei schreiben
  fs.writeFile(outputFile, JSON.stringify(monthNumbers, null, 2), (err) => {
    if (err) {
      console.error("Fehler beim Schreiben der fileList.json:", err);
    } else {
      console.log(`fileList.json wurde erstellt mit ${monthNumbers.length} Dateien.`);
    }
  });
});

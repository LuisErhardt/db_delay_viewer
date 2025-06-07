const monate: string[] = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

export default function dateInNameUmwandeln(dateiName: string): string {
  const match = dateiName.match(/(\d{2})/);
  if (!match) return dateiName;

  const monatNummer: number = parseInt(match[1], 10);
  if (monatNummer < 1 || monatNummer > 12) return dateiName;

  const monatName: string = monate[monatNummer - 1];
  return monatName;
}

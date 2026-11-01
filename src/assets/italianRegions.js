/**
 * Regioni italiane, capoluoghi e area geografica.
 * La difficoltà indica quanto il nome è conosciuto:
 * 0 = molto noto, 1 = conosciuto, 2 = meno comune.
 */
export const italianRegions = [
  { region: "Lazio", capital: "Roma", area: "Centro", difficulty: 0 },
  { region: "Lombardia", capital: "Milano", area: "Nord", difficulty: 0 },
  { region: "Toscana", capital: "Firenze", area: "Centro", difficulty: 0 },
  { region: "Sicilia", capital: "Palermo", area: "Isole", difficulty: 0 },
  { region: "Veneto", capital: "Venezia", area: "Nord", difficulty: 0 },
  { region: "Piemonte", capital: "Torino", area: "Nord", difficulty: 0 },
  { region: "Campania", capital: "Napoli", area: "Sud", difficulty: 0 },
  {
    region: "Emilia-Romagna",
    capital: "Bologna",
    area: "Nord",
    difficulty: 1,
  },
  { region: "Puglia", capital: "Bari", area: "Sud", difficulty: 1 },
  { region: "Sardegna", capital: "Cagliari", area: "Isole", difficulty: 1 },
  { region: "Liguria", capital: "Genova", area: "Nord", difficulty: 1 },
  { region: "Calabria", capital: "Catanzaro", area: "Sud", difficulty: 1 },
  { region: "Abruzzo", capital: "L'Aquila", area: "Sud", difficulty: 1 },
  { region: "Umbria", capital: "Perugia", area: "Centro", difficulty: 1 },
  { region: "Marche", capital: "Ancona", area: "Centro", difficulty: 1 },
  {
    region: "Friuli-Venezia Giulia",
    capital: "Trieste",
    area: "Nord",
    difficulty: 2,
  },
  {
    region: "Trentino-Alto Adige",
    capital: "Trento",
    area: "Nord",
    difficulty: 2,
  },
  { region: "Molise", capital: "Campobasso", area: "Sud", difficulty: 2 },
  { region: "Basilicata", capital: "Potenza", area: "Sud", difficulty: 2 },
  { region: "Valle d'Aosta", capital: "Aosta", area: "Nord", difficulty: 2 },
];

export const italianAreas = ["Nord", "Centro", "Sud", "Isole"];

/**
 * Ogni difficoltà usa tutte le regioni. I tre formati di domanda
 * (regione → capoluogo, capoluogo → regione, regione → area) sono
 * separati in tre giochi, con 20 domande per livello ciascuno.
 */
export function filterRegionsByDifficulty() {
  return italianRegions;
}

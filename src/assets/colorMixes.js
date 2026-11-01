const giallo = { name: "Giallo", value: "#FFD200" };
const blu = { name: "Blu", value: "#1E5BD6" };
const rosso = { name: "Rosso", value: "#E53935" };
const bianco = { name: "Bianco", value: "#FFFFFF" };
const nero = { name: "Nero", value: "#000000" };
const verde = { name: "Verde", value: "#2E9E4F" };
const arancione = { name: "Arancione", value: "#F28C28" };
const viola = { name: "Viola", value: "#7B3FA0" };
const rosa = { name: "Rosa", value: "#F28CB1" };
const azzurro = { name: "Azzurro", value: "#58C7E8" };
const grigio = { name: "Grigio", value: "#808080" };
const marrone = { name: "Marrone", value: "#7A4A2A" };
const gialloChiaro = { name: "Giallo chiaro", value: "#FFF3A6" };
const bluScuro = { name: "Blu scuro", value: "#12377F" };
const verdeOliva = { name: "Verde oliva", value: "#6B7F2A" };
const rossoScuro = { name: "Rosso scuro", value: "#8E1B1B" };
const verdeChiaro = { name: "Verde chiaro", value: "#8FD694" };
const lilla = { name: "Lilla", value: "#C8A2E8" };
const pesca = { name: "Pesca", value: "#FFC9A8" };
const azzurroChiaro = { name: "Azzurro chiaro", value: "#BFEAF5" };
const rosaChiaro = { name: "Rosa chiaro", value: "#F9C9D8" };
const grigioChiaro = { name: "Grigio chiaro", value: "#D0D0D0" };
const grigioScuro = { name: "Grigio scuro", value: "#555555" };
const rossoArancio = { name: "Rosso arancio", value: "#E85D2A" };
const violaBlu = { name: "Viola blu", value: "#4A3F9E" };
const gialloArancio = { name: "Giallo arancio", value: "#F2B233" };
const marroneScuro = { name: "Marrone scuro", value: "#4E2E1A" };
const verdeScuro = { name: "Verde scuro", value: "#1F5A2E" };
const beige = { name: "Beige", value: "#D9C7A3" };
const ocra = { name: "Ocra", value: "#C49A3A" };

/**
 * 50 mescolanze: ogni livello le usa sia in forma diretta
 * (quale colore ottengo?) sia al contrario (quali colori lo formano?).
 * In questo modo ogni difficoltà ha 100 domande diverse.
 */
export const colorMixes = [
  { id: "giallo-blu", a: giallo, b: blu, result: verde },
  { id: "rosso-giallo", a: rosso, b: giallo, result: arancione },
  { id: "rosso-blu", a: rosso, b: blu, result: viola },
  { id: "rosso-bianco", a: rosso, b: bianco, result: rosa },
  { id: "blu-bianco", a: blu, b: bianco, result: azzurro },
  { id: "bianco-nero", a: bianco, b: nero, result: grigio },
  { id: "rosso-verde", a: rosso, b: verde, result: marrone },
  { id: "giallo-bianco", a: giallo, b: bianco, result: gialloChiaro },
  { id: "blu-nero", a: blu, b: nero, result: bluScuro },
  { id: "giallo-nero", a: giallo, b: nero, result: verdeOliva },
  { id: "rosso-nero", a: rosso, b: nero, result: rossoScuro },
  { id: "bianco-verde", a: bianco, b: verde, result: verdeChiaro },
  { id: "bianco-viola", a: bianco, b: viola, result: lilla },
  { id: "bianco-arancione", a: bianco, b: arancione, result: pesca },
  { id: "bianco-azzurro", a: bianco, b: azzurro, result: azzurroChiaro },
  { id: "bianco-rosa", a: bianco, b: rosa, result: rosaChiaro },
  { id: "bianco-grigio", a: bianco, b: grigio, result: grigioChiaro },
  { id: "nero-grigio", a: nero, b: grigio, result: grigioScuro },
  { id: "rosso-arancione", a: rosso, b: arancione, result: rossoArancio },
  { id: "blu-viola", a: blu, b: viola, result: violaBlu },
  { id: "giallo-arancione", a: giallo, b: arancione, result: gialloArancio },
  { id: "nero-arancione", a: nero, b: arancione, result: marroneScuro },
  { id: "nero-verde", a: nero, b: verde, result: verdeScuro },
  { id: "bianco-marrone", a: bianco, b: marrone, result: beige },
  { id: "giallo-viola", a: giallo, b: viola, result: ocra },
  { id: "rosso-azzurro", a: rosso, b: azzurro, result: viola },
  { id: "giallo-verde", a: giallo, b: verde, result: verdeChiaro },
  { id: "blu-arancione", a: blu, b: arancione, result: marrone },
  { id: "rosso-grigio", a: rosso, b: grigio, result: marrone },
  { id: "blu-grigio", a: blu, b: grigio, result: bluScuro },
  { id: "giallo-grigio", a: giallo, b: grigio, result: ocra },
  { id: "verde-arancione", a: verde, b: arancione, result: marrone },
  { id: "viola-arancione", a: viola, b: arancione, result: marrone },
  { id: "rosa-giallo", a: rosa, b: giallo, result: pesca },
  { id: "azzurro-giallo", a: azzurro, b: giallo, result: verdeChiaro },
  { id: "rosso-viola", a: rosso, b: viola, result: violaBlu },
  { id: "blu-rosa", a: blu, b: rosa, result: viola },
  { id: "blu-marrone", a: blu, b: marrone, result: grigioScuro },
  { id: "verde-grigio", a: verde, b: grigio, result: verdeOliva },
  { id: "arancione-grigio", a: arancione, b: grigio, result: marrone },
  { id: "rosso-marrone", a: rosso, b: marrone, result: rossoScuro },
  { id: "azzurro-verde", a: azzurro, b: verde, result: verdeChiaro },
  { id: "azzurro-rosa", a: azzurro, b: rosa, result: lilla },
  { id: "giallo-marrone", a: giallo, b: marrone, result: ocra },
  { id: "viola-grigio", a: viola, b: grigio, result: violaBlu },
  { id: "rosa-verde", a: rosa, b: verde, result: marrone },
  { id: "azzurro-marrone", a: azzurro, b: marrone, result: grigio },
  { id: "giallo-azzurro", a: giallo, b: azzurro, result: verde },
  { id: "azzurro-nero", a: azzurro, b: nero, result: bluScuro },
  { id: "rosa-nero", a: rosa, b: nero, result: viola },
];

export function filterMixesByDifficulty() {
  return colorMixes;
}

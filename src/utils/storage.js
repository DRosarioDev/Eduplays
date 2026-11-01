const unavailable = () => typeof window === "undefined" || !window.localStorage;

/**
 * Legge il record salvato. 0 significa "nessun record".
 */
export function readRecord(key) {
  if (!key || unavailable()) return 0;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return 0;
    const value = Number(raw);
    if (!Number.isFinite(value) || value <= 0) return 0;
    return value;
  } catch {
    return 0;
  }
}

/**
 * Salva il valore solo se migliora il record.
 * mode "max": vince il punteggio più alto.
 * mode "min": vincono le mosse più basse.
 */
export function saveIfBetter(key, value, mode = "max") {
  if (!key || !Number.isFinite(value) || value <= 0 || unavailable()) return false;
  const current = readRecord(key);
  const isBetter = current === 0 || (mode === "min" ? value < current : value > current);
  if (!isBetter) return false;
  try {
    window.localStorage.setItem(key, String(value));
  } catch {
    return false;
  }
  return true;
}

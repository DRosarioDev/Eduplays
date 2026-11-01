/**
 * Restituisce lo stato visivo di una risposta:
 * - "idle": si può ancora scegliere
 * - "correct": è la risposta giusta
 * - "wrong": è la risposta scelta e sbagliata
 * - "dim": non è né giusta né scelta
 */
export function getAnswerState(feedback, value, correctValue) {
  if (!feedback) return "idle";
  if (value === correctValue) return "correct";
  if (value === feedback.chosen) return "wrong";
  return "dim";
}

export const PASTEL_TONES = [
  "#FFF6D8",
  "#E8F3FF",
  "#F3E9FF",
  "#E4F6EE",
  "#FCE9E9",
  "#EAF7FA",
  "#FBEEDC",
  "#EDF6DE",
];

export function randomTone() {
  return PASTEL_TONES[Math.floor(Math.random() * PASTEL_TONES.length)];
}

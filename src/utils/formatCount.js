export function formatCount(count, singular, plural) {
  return `${count} ${count === 1 ? singular : plural}`;
}

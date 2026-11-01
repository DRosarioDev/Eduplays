import MemoryGameEngine from "../components/MemoryGameEngine.jsx";
import countryFlag from "../assets/flags/country-flag.json";

const flagMemoryItems = countryFlag
  .filter((flag) => flag.difficulty === 0)
  .map((flag) => ({
    id: flag.id,
    type: "image",
    value: flag.flag,
    label: flag.country_it,
  }))
  .slice(0, 8);

export default function MemoryFlag() {
  return <MemoryGameEngine gameId="memory-flag" items={flagMemoryItems} />;
}

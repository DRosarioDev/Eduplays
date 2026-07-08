import MemoryGameEngine from "../components/MemoryGameEngine.jsx";
import countryFlag  from "../assets/flags/country-flag.json";

const flagMemoryItems = countryFlag.filter((f) => f.difficulty === 0 )
.map((f) => ({
  id: f.id,
  type: "image",
  value: f.flag,
  label: f.country_it,
})).slice(0,8);

export default function MemoryFlag() {
  return <MemoryGameEngine title="Memory Flag" items={flagMemoryItems} />;
}
import MemoryGameEngine from "../components/MemoryGameEngine.jsx";
import { colorMemoryItems } from "../assets/memoryColor.js";

export default function MemoryColor() {
  return (
    <MemoryGameEngine gameId="memory-color" items={colorMemoryItems} />
  );
}

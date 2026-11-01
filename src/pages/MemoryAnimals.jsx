import MemoryGameEngine from "../components/MemoryGameEngine";
import { animalMemoryItems } from "../assets/animalMemory";

const ANIMAL_TONES = [
  "#FFF3D6",
  "#E5F3FF",
  "#F0E8FF",
  "#E5F8EE",
  "#FFE8E8",
  "#E8F7FA",
  "#FBEEDC",
];

function renderAnimal(item) {
  return (
    <span className="memory-emoji" aria-hidden="true">
      {item.value}
    </span>
  );
}

function cardBgColor(item) {
  return ANIMAL_TONES[item.id % ANIMAL_TONES.length];
}

export default function MemoryAnimals() {
  return (
    <MemoryGameEngine
      gameId="memory-animals"
      items={animalMemoryItems}
      pairCount={8}
      renderCard={renderAnimal}
      cardBgColor={cardBgColor}
    />
  );
}

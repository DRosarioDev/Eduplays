import { useContext } from "react";
import { SoundContext } from "../context/soundContext";

export function useSoundSettings() {
  return useContext(SoundContext);
}

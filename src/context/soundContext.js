import { createContext } from "react";

export const SoundContext = createContext({
  soundEnabled: true,
  toggleSound: () => {},
});

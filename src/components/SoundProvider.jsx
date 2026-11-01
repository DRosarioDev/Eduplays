import { useCallback, useEffect, useMemo, useState } from "react";
import { SoundContext } from "../context/soundContext";

const STORAGE_KEY = "eduplays:sound";

export function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) !== "off";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, soundEnabled ? "on" : "off");
    } catch {
      // La preferenza resta valida solo per la sessione.
    }
  }, [soundEnabled]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((current) => !current);
  }, []);

  const value = useMemo(
    () => ({ soundEnabled, toggleSound }),
    [soundEnabled, toggleSound]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

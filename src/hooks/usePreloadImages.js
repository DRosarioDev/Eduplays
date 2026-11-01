import { useEffect } from "react";

/**
 * Precarica solo le immagini indicate. Le immagini delle card usano
 * loading="lazy" per non scaricare tutta la home prima del necessario.
 */
export function usePreloadImages(srcs = []) {
  useEffect(() => {
    srcs.forEach((src) => {
      if (!src) return;
      const img = new Image();
      img.src = src;
    });
    // Le immagini sono risorse statiche: ricaricarle a ogni render è inutile.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

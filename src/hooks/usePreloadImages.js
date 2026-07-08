import { useEffect } from "react";

export function usePreloadImages(srcs = []) {
  useEffect(() => {
    srcs.forEach((src) => {
      if (!src) return;
      const img = new Image();
      img.src = src;
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
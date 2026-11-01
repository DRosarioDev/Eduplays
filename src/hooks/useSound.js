import { useSoundSettings } from "./useSoundSettings";

let sharedAudioContext = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;

  if (!sharedAudioContext) {
    sharedAudioContext = new AudioContextClass();
  }
  if (sharedAudioContext.state === "suspended") {
    sharedAudioContext.resume().catch(() => {});
  }
  return sharedAudioContext;
}

/**
 * Effetti sonori del gioco. Rispetta l'interruttore audio dell'header
 * e non fa rumore se il browser blocca la riproduzione automatica.
 */
export function useSound() {
  const { soundEnabled } = useSoundSettings();

  const playFile = (src, volume = 0.45) => {
    if (!soundEnabled) return;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch(() => {});
  };

  const playTone = (frequency, duration, type = "sine", volume = 0.12) => {
    if (!soundEnabled) return;
    const context = getAudioContext();
    if (!context) return;

    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);

    gain.gain.setValueAtTime(volume, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      context.currentTime + duration
    );

    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration);
  };

  const playCorrect = () => playFile("/sounds/correct_sound.mp3", 0.45);
  const playFlip = () => playFile("/sounds/flipping_card.mp3", 0.35);
  const playWin = () => playFile("/sounds/victory.mp3", 0.25);

  const playMatch = () => {
    playTone(520, 0.12);
    setTimeout(() => playTone(760, 0.16), 120);
  };

  const playWrong = () => {
    playTone(220, 0.16, "triangle", 0.09);
    setTimeout(() => playTone(174, 0.18, "triangle", 0.08), 130);
  };

  return { playCorrect, playFlip, playMatch, playWin, playWrong };
}

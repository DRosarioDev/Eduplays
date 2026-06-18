export function useSound() {
  // Frequency = HZ, duration = seconds, type = wave of the sound (frequency, duration, type = "sine")

  const playFreqSound = (frequency, duration, type = "sine") => {
    const contextAudio = new (
      window.AudioContext || window.webkitAudioContext
    )();
    const oscillator = contextAudio.createOscillator(); // Generation of the sound
    const gain = contextAudio.createGain(); // Volume controll

    oscillator.connect(gain);
    gain.connect(contextAudio.destination); // Exit of the audio from the device

    // Settings of the sounds
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, contextAudio.currentTime);

    // Fade out of the sounds
    gain.gain.setValueAtTime(0.3, contextAudio.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      contextAudio.currentTime + duration,
    );

    oscillator.start(contextAudio.currentTime);
    oscillator.stop(contextAudio.currentTime + duration);
  };

  const playDirSound = (dir, volume) => {
    const audio = new Audio(dir);
    audio.volume = volume;
    audio.play();
  };

  const playCorrect = () => playDirSound("/sounds/correct_sound.mp3", 0.5);
  const playFlip = () => playDirSound("/sounds/flipping_card.mp3", 0.5);
  const playMatch = () => {
    playFreqSound(500, 0.15);
    setTimeout(() => playFreqSound(700, 0.2), 150);
  };
  const playWin = () => playDirSound("/sounds/victory.mp3", 0.2);

  return { playCorrect, playFlip, playMatch, playWin };
}

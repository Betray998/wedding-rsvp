let audio: HTMLAudioElement | null = null;
let unlocked = false;

export function initMusic(src: string) {
  if (!audio) {
    audio = new Audio(src);
    audio.loop = true;
    audio.preload = "auto";
  }
}

export function playMusic() {
  if (!audio) return;

  audio.play().catch(() => {
    // autoplay 被擋正常
  });
}

export function unlockMusic() {
  if (!audio || unlocked) return;

  unlocked = true;

  audio.muted = false;
  audio.play().catch(() => {});
}

export function isMusicReady() {
  return !!audio;
}
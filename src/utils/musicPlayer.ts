let audio: HTMLAudioElement | null = null;

export const initMusic = (src: string) => {
  if (!audio) {
    audio = new Audio(src);
    audio.loop = true;
    audio.preload = "auto";
  }
  return audio;
};

export const playMusic = async () => {
  if (!audio) return;

  try {
    audio.muted = false;
    await audio.play();
  } catch (err) {
    console.log("播放被瀏覽器阻擋", err);
  }
};

export const pauseMusic = () => {
  audio?.pause();
};
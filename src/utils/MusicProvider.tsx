import { createContext, useContext, useRef, useEffect } from "react";

const MusicContext = createContext<any>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/1.CNBLUE(鄭容和)-Would you marry me.mp3");
      audioRef.current.loop = true;
      audioRef.current.preload = "auto";

      audioRef.current.play().catch(() => {});
    }
  }, []);

  const unlock = () => {
    audioRef.current?.play().then(() => {
      if (audioRef.current) audioRef.current.muted = false;
    });
  };

  return (
    <MusicContext.Provider value={{ unlock }}>
      {/* ⭐ 重點：audio 永遠存在，不會被 route 影響 */}
      <audio ref={audioRef as any} style={{ display: "none" }} />
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);
import { useEffect, useRef, useState } from "react";
import QRCodeShare from "../components/QRCodeShare";

export default function Home() {
  const targetDate = new Date("2026-09-12T18:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [musicStarted, setMusicStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlayMusic = () => {
    if (audioRef.current && !musicStarted) {
      audioRef.current
        .play()
        .then(() => {
          setMusicStarted(true);
        })
        .catch((err) => {
          console.log("瀏覽器阻擋播放", err);
        });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 背景 */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/F83459-0056.jpg"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-white/60 -z-10" />

      <div className="relative z-20 flex items-center justify-center min-h-screen px-5 sm:px-6">

        <div className="max-w-xl w-full text-center text-black">

          {/* 倒數 */}
          <div className="mb-6 text-center">
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
              COUNTDOWN TO WEDDING
            </p>

            <div className="flex justify-center gap-3 sm:gap-5 text-black">
              <div className="text-center">
                <p className="text-2xl">{timeLeft.days}</p>
                <p className="text-xs text-gray-500">DAYS</p>
              </div>

              <div className="text-center">
                <p className="text-2xl">{timeLeft.hours}</p>
                <p className="text-xs text-gray-500">HRS</p>
              </div>

              <div className="text-center">
                <p className="text-2xl">{timeLeft.minutes}</p>
                <p className="text-xs text-gray-500">MIN</p>
              </div>

              <div className="text-center">
                <p className="text-2xl">{timeLeft.seconds}</p>
                <p className="text-xs text-gray-500">SEC</p>
              </div>
            </div>
          </div>

          <p className="text-4xl mb-2">
            Wedding Invitation
          </p>

          <h1 className="text-6xl mb-5">
            我們要結婚了
          </h1>

          <p className="text-lg mb-10">
            誠摯邀請您參與我們人生中最重要的一天
          </p>

          {/* 音樂（真正播放來源） */}
          <audio
            ref={audioRef}
            src="/music/1.CNBLUE(鄭容和)-Would you marry me.mp3"
            loop
          />

          <div className="space-y-3">

            <a
              href="https://maps.app.goo.gl/WoNAN12mBQn1tGLU8"
              className="block bg-gray-800 text-white py-3 rounded-xl"
            >
              📍 宴客地點
            </a>

            {/* ✅ 只修這裡（關鍵） */}
            <a
              href="/rsvp"
              onClick={handlePlayMusic}
              className="block bg-gray-800 text-white py-4 rounded-xl"
            >
              💌 出席調查
            </a>

            <button className="block w-full bg-gray-800 py-3 rounded-xl text-white">
              📸 婚紗照（即將開放）
            </button>

          </div>

        </div>
      </div>

      {/* QR */}
      <QRCodeShare />
    </div>
  );
}
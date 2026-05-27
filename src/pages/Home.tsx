import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	
  const targetDate = new Date("2026-09-12T18:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🖼 背景 */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/F83459-0056.jpg"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 🌫 遮罩 */}
      <div className="absolute inset-0 bg-white/60 -z-10" />

      {/* 📄 內容 */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-5 sm:px-6">

        <div className="max-w-xl w-full text-center text-black">

          {/* 💍 倒數計時（已正確放入 return） */}
          <div className="mb-6 text-center">
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
              COUNTDOWN TO WEDDING
            </p>

            <div className="flex justify-center gap-3 sm:gap-5 text-black">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-light">{timeLeft.days}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">DAYS</p>
              </div>

              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-light">{timeLeft.hours}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">HRS</p>
              </div>

              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-light">{timeLeft.minutes}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">MIN</p>
              </div>

              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-light">{timeLeft.seconds}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">SEC</p>
              </div>
            </div>
          </div>

          {/* 以下全部保持你原本內容 */}
          <p className="text-3xl sm:text-3xl md:text-4xl handwriting text-black mb-2 leading-tight">
            Wedding Invitation
          </p>

          <h1 className="text-4xl sm:text-4xl md:text-5xl handwriting-cn text-black mb-1 leading-snug">
            全成 & 德璇
          </h1>
		  
		  <h1 className="text-5xl sm:text-5xl md:text-6xl handwriting-cn text-black mb-1 leading-snug">
            我們要結婚了
          </h1>

          <p className="text-base sm:text-xl md:text-2xl handwriting-cn text-black mb-1 leading-relaxed px-12 sm:px-0">
            誠摯邀請您參與我們人生中最重要的一天，<br />
			期待與您一同見證幸福時刻。
          </p>

          <div className="border-t border-b py-5 sm:py-6 mb-8 sm:mb-10 text-gray-800">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-gray-500 mb-3">
              CEREMONY TIME & LOCATION
            </p>

            <p className="text-lg sm:text-2xl md:text-3xl handwriting-cn text-black leading-snug mb-2">
              2026 / 09 / 12（六）18:00
            </p>

            <p className="text-lg sm:text-2xl md:text-3xl handwriting-cn text-black leading-snug">
              藏鮮閣
			  <br />新竹縣竹北市文興路二段378號
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
		  {/*造成重新載入//<a
			  href="/rsvp"*/}
			<Link
			  to="/rsvp"
			  className="block bg-gray-800 text-white py-3 sm:py-4 rounded-xl hover:bg-gray-700 transition text-sm sm:text-base"
			>
			  💌 出席調查
			</Link>
			{/*</a*/}

            <a
			  href="https://maps.app.goo.gl/WoNAN12mBQn1tGLU8"
              target="_blank"
              className="block bg-gray-800 text-white py-3 sm:py-4 rounded-xl hover:bg-gray-700 transition text-sm sm:text-base"
            >
              📍 宴客地點
            </a>
			
		  {/*造成重新載入//<a
			  href="/traffic"*/}
			<Link
			  to="/traffic"
			  className="block bg-gray-800 text-white py-3 sm:py-4 rounded-xl hover:bg-gray-700 transition text-sm sm:text-base"
			>
			  🚗 交通指南
			</Link>

		  {/*造成重新載入//<a
			  href="/gallery"*/}
			<Link
			  to="/gallery"
			  className="block w-full border bg-gray-800 py-3 sm:py-4 rounded-xl text-white text-sm sm:text-base">
              📸 婚紗藝廊
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}
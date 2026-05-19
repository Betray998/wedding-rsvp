export default function Home() {
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

          {/* 英文標題 */}
          <p className="text-4xl sm:text-4xl md:text-6xl handwriting text-black mb-2 leading-tight">
            Wedding Invitation
          </p>

          {/* 中文主標 */}
          <h1 className="text-6xl sm:text-6xl md:text-7xl handwriting-cn text-black mb-5 leading-snug">
            我們要結婚了
          </h1>

          {/* 內文 */}
          <p className="text-base sm:text-lg md:text-xl handwriting-cn text-black mb-10 leading-relaxed px-12 sm:px-0">
            誠摯邀請您參與我們人生中最重要的一天，
            期待與您一同見證幸福時刻。
          </p>

          {/* 時間區塊 */}
          <div className="border-t border-b py-5 sm:py-6 mb-8 sm:mb-10 text-gray-800">

            <p className="text-xs sm:text-sm tracking-[0.2em] text-gray-500 mb-3">
              CEREMONY TIME & LOCATION
            </p>

            <p className="text-lg sm:text-2xl md:text-3xl handwriting-cn text-black leading-snug mb-2">
              2026 / 09 / 12（六）18:00
            </p>

            <p className="text-lg sm:text-2xl md:text-3xl handwriting-cn text-black leading-snug">
              藏鮮閣 新竹縣竹北市文興路二段378號
            </p>

          </div>

          {/* 按鈕區 */}
          <div className="space-y-3 sm:space-y-4">

            <a
              href="https://maps.app.goo.gl/WoNAN12mBQn1tGLU8"
              target="_blank"
              className="block bg-gray-800 text-white py-3 sm:py-4 rounded-xl hover:bg-gray-700 transition text-sm sm:text-base"
            >
              📍 宴客地點
            </a>

            <a
              href="/rsvp"
              className="block bg-gray-800 text-white py-3 sm:py-4 rounded-xl hover:bg-gray-700 transition text-sm sm:text-base"
            >
              💌 出席調查
            </a>

            <button className="block w-full border bg-gray-800 py-3 sm:py-4 rounded-xl text-white text-sm sm:text-base">
              📸 婚紗照（即將開放）
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
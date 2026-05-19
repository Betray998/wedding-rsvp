export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🖼 背景圖片（最底層） */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/F83459-0056.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🌫 遮罩層 */}
      <div className="absolute inset-0 bg-white/60 -z-10" />

      {/* 📄 內容層（最上） */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        
        <div className="max-w-xl w-full text-center text-black">

          <p className="text-6xl md:text-5xl handwriting text-black mb-2 leading-tight">
            Wedding Invitation
          </p>

		  <h1 className="text-6xl md:text-7xl handwriting-cn text-black mb-6 leading-tight">
            我們要結婚了
          </h1>

          <p className="text-xl md:text-4xl handwriting-cn text-black mb-12 leading-tight">
            誠摯邀請您參與我們人生中最重要的一天， 
            期待與您一同見證幸福時刻。
          </p>

          {/* 時間 */}
          <div className="border-t border-b py-6 mb-10 text-gray-800">
            <p className="text-sm tracking-[0.2em] text-gray-500 mb-2">
              CEREMONY TIME & LOCATION
            </p>
            <p className="text-xl md:text-3xl handwriting-cn text-black mb-0.1 leading-tight">
              2026 / 09 / 12（六）18:00
            </p>
			<p className="text-xl md:text-3xl handwriting-cn text-black mb-0.1 leading-tight">
              藏鮮閣 新竹縣竹北市文興路二段378號
            </p>
          </div>

          <div className="space-y-4">

            <a
              href="https://maps.app.goo.gl/WoNAN12mBQn1tGLU8"
              target="_blank"
              className="block bg-gray-700 text-white py-4 rounded-xl hover:border-gray-500 transition"
            >
              📍 宴客地點
            </a>

            <a
              href="/rsvp"
              className="block bg-gray-700 text-white py-4 rounded-xl hover:opacity-80 transition"
            >
              💌 出席調查
            </a>

            <button className="block w-full border bg-gray-700 py-4 rounded-xl text-white">
              📸 婚紗照（即將開放）
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
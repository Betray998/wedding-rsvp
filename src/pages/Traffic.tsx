export default function Traffic() {
  return (
    <div className="relative min-h-screen overflow-hidden text-black">

      {/* 🖼 背景（跟首頁一致） */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/F83459-0072.jpg"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 🌫 遮罩 */}
      <div className="absolute inset-0 bg-white/60 -z-10" />

      {/* 📄 內容 */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-5 sm:px-6">

        <div className="max-w-xl w-full text-center text-black">

          {/* 標題 */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
              TRAFFIC GUIDE
            </p>

            <h1 className="text-4xl sm:text-4xl md:text-6xl handwriting-cn text-black mb-2 leading-tight">
              交通指南
            </h1>

            <p className="text-base sm:text-lg md:text-xl handwriting-cn text-black leading-relaxed">
              以下提供前往藏鮮閣的交通方式 ✨
            </p>
          </div>

          {/* 高鐵 */}
          <div className="border-t border-b py-5 sm:py-6 mb-6 text-left text-gray-800">
            <p className="text-lg sm:text-2xl md:text-3xl handwriting-cn text-black mb-2">
              🚄 高鐵
            </p>

            <p className="mb-2">
              搭乘高鐵至「新竹站」後，車程約 5 分鐘即可抵達藏鮮閣。
            </p>

            <p>可選擇：</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>計程車（推薦，最快速）</li>
              <li>YouBike (會場對面有YouBike站)</li>
              <li>步行 約 10~15 分鐘</li>
            </ul>
          </div>

          {/* 火車 */}
          <div className="border-b py-5 sm:py-6 mb-6 text-left text-gray-800">
            <p className="text-lg sm:text-2xl md:text-3xl handwriting-cn text-black mb-2">
              🚆 火車
            </p>

            <p className="mb-2">
              搭乘台鐵至「六家車站」後，步行約 10~15 分鐘即可抵達。
            </p>

            <p>若搭乘至「新竹火車站」，建議轉乘：</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>台鐵六家線</li>
              <li>計程車</li>
            </ul>
          </div>

          {/* 汽車 */}
          <div className="border-b py-5 sm:py-6 mb-8 text-left text-gray-800">
            <p className="text-lg sm:text-2xl md:text-3xl handwriting-cn text-black mb-2">
              🚗 汽車
            </p>

            <p className="mb-2">建議導航設定：</p>

            <div className="bg-white/70 rounded-xl p-4 font-medium mb-3">
              藏鮮閣
              <br />
              新竹縣竹北市文興路二段378號
            </div>

            <p>可由國道一號竹北交流道下，沿文興路前往會場。</p>

            <p>現場周邊設有停車空間，建議提早抵達。</p>
          </div>

          {/* 按鈕（跟首頁一致） */}
          <div className="space-y-3">
            <a
              href="/"
              className="block bg-gray-800 text-white py-4 rounded-xl hover:bg-gray-700 transition"
            >
              ← 返回首頁
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen relative text-gray-900 overflow-x-hidden">

      {/* 背景 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <img
          src="/images/F83459-0149.jpg"
          className="w-full h-full object-cover object-[50%_25%]"
        />

        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* 內容 */}
      <div className="min-h-screen flex items-center justify-center px-6">

        <div className="max-w-xl w-full text-center">

          <p className="tracking-[0.35em] text-gray-500 text-sm mb-4">
            WEDDING RSVP
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl handwriting-cn text-black mb-6 leading-snug">
            感謝您的填寫
          </h1>

          <p className="text-2xl sm:text-2xl md:text-3xl handwriting-cn text-gray-700 leading-relaxed mb-10 px-4">
            我們已收到您的出席回覆，
            <br />
            期待在婚禮當天與您相見 ✨
          </p>

          <div className="bg-white/70 backdrop-blur rounded-3xl shadow-lg border border-white/50 p-8">

            <div className="text-pink-200 text-7xl mb-4">
			  ❤
			</div>

            <p className="text-gray-700 leading-relaxed mb-8">
              您的資料已成功送出，
              <br />
              感謝您的祝福。
            </p>

            <Link
              to="/"
              className="inline-block bg-gray-800 text-white px-10 py-4 rounded-xl hover:bg-gray-700 transition"
            >
              返回首頁
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}
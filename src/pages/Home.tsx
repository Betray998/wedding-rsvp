import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <p className="tracking-[0.35em] text-rose-400 text-sm mb-4">
          WEDDING INVITATION
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          我們要結婚了 💍
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          誠摯邀請您參與我們人生中最重要的一天，
          期待與您一起分享幸福與喜悅。
        </p>

        <div className="space-y-5">
		  <div className="w-full rounded-3xl bg-white/80 backdrop-blur border border-rose-100 shadow-lg px-8 py-6">
			<div className="text-2xl font-bold text-gray-800 mb-2">
			🕰 婚宴時間
			</div>

			<p className="text-gray-600 text-lg">
			2026 / 09 / 12（六）晚上 6:00
			</p>
		</div>
          {/* 宴客地點 */}
          <a
            href="https://maps.app.goo.gl/WoNAN12mBQn1tGLU8"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-3xl bg-white/80 backdrop-blur border border-rose-100 shadow-lg px-8 py-6 hover:scale-[1.02] transition-transform"
          >
            <div className="text-2xl font-bold text-gray-800 mb-2">
              📍 宴客地點
            </div>

            <p className="text-gray-500">
              點擊查看 Google Map 導航
            </p>
          </a>

          {/* 出席調查 */}
          <Link
            to="/rsvp"
            className="block w-full rounded-3xl bg-rose-500 text-white shadow-lg px-8 py-6 hover:scale-[1.02] transition-transform"
          >
            <div className="text-2xl font-bold mb-2">
              💌 出席調查
            </div>

            <p className="text-rose-100">
              填寫婚禮 RSVP 問卷
            </p>
          </Link>

          {/* 婚紗照分享 */}
          <button
            className="block w-full rounded-3xl bg-white/80 backdrop-blur border border-rose-100 shadow-lg px-8 py-6 hover:scale-[1.02] transition-transform"
          >
            <div className="text-2xl font-bold text-gray-800 mb-2">
              📸 婚紗照分享
            </div>

            <p className="text-gray-500">
              即將開放，敬請期待
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
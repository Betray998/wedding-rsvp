import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-rose-50 to-white">
      <h1 className="text-4xl font-bold mb-4">💖 感謝您的填寫</h1>
      <p className="text-gray-600 mb-6">
        我們已收到您的 RSVP，期待婚禮見！
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-rose-500 text-white rounded-full"
      >
        回首頁
      </Link>
    </div>
  );
}
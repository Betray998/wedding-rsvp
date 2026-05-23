import HTMLFlipBook from "react-pageflip";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

// 自動抓取資料夾內所有 jpg/png/jpeg
const images = Object.values(
  import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
    eager: true,
    import: "default",
  })
) as string[];

export default function Gallery() {
  const bookRef = useRef<any>(null);
  const navigate = useNavigate();
  const FlipBook = HTMLFlipBook as any;

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <FlipBook
        width={400}
        height={600}
        showCover={true}
        ref={bookRef}
      >
        {/* ================= 封面 ================= */}
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <img
            src="/images/F83459-0133.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative text-center text-white">
            <div className="text-sm tracking-[0.3em] mb-3 opacity-80">
              WEDDING ALBUM
            </div>

            <h1 className="text-4xl handwriting-cn mb-4">
              我們的故事
            </h1>

            <div className="text-lg opacity-90">♡ 2026 ♡</div>
          </div>
        </div>

        {/* ================= 照片頁 ================= */}
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={src}
                alt={`wedding-${index}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}

        {/* ================= 最後一頁 ================= */}
        <div className="relative w-full h-full bg-black">
          {/* 背景圖 */}
          <img
            src="/images/F83459-0133.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          {/* 遮罩 */}
          <div className="absolute inset-0 bg-black/40" />

          {/* ⭐ 真正書頁中心 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white flex flex-col items-center gap-4">
              <h2 className="text-3xl handwriting-cn">
                謝謝你看到這裡 ♡
              </h2>

              <p className="text-sm opacity-70">
                希望你喜歡我們的故事
              </p>

              <div className="flex flex-col gap-3 mt-2">
                {/* 回封面 */}
                <button
                  onClick={() => {
                    bookRef.current?.pageFlip()?.flip(0);
                  }}
                  className="px-4 py-2 rounded-full bg-white text-black text-sm w-fit"
                >
                  返回封面
                </button>

                {/* 回首頁 */}
                <button
                  onClick={() => navigate("/")}
                  className="px-4 py-2 rounded-full border border-white text-white text-sm w-fit"
                >
                  首頁 🏠
                </button>
              </div>
            </div>
          </div>
        </div>
      </FlipBook>
    </div>
  );
}
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
        mobileScrollSupport={false}
        maxShadowOpacity={0.9}
        drawShadow={true}
        flippingTime={1200}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
      >
        {/* ================= 封面 ================= */}
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <img
            src="/images/F83459-0133.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative text-center text-white">
            <div className="relative text-center text-white mt-20 -translate-y-2">
              LOVE ALBUM
            </div>

            <h1 className="text-3xl handwriting-cn mb-2">
              成成 ♥ 德德
            </h1>

            <div className="text-lg opacity-90">♡ 2026.09.12 ♡</div>
          </div>
        </div>

        {/* ================= 照片頁 ================= */}
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-full bg-black overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={src}
                alt={`wedding-${index}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* 書頁邊緣陰影 */}
            <div className="absolute left-0 top-0 h-full w-3 bg-black/10 pointer-events-none" />

            {/* 光澤 */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-black/15" />
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
                Love never ends ♡
              </h2>

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
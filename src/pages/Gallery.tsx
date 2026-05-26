import HTMLFlipBook from "react-pageflip";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

// 自動抓取資料夾內所有 jpg/png/jpeg/webp
const images = Object.values(
  import.meta.glob("../assets/gallery_resize/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp}", {
    eager: true,
    import: "default",
  })
) as string[];

export default function Gallery() {
  const bookRef = useRef<any>(null);
  const navigate = useNavigate();
  const FlipBook = HTMLFlipBook as any;

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const isMobile = window.innerWidth < 768;

  // ✅ 只 preload 前 10 張
  useEffect(() => {
    const preloadImages = [
      "/images/F83459-0133.jpg",
      ...images.slice(0, 10),
    ];

    let loadedCount = 0;

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loadedCount++;

        if (loadedCount === preloadImages.length) {
          setTimeout(() => {
            setLoading(false);
          }, 500); // 小延遲讓動畫順一點
        }
      };

      img.onerror = () => {
        loadedCount++;

        if (loadedCount === preloadImages.length) {
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
      };
    });
  }, []);

  // ✅ loading 畫面（心跳動畫）
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-center text-white">

          {/* ❤️ 心跳 */}
          <div className="text-6xl text-rose-300 animate-pulse">
            ❤
          </div>

          {/* 自訂心跳動畫 */}
          <style>
            {`
              @keyframes heartbeat {
                0% { transform: scale(1); }
                25% { transform: scale(1.2); }
                50% { transform: scale(1); }
                75% { transform: scale(1.2); }
                100% { transform: scale(1); }
              }

              .animate-pulse {
                animation: heartbeat 1.1s infinite;
                display: inline-block;
              }
            `}
          </style>

          <p className="mt-4 text-sm tracking-wider">
            正在準備美美婚紗照...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center relative">

      <FlipBook
        //width={400}
        //height={600}
		width={isMobile ? 320 : 400}
		height={isMobile ? 480 : 600}
        showCover={true}
        ref={bookRef}
        mobileScrollSupport={false}
        maxShadowOpacity={0.9}
        drawShadow={true}
        flippingTime={1200}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        onFlip={(e: any) => setCurrentPage(e.data)}
      >
        {/* ================= 封面 ================= */}
        <div className="relative w-full h-full flex items-center justify-center bg-black">
          <img
            src="/images/F83459-0133.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative text-center text-white">
            <div className="relative text-center text-white mt-26 -translate-y-2">
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
                className="max-w-full max-h-full object-cover"
              />
            </div>

            <div className="absolute left-0 top-0 h-full w-3 bg-black/10 pointer-events-none" />

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-black/15" />
          </div>
        ))}

        {/* ================= 最後一頁 ================= */}
        <div className="relative w-full h-full bg-black">

          <img
            src="/images/F83459-0133.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white flex flex-col items-center gap-4">

              <h2 className="text-3xl handwriting-cn">
                Love never ends ♡
              </h2>

              <div className="flex flex-col gap-3 mt-2">

                <button
                  onClick={() => {
                    bookRef.current?.pageFlip()?.flip(0);
                  }}
                  className="px-4 py-2 rounded-full bg-white text-black text-sm w-fit"
                >
                  返回封面
                </button>

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

      {/* ⭐ 相簿外返回首頁按鈕 */}
      {currentPage !== images.length && currentPage !== images.length + 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-full border border-white text-white text-sm bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition"
          >
            首頁 🏠
          </button>
        </div>
      )}

    </div>
  );
}
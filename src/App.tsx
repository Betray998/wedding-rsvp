import { useEffect, useRef, useState } from "react";

export default function WeddingRSVPPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "",
    attendees: "",
    relation: "",
    meal: "",
    specialMeal: "",
    childSeat: "",
    children: "",
    blessing: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await fetch(
  "https://script.google.com/macros/s/AKfycbz_gM7VrmKq2QsB6JKSuQU7rvlM4VhMEb_HFlyIB9rXn7glcbxGP_W8zynEd3nSmTDuFw/exec",
  {
    method: "POST",
    body: new URLSearchParams(formData).toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

      alert("提交成功！感謝您的填寫 💖");
    } catch (error) {
      console.error(error);
      alert("提交失敗，請稍後再試");
    }
  };
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const weddingMusic = "/music/1.CNBLUE(鄭容和)-Would you marry me.mp3";
  const sectionClass = "bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-5";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";
  const inputClass = "w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300";
  const radioClass = "flex items-center gap-2 text-gray-700";

  useEffect(() => {
    const playMusic = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.muted = true;
        }
        await audioRef.current?.play();
      } catch (error) {
        console.log("瀏覽器阻擋自動播放", error);
      }
    };

    playMusic();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 text-gray-800">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="tracking-[0.35em] text-rose-400 text-sm mb-4">
            WEDDING RSVP
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            婚禮出席調查問卷
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            親愛的朋友您好，誠摯邀請您參加我們的婚禮！
            為了方便安排座位與餐點，請協助填寫以下問卷。
          </p>

          <div className="mt-8 max-w-2xl mx-auto bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 text-left space-y-4 border border-rose-100">
            <div>
              <p className="text-sm tracking-[0.2em] text-rose-400 mb-1">婚宴時間</p>
              <p className="text-lg font-semibold">2026 / 09 / 12（六）晚上 6:00</p>
            </div>

            <div>
              <p className="text-sm tracking-[0.2em] text-rose-400 mb-1">婚宴地點</p>
              <p className="text-lg font-semibold">藏鮮閣</p>
              <p className="text-gray-600">302 新竹縣竹北市隘口里文興路二段378號</p>
            </div>

            <a
              href="https://maps.app.goo.gl/WoNAN12mBQn1tGLU8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose-500 font-medium hover:underline"
            >
              查看 Google 地圖 →
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-5">
            <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-rose-100 p-4">
              <p className="text-sm tracking-[0.2em] text-rose-400 mb-3 text-center">
                WEDDING MUSIC
              </p>

              <div className="overflow-hidden rounded-2xl bg-rose-50 p-4">
                <audio
                  ref={audioRef}
                  controls
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="w-full"
                >
                  <source src={weddingMusic} type="audio/mpeg" />
                  您的瀏覽器不支援音樂播放。
                </audio>
              </div>

              <p className="text-xs text-gray-500 mt-3 text-center break-all">
                播放歌曲：CNBLUE(鄭容和) - Would you marry me
              </p>
            </div>

            <div className="mt-2 flex justify-center">
              <button className="px-8 py-4 rounded-full bg-rose-500 text-white font-medium shadow-lg hover:scale-105 transition-transform">
                開始填寫
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-8">
        {/* Basic Info */}
        <section className={sectionClass}>
          <div>
            <h2 className="text-2xl font-bold mb-1">基本資訊</h2>
            <p className="text-gray-500 text-sm">請填寫聯絡與出席資訊</p>
          </div>

          <div>
            <label className={labelClass}>1. 賓客姓名</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="請輸入姓名" />
          </div>

          <div>
            <label className={labelClass}>2. 聯絡電話</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="請輸入聯絡電話" />
          </div>
        </section>

        {/* Attendance */}
        <section className={sectionClass}>
          <div>
            <h2 className="text-2xl font-bold mb-1">出席資訊</h2>
            <p className="text-gray-500 text-sm">協助我們安排婚宴座位</p>
          </div>

          <div>
            <label className={labelClass}>3. 是否出席婚宴？</label>
            <div className="grid gap-3 md:grid-cols-3">
              {['會出席', '無法出席'].map((item) => (
                <label key={item} className="border rounded-2xl p-4 hover:border-rose-300 cursor-pointer flex items-center gap-3">
                  <input type="radio" name="attendance" value={item} checked={formData.attendance === item} onChange={handleChange} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>4. 出席人數</label>
            <select name="attendees" value={formData.attendees} onChange={handleChange} className={inputClass}>
              <option>請選擇</option>
              <option>1 人</option>
              <option>2 人</option>
              <option>3 人</option>
              <option>4 人以上</option>
            </select>
          </div>
        </section>

        {/* Relationship */}
        <section className={sectionClass}>
          <div>
            <h2 className="text-2xl font-bold mb-1">與新人關係</h2>
            <p className="text-gray-500 text-sm">方便婚宴安排與統計</p>
          </div>

          <div>
            <label className={labelClass}>6. 您與新人的關係</label>
            <div className="grid gap-3 md:grid-cols-2">
              {['新郎碩班同學','新郎大學同學','新郎高中同學','新郎國中同學','新郎國小同學','新郎必勝客同事','新娘朋朋', '其他'].map((item) => (
                <label key={item} className="border rounded-2xl p-4 hover:border-rose-300 cursor-pointer flex items-center gap-3">
                  <input type="radio" name="relation" value={item} checked={formData.relation === item} onChange={handleChange} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Meal */}
        <section className={sectionClass}>
          <div>
            <h2 className="text-2xl font-bold mb-1">餐點需求</h2>
            <p className="text-gray-500 text-sm">請提前告知飲食需求</p>
          </div>

          <div>
            <label className={labelClass}>7. 餐點需求</label>
            <div className="space-y-3">
              {['葷食', '素食', '其他特殊飲食需求'].map((item) => (
                <label key={item} className={radioClass}>
                  <input type="radio" name="meal" value={item} checked={formData.meal === item} onChange={handleChange} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>8. 是否有食物過敏或特殊飲食需求？</label>
            <textarea
              name="specialMeal"
              value={formData.specialMeal}
              onChange={handleChange}
              className={inputClass}
              rows={3}
              placeholder="請填寫特殊需求"
            />
          </div>
        </section>

        {/* Children */}
        <section className={sectionClass}>
          <div>
            <h2 className="text-2xl font-bold mb-1">兒童需求</h2>
            <p className="text-gray-500 text-sm">讓孩子也能舒適參與婚宴</p>
          </div>

          <div>
            <label className={labelClass}>10. 是否需要兒童座椅？</label>
            <div className="space-y-3">
              {['不需要', '需要 1 張', '需要 2 張以上'].map((item) => (
                <label key={item} className={radioClass}>
                  <input type="radio" name="childSeat" value={item} checked={formData.childSeat === item} onChange={handleChange} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>11. 是否會攜帶兒童同行？</label>
            <div className="flex gap-6">
              {['是', '否'].map((item) => (
                <label key={item} className={radioClass}>
                  <input type="radio" name="children" value={item} checked={formData.children === item} onChange={handleChange} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Blessing */}
        <section className={sectionClass}>
          <div>
            <h2 className="text-2xl font-bold mb-1">給新人的祝福</h2>
            <p className="text-gray-500 text-sm">留下您最溫暖的祝福吧 💌</p>
          </div>

          <div>
            <label className={labelClass}>13. 想對新人說的祝福話語</label>
            <textarea
              name="blessing"
              value={formData.blessing}
              onChange={handleChange}
              className={inputClass}
              rows={6}
              placeholder="祝福新人永浴愛河、幸福美滿⋯⋯"
            />
          </div>

          <div>
            <label className={labelClass}>14. 其他想告知新人的事項</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              className={inputClass}
              rows={4}
              placeholder="其他備註事項"
            />
          </div>
        </section>

        {/* Submit */}
        <section className="text-center pt-4">
          <button
            onClick={handleSubmit}
            className="px-10 py-4 rounded-full bg-gray-900 text-white text-lg font-medium shadow-lg hover:scale-105 transition-transform"
          >
            提交問卷
          </button>

          <p className="text-sm text-gray-500 mt-5">
            感謝您的填寫與祝福，期待在婚禮當天與您相見 ✨
          </p>
        </section>
      </main>
    </div>
  );
}

import { useState } from "react";
//import Countdown from "./components/Countdown";
//import QRCodeShare from "./components/QRCodeShare";

export default function WeddingRSVPPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mail: "",
    attendance: "",
    attendees: "",
	attendeesOther: "",
    relation: "",
    meal: "",
    specialMeal: "",
	children: "",
    childSeat: "",
	childSeatOther: "",
    blessing: "",
    note: "",
  });

  // ⭐⭐⭐ 正確位置：放在 component 裡 ⭐⭐⭐

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
      if (!formData.name || !formData.phone || !formData.mail) {
        alert("請填寫姓名,電話和mail");
        return;
      }
	  // ✅ 1. 先整理資料
    const submitData = {
      ...formData,

      // 人數：如果選 other → 用輸入值
      attendees:
        formData.attendees === "other"
          ? formData.attendeesOther
          : formData.attendees,

      // 兒童座椅：如果選其他 → 用輸入值
      childSeat:
        formData.childSeat === "其他"
          ? formData.childSeatOther
          : formData.childSeat,
      };
	  // 🧪 debug（建議保留）
		console.log("submitData:", submitData);
		
      await fetch(
        "https://script.google.com/macros/s/AKfycbzAfy0avs38kNvYw27ugXhbj7_2wq-m7cTPCKS2qLwITgM3Au13PmHznWxPZhlH6NC2/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
		  body: JSON.stringify(submitData),
		}
      );

      window.location.href = "/success";

      setFormData({
        name: "",
        phone: "",
        mail: "",
        attendance: "",
        attendees: "",
		attendeesOther: "",
        relation: "",
        meal: "",
        specialMeal: "",
		children: "",
        childSeat: "",
		childSeatOther: "",
        blessing: "",
        note: "",
      });
    } catch (error) {
      console.error(error);
      alert("提交失敗，請稍後再試");
    }
  };

  const sectionClass =
    "bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-5";
  const labelClass =
    "block text-sm font-medium text-gray-700 mb-2";
  const inputClass =
    "w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300";
  const radioClass =
    "flex items-center gap-2 text-gray-700";

return (
  <div className="min-h-screen relative text-gray-900 overflow-x-hidden">

    {/* ✅ 背景（手機/桌機都置中穩定） */}
    <div className="fixed inset-0 -z-10 overflow-hidden">
	  <img
      src="/images/F83459-0149.jpg"
      className="w-full h-full object-cover object-[50%_25%]"
	  />

	  <div className="absolute inset-0 bg-white/70" />
	</div>

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 text-center">

        <p className="tracking-[0.25em] sm:tracking-[0.35em] text-rose-400 text-xs sm:text-sm mb-3 sm:mb-4">
          WEDDING RSVP
        </p>

        <h1 className="handwriting-cn text-3xl sm:text-5xl md:text-7xl font-light leading-snug mb-4 sm:mb-6">
          婚禮出席調查問卷
        </h1>

        <p className="handwriting-cn text-sm sm:text-3x1 md:text-3xl text-gray-700 leading-relaxed px-2 sm:px-6 md:px-12 mb-8 sm:mb-1">
          親愛的朋友您好，誠摯邀請您參加我們的婚禮！
		  <br />
          為了方便安排座位與餐點，請協助填寫以下問卷。
        </p>

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
            <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="請輸入姓名(必填)" />
          </div>

          <div>
            <label className={labelClass}>2. 聯絡電話</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="請輸入聯絡電話(必填)" />
          </div>
		  
		  <div>
            <label className={labelClass}>3. 電子信箱</label>
            <input type="tel" name="mail" value={formData.mail} onChange={handleChange} className={inputClass} placeholder="請輸入電子信箱(必填)" />
          </div>
        </section>

        {/* Attendance */}
        <section className={sectionClass}>
          <div>
            <h2 className="text-2xl font-bold mb-1">出席資訊</h2>
            <p className="text-gray-500 text-sm">協助我們安排婚宴座位</p>
          </div>

          <div>
            <label className={labelClass}>4. 是否出席婚宴？</label>
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
			<label className={labelClass}>5. 出席人數</label>
			<select
			  name="attendees"
			  value={formData.attendees}
			  onChange={handleChange}
			  className={inputClass}
			>
			  <option value="">請選擇</option>
			  <option value="1">1 人</option>
			  <option value="2">2 人</option>
			  <option value="3">3 人</option>
			  <option value="other">其他</option>
			</select>
		</div>
        
		{formData.attendees === "other" && (
		<div>
			<label className={labelClass}>請填寫實際出席人數</label>
			<input
			type="number"
			name="attendeesOther"
			value={formData.attendeesOther}
			onChange={handleChange}
			className={inputClass}
			placeholder="例如：4 人"
			min="1"
			/>
		</div>
		)}
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
              {['新郎研究所同學','新郎大學同學','新郎高中同學','新郎國中同學','新郎國小同學','新郎必勝客同事','新娘朋朋', '其他'].map((item) => (
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
              {['葷食', '素食'].map((item) => (
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
			<label className={labelClass}>9. 是否會攜帶兒童同行？</label>
            <div className="flex gap-6">
              {['是', '否'].map((item) => (
                <label key={item} className={radioClass}>
                  <input type="radio" name="children" value={item} checked={formData.children === item} onChange={handleChange} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
			<label className={labelClass}>10. 是否需要兒童座椅？</label>

			<div className="space-y-3">
			  {['不需要', '需要 1 張', '其他'].map((item) => (
			    <label key={item} className={radioClass}>
				 <input
				 type="radio"
				 name="childSeat"
				 value={item}
				 checked={formData.childSeat === item}
				 onChange={handleChange}
				/>
				<span>{item}</span>
			</label>
			))}
		  </div>

		  {/* 👉 選其他才顯示輸入框 */}
			{formData.childSeat === "其他" && (
			<div className="mt-3">
				<input
				type="text"
				name="childSeatOther"
				value={(formData as any).childSeatOther || ""}
				onChange={handleChange}
				className={inputClass}
				placeholder="請輸入實際需求數量（例如：2 張 / 3 張）"
			/>
			</div>
		  )}
		</div>
        </section>

        {/* Blessing */}
        <section className={sectionClass}>
          <div>
            <h2 className="text-2xl font-bold mb-1">給新人的祝福</h2>
            <p className="text-gray-500 text-sm">留下您最溫暖的祝福吧 💌</p>
          </div>

          <div>
            <label className={labelClass}>11. 想對新人說的祝福話語</label>
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
            <label className={labelClass}>12. 其他想告知新人的事項</label>
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
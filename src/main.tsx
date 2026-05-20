import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Traffic from "./pages/Traffic";
import WeddingRSVPPage from "./App";
import Success from "./pages/Success";
import "./index.css";

import { initMusic, unlockMusic, playMusic } from "./utils/musicPlayer";

function Root() {
  useEffect(() => {
    // 👉 只初始化一次（全域單例）
    initMusic("/music/1.CNBLUE(鄭容和)-Would you marry me.mp3");

    // 👉 嘗試自動播放（瀏覽器會擋）
    playMusic();

    const handleUnlock = () => {
      unlockMusic();
    };

    window.addEventListener("pointerdown", handleUnlock, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleUnlock);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* 首頁 */}
        <Route path="/" element={<Home />} />

        {/* 交通指南 */}
        <Route path="/traffic" element={<Traffic />} />

        {/* RSVP 問卷 */}
        <Route path="/rsvp" element={<WeddingRSVPPage />} />

        {/* 成功頁 */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
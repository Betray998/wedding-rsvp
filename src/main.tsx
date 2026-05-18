import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WeddingRSVPPage from "./App";
import Success from "./pages/Success";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
		{/* 首頁 */}
        <Route path="/" element={<Home />} />
		{/* RSVP 問卷 */}
        <Route path="/rsvp" element={<WeddingRSVPPage />} />
		{/* 成功頁 */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-09-12T18:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3 text-center mt-6">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="bg-white rounded-2xl shadow p-3">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-xs text-gray-500">{key}</div>
        </div>
      ))}
    </div>
  );
}
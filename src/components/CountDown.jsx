"use client"
import { useEffect, useState } from "react";

export default function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("11/11/2023 7:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0);
      setDays(d);

      const h = Math.max(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        0
      );
      setHours(h);

      const m = Math.max(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        0
      );
      setMinutes(m);

      const s = Math.max(Math.floor((difference % (1000 * 60)) / 1000), 0);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        // Puedes agregar lógica adicional cuando llegue a cero
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="border-[#A67D4B] p-4 rounded-lg text-center my-[30px] border-2">
        <h3 className="mb-[10px]">Faltan</h3>
        <div className="flex items-center justify-between">
          <div className="timer-segment flex flex-col">
            <h3 className="time text-[30px]">{days}</h3>
            <h3 className="label">Días</h3>
          </div>
          <div className="timer-segment flex flex-col">
            <h3 className="time text-[30px]">{hours}</h3>
            <h3 className="label">Hs</h3>
          </div>
          <div className="timer-segment flex flex-col">
            <h3 className="time text-[30px]">{minutes}</h3>
            <h3 className="label">Min</h3>
          </div>
          <div className="timer-segment flex flex-col ">
            <h3 className="time text-[30px]">{seconds}</h3>
            <h3 className="label">Seg</h3>
          </div>
        </div>
      </div>
    </>
  );
}


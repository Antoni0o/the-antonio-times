"use client";
import { useState, useEffect } from "react";

export default function DayMessage() {
  const [message, setMessage] = useState("Bom dia!");
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  console.log("currentHour", currentHour);

  useEffect(() => {
    if (currentHour >= 6 && currentHour <= 12) {
      setMessage("Bom dia!");
    } else if (currentHour >= 12 && currentHour <= 18) {
      setMessage("Boa tarde!");
    } else if (currentHour >= 18 && currentHour <= 6) {
      setMessage("Boa noite!");
    }
  }, []);

  return (
    <h1 className="font-bold text-4xl lg:text-6xl mb-2 text-slate-700 dark:text-slate-200">
      {message}
    </h1>
  );
}
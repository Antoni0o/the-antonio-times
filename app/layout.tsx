/* eslint-disable react/no-unescaped-entities */
"use client";
import { ReactNode, useEffect, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <html lang="pt-br" className={localStorage.getItem("theme") || theme}>
      <head>
        <title>The Antonio's Times</title>
      </head>
      <body className="dark:bg-slate-500">
        <nav className="flex m-3 p-3 border-slate-200 rounded bg-slate-100 dark:bg-slate-800 dark:border-slate-700 shadow-lg">
          <Navbar />
          <button
            onClick={() => {
              if (theme == "light") {
                localStorage.setItem("theme", "dark");
                setTheme("dark");
              } else {
                localStorage.setItem("theme", "light");
                setTheme("light");
              }
            }}
            className="inline-flex items-center p-2 ml-3 text-sm text-slate-500 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
          >
            <span className="sr-only">Change Theme</span>
            {theme == "dark" ? <BsSunFill /> : <BsFillMoonFill />}
          </button>
        </nav>
        <main className="m-3 p-3 rounded bg-slate-100 dark:bg-slate-800 dark:text-white shadow-xl">
          {children}
        </main>
      </body>
    </html>
  );
}

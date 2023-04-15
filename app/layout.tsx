/* eslint-disable react/no-unescaped-entities */
"use client";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../public/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { CookiesProvider, useCookies } from "react-cookie";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const [cookie] = useCookies(["theme"]);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(cookie.theme);
  }, [cookie.theme, theme]);

  return (
    <CookiesProvider>
      <html className={theme}>
        <head>
          <title>The Antonio Times</title>
        </head>
        <body className="dark:bg-slate-500">
          <nav className="flex items-center justify-center m-3 p-3 border-slate-200 rounded bg-slate-100 dark:bg-slate-800 dark:border-slate-700 shadow-lg">
            <Navbar />
          </nav>
          <main className="m-3 rounded bg-slate-100 dark:bg-slate-800 dark:text-white shadow-xl">
            {children}
          </main>
        </body>
        <Analytics />
      </html>
    </CookiesProvider>
  );
}

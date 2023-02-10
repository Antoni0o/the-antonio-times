/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState("hidden");

  return (
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <Link href="/" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-400">
          TheAntonioTimes
        </span>
      </Link>
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
        aria-controls="navbar-solid-bg"
        aria-expanded="true"
        onClick={() => {
          setIsHidden("");

          if (isHidden == "") {
            setIsHidden("hidden");
          }
        }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={`${isHidden} w-full md:block md:w-auto transition-opacity`}
        id="navbar-solid-bg"
      >
        <ul className="flex flex-col mt-4 rounded-lg bg-slate-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-slate-800 md:dark:bg-transparent dark:border-slate-700">
          <li>
            <Link
              href="/"
              className="block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/materias"
              className="block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Matérias
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-slate-400 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

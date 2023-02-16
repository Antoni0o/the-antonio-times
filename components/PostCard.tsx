"use client";
import { Author } from "../types/Author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
};

export default function PostCard({ title, coverImage, date, excerpt }: Props) {
  return (
    <section className="bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg">
      <img
        className="rounded-t-lg w-full"
        src={coverImage}
        alt={`Foto de: ${title}`}
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="opacity-60">{excerpt}</h2>
        <hr className="opacity-60 h-1 w-10 my-2 bg-slate-700 border-0 dark:bg-slate-200" />
        <h2 className="opacity-60 text-sm">Publicado em: {date}</h2>
      </div>
    </section>
  );
}

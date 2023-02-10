import { Author } from "../types/Author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export default function PostCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="bg-slate-200 dark:bg-slate-700 rounded-lg w-80">
      <img
        className="rounded-t-lg w-full"
        src={coverImage}
        alt={`Foto de: ${title}`}
      />
      <div className="p-4">
        <div className="author flex text-center items-center gap-2 font-bold">
          <img
            src={author.picture}
            alt={`${author.name} Picture`}
            className="w-8 rounded-3xl"
          />
          <h2 className="opacity-60 text-sm">{author.name}</h2>
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="opacity-60">{excerpt}</h2>
        <hr className="opacity-60 h-1 w-10 my-2 bg-slate-700 border-0 dark:bg-slate-200" />
        <h2 className="opacity-60 text-sm">Publicado em: {date}</h2>
      </div>
    </section>
  );
}

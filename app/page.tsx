"use client";
import PostCard from "../components/PostCard";
import { useRouter } from "next/navigation";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Page() {
  const router = useRouter();

  return (
    <main>
      <section className="md:flex flex-row justify-between items-center bg-slate-200 dark:bg-slate-700 rounded-xl mb-10">
        <div className="p-4">
          <div className="mb-2">
            <h1 className="font-bold text-4xl sm:text-6xl mb-2">Bom dia!</h1>
            <h2 className="text-lg sm:text-xl">
              Me chamo <b>Antonio</b>, sou apaixonado por tecnologia, desenvolvi
              e faço os posts neste blog!
              <br />
              <br />
              Me conheça melhor:
            </h2>
          </div>
          <div className="flex gap-2">
            <a
              target="_blank"
              href="https://github.com/Antoni0o"
              className="flex gap-2 items-center text-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-400 py-2 px-4 my-2 rounded-lg font-bold hover:shadow-lg hover:brightness-110 transition-all duration-200"
            >
              <BsGithub />
              Github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/antonio-dias788/"
              className="flex gap-2 items-center text-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-400 py-2 px-4 my-2 rounded-lg font-bold hover:shadow-lg hover:brightness-110 transition-all duration-200"
            >
              <BsLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
        <img
          src="https://github.com/Antoni0o.png"
          alt="Foto de perfil do Github do Antonio"
          className="rounded-b-lg lg:rounded-r-lg lg:rounded-l-none w-80"
        />
      </section>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-center">
        <div onClick={() => router.push("/primeiro-post")}>
          <PostCard
            title="Como desenvolver testes em Java"
            coverImage="/assets/primeiro-post/cover.png"
            date="28/07/2023"
            excerpt="Testar a aplicação não é uma tarefa fácil, porém para assegurar a qualidade de software..."
          />
        </div>
        <div onClick={() => router.push("/primeiro-post")}>
          <PostCard
            title="Como desenvolver testes em Java"
            coverImage="/assets/primeiro-post/cover.png"
            date="28/07/2023"
            excerpt="Testar a aplicação não é uma tarefa fácil, porém para assegurar a qualidade de software..."
          />
        </div>
        <div onClick={() => router.push("/primeiro-post")}>
          <PostCard
            title="Como desenvolver testes em Java"
            coverImage="/assets/primeiro-post/cover.png"
            date="28/07/2023"
            excerpt="Testar a aplicação não é uma tarefa fácil, porém para assegurar a qualidade de software..."
          />
        </div>
        <div onClick={() => router.push("/primeiro-post")}>
          <PostCard
            title="Como desenvolver testes em Java"
            coverImage="/assets/primeiro-post/cover.png"
            date="28/07/2023"
            excerpt="Testar a aplicação não é uma tarefa fácil, porém para assegurar a qualidade de software..."
          />
        </div>
      </section>
      <div className="flex justify-end">
        <button className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-400 py-2 px-4 my-2 rounded-lg font-bold hover:shadow-lg hover:brightness-110 transition-all duration-200">
          Veja mais
        </button>
      </div>
    </main>
  );
}

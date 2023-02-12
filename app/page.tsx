"use client";
import PostCard from "../components/PostCard";
import { useRouter } from "next/navigation";
import { Author } from "../types/Author";

export default function Page() {
  let author: Author = {
    name: "Antonio",
    picture: "https://github.com/Antoni0o.png",
  };
  const router = useRouter();

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-center">
      <div onClick={() => router.push("/primeiro-post")}>
        <PostCard
          title="Como desenvolver testes em Java"
          author={author}
          coverImage="/assets/primeiro-post/cover.png"
          date="28/07/2023"
          excerpt="Testar a aplicação não é uma tarefa fácil, porém para assegurar a qualidade de software..."
        />
      </div>
      <div onClick={() => router.push("/primeiro-post")}>
        <PostCard
          title="Como desenvolver testes em Java"
          author={author}
          coverImage="/assets/primeiro-post/cover.png"
          date="28/07/2023"
          excerpt="Testar a aplicação não é uma tarefa fácil, porém para assegurar a qualidade de software..."
        />
      </div>
      <div onClick={() => router.push("/primeiro-post")}>
        <PostCard
          title="Como desenvolver testes em Java"
          author={author}
          coverImage="/assets/primeiro-post/cover.png"
          date="28/07/2023"
          excerpt="Testar a aplicação não é uma tarefa fácil, porém para assegurar a qualidade de software..."
        />
      </div>
      <div onClick={() => router.push("/primeiro-post")}>
        <PostCard
          title="Como desenvolver testes em Java"
          author={author}
          coverImage="/assets/primeiro-post/cover.png"
          date="28/07/2023"
          excerpt="Testar a aplicação não é uma tarefa fácil, porém para assegurar a qualidade de software..."
        />
      </div>
    </section>
  );
}

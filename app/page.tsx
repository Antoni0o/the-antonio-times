import PostCard from "../components/PostCard";
import { Author } from "../types/Author";

export default function Page() {
  let author: Author = {
    name: "Antonio",
    picture: "https://github.com/Antoni0o.png",
  };

  return (
    <PostCard
      title="Como desenvolver testes em Java"
      author={author}
      coverImage="/assets/primeiro-post/cover.png"
      date="28/07/2023"
      excerpt="Testar a aplicação não é uma tarefa fácil, porém para assegurar a qualidade de software..."
      slug="rota"
    />
  );
}

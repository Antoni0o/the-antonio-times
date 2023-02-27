import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/api";
import { BsGithub, BsLinkedin } from "react-icons/bs";

async function getPosts() {
  const posts = getAllPosts(["title", "date", "slug", "coverImage", "excerpt"]);

  return posts;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <main className="p-3">
      <section className="md:flex flex-row justify-between items-center bg-slate-200 dark:bg-slate-700 rounded-xl mb-10">
        <div className="p-4">
          <div className="mb-2">
            <h1 className="font-bold text-4xl sm:text-6xl mb-2">Bom dia!</h1>
            <h2 className="text-lg sm:text-xl">
              Me chamo <b>Antonio</b>, sou apaixonado por tecnologia. Desenvolvo
              e faço os posts para este blog!
              <br />
              <br />
              Me conheça melhor:
            </h2>
          </div>
          <div className="md:flex gap-2">
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
          className="rounded-b-lg md:rounded-r-lg md:rounded-l-none w-full"
        />
      </section>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-center">
        {posts.map((post, index) => {
          if (index > 5) {
            return (
              <PostCard
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                key={index}
              />
            );
          }
        })}
      </section>
      <div className="flex justify-end">
        <button className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-400 py-2 px-4 my-2 rounded-lg font-bold hover:shadow-lg hover:brightness-110 transition-all duration-200">
          Veja mais
        </button>
      </div>
    </main>
  );
}

import { getAllPosts } from "../../lib/api";
import PostCard from "../../components/PostCard";

async function getPosts() {
  const posts = getAllPosts(["title", "date", "slug", "coverImage", "excerpt"]);

  return posts;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <main className="p-3">
      <section className="mb-4">
        <h2 className="text-lg md:text-xl lg:text-1xl text-slate-700 dark:text-slate-200">
          Aqui você pode encontrar todos os meus posts!
        </h2>
        <hr className="h-1 w-10 my-2 border-0 bg-slate-700 dark:bg-slate-200" />
      </section>

      <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 justify-center">
        {posts.map((post, index) => {
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
        })}
      </section>
    </main>
  );
}

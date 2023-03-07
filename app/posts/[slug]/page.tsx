import Head from "next/head";
import markdownToHtml, { getPostBySlug } from "../../../lib/api";
import "../../../public/styles/post.css";

type PostPageParams = {
  params: {
    slug: string;
  };
};

async function getData(slug: string) {
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "content",
    "excerpt",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    post,
    content,
  };
}

export default async function Page({ params: { slug } }: PostPageParams) {
  const data = await getData(slug);

  return (
    <>
      <Head>
        <title>The Antonio Times - {data.post.title}</title>
      </Head>
      <article className="md:flex md:flex-col md:mx-72 text-slate-700 dark:text-slate-200">
        <div>
          <div className="px-3 pt-2">
            <h1 className="text-4xl font-extrabold ">{data.post.title}</h1>
            <h2 className="mb-2 text-lg font-normal">{data.post.excerpt}</h2>
            <h3 className="opacity-80 text-sm font-extralight italic">
              {data.post.date}
            </h3>
            <hr className="h-1 w-10 my-2 border-0 bg-slate-700 dark:bg-slate-200" />
          </div>
          <div>
            <img
              src={data.post.coverImage}
              alt={`Imagem que representa ${data.post.title}`}
              className="w-full md:w-96 md:px-3 rounded-3xl"
            />
          </div>
        </div>
        <div className="text-lg w-auto mt-4 mx-10 md:mx-0">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </article>
    </>
  );
}

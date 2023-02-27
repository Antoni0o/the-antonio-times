import Head from "next/head";
import markdownToHtml, { getPostBySlug } from "../../../lib/api";

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
      <article className="text-slate-700 dark:text-slate-200">
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
              className="w-full md:w-1/3 md:px-3 md:rounded-lg"
            />
          </div>
        </div>
        <div className="p-3">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </article>
    </>
  );
}

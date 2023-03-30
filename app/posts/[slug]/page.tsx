import type { Metadata } from "next";
import markdownToHtml, { getPostBySlug } from "../../../lib/api";
import markdownStyles from "../../../public/styles/post.module.css";

/* eslint-disable react/jsx-no-target-blank */

type PostPageParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PostPageParams): Promise<Metadata> {
  const postData = await getData(params.slug);

  return { 
    title: postData.post.title,
    description: postData.post.excerpt,
    colorScheme: 'dark light',
    openGraph: {
    title: postData.post.title,
    authors: postData.post.author,
    description: postData.post.excerpt,
    siteName: 'The Antonio Times',
    images: [
      {
        url: postData.post.coverImage,
        width: 800,
        height: 800,
        alt: postData.post.title
      }
    ],
    locale: 'pt-BR'
  }};
}

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
      <article className="lg:flex lg:flex-col lg:mx-72 text-slate-700 dark:text-slate-200">
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
        <div className="text-lg w-auto mt-4 mx-10 lg:mx-0">
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </article>
    </>
  );
}

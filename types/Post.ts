import { Author } from "./Author";

type Post = {
    slug?: string;
    title: string;
    date: string;
    coverImage?: string;
    author?: Author;
    excerpt?: string;
    content: string;
}

export default Post;
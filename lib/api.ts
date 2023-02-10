import fs from 'fs';
import { join } from 'path';
import grayMatter from 'gray-matter';
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const slugWithoutExtension = slug.replace('.md', '') 
    const fullPath = join(postsDirectory, slug);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = grayMatter(fileContents);

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    fields.forEach((field) => {
        if(field === 'slug') {
            items[field] = slugWithoutExtension;
        }
        if(field === 'content') {
            items[field] = content;
        }
        if(typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    });

    return items;
}

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs();

    const posts = slugs
                        .map((slug) => getPostBySlug(slug, fields))
                        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
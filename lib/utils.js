import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "contents/posts");

export const getPosts = (pageIndex = 1) => {
  const dirFiles = fs.readdirSync(
    path.join(process.cwd(), "contents", "posts"),
    {
      withFileTypes: true,
    }
  );

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "contents", "posts", file.name),
        "utf-8"
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, "");
      return { data, content, slug };
    })
    .filter((post) => post);
  return posts;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}

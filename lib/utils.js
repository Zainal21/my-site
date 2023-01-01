import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import { serialize } from "next-mdx-remote/serialize";

const blogsPath = path.join(process.cwd(), "contents/posts");

export const getPosts = async () => {
  const filesTemp = await fs.readdir(blogsPath);
  const paths = filesTemp.filter((file) => /\.mdx?$/.test(file));
  const files = paths.map(async (p) => getMdxContent(p));
  const blogs = await Promise.all(files);
  return blogs
    .map((blog) => blog.frontmatter)
    .sort((first, second) => second.createdAt.localeCompare(first.createdAt));
  //   const dirFiles = fs.readdirSync(
  //     path.join(process.cwd(), "contents", "posts"),
  //     {
  //       withFileTypes: true,
  //     }
  //   );

  //   const posts = dirFiles
  //     .map((file) => {
  //       if (!file.name.endsWith(".mdx")) return;

  //       const fileContent = fs.readFileSync(
  //         path.join(process.cwd(), "contents", "posts", file.name),
  //         "utf-8"
  //       );
  //       const { data, content } = matter(fileContent);

  //       const slug = file.name.replace(/.mdx$/, "");
  //       return { data, content, slug };
  //     })
  //     .filter((post) => post);

  //   return filterPostsByPageIndex(createMultiplePosts(posts), pageIndex);
};

// const createMultiplePosts = (posts) => {
//   const multiplePosts = [];

//   posts.forEach((post) => {
//     multiplePosts.push(post);
//   });

//   return multiplePosts;
// };

// const filterPostsByPageIndex = (posts, pageIndex) => {
//   const postPerPage = 5;
//   const totalPagePosts = +pageIndex * postPerPage;
//   const prevPagePosts = totalPagePosts - postPerPage;

//   return posts.filter(
//     (post, index) => index < totalPagePosts && index >= prevPagePosts
//   );
// };

// export const getBlogFromSlug = async (slug) => await getContent(`${slug}.mdx`);

// const getContent = async (slug) => {
//   const filePath = path.join(`${blogsPath}`, slug);
//   const file = fs.readFile(filePath, "utf-8");
//   console.log(file);
//   const content = await serialize(file, {
//     mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism] },
//     parseFrontmatter: true,
//   });

//   return {
//     ...content,
//     frontmatter: {
//       ...content.frontmatter,
//       slug: blogsPath.replace(".mdx", ""),
//     },
//   };
// };

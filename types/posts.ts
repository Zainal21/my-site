export type Post = {
  frontMatter: frontMatterPost;
  slug: string;
};

export type frontMatterPost = {
  date: string;
  description: string;
  readTime: string;
  thumbnail: string;
  title: string;
};

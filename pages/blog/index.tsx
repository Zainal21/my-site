import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { Animate, SeoMeta } from "@/components/design-system/utils";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { Post } from "@/types/posts";
import { BlogSection } from "@/components/modules";

export async function getStaticProps() {
  let files = fs.readdirSync(path.join("posts"));
  files = files.filter((file) => file.split(".")[1] == "mdx");
  const posts = files.map((file) => {
    const fileData = fs.readFileSync(path.join("posts", file), "utf-8");
    const { data } = matter(fileData);
    return {
      frontMatter: data,
      slug: file.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const BlogPage: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <SeoMeta
        description={"Posts - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <BlogSection posts={posts} />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default BlogPage;

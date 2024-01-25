import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { Animate, SeoMeta } from "@/components/design-system/utils";
import { Post } from "@/types/posts";
import { BlogSection } from "@/components/modules";
import { getAllPosts } from "@/libs/blogs";

export async function getStaticProps() {
  const posts = getAllPosts();
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

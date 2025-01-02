import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import {
  MainSection,
  AboutSection,
  BlogSection,
  SkillSection,
} from "@/components/modules";
import { Animate, SeoMeta } from "@/components/design-system/utils";
import { Post } from "@/types/posts";
import { getAllPosts } from "@/libs/blogs";

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

interface HomePageProps {
  posts: Post[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <>
      <SeoMeta
        description={"Home - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software & DevOps Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <MainSection />
          <AboutSection short={true} />
          <SkillSection />
          <BlogSection posts={posts} isLimited={true} />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Home;

// import MDX from "@mdx-js/runtime";
import { Fragment } from "react";
import PageTitle from "@/components/ui/page-title";
import Container from "@/components/ui/container";
import MainWrapped from "@/components/base/main-wrapped";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import { getPostBySlug, getAllPosts } from "@/lib/utils";
import MDXComponents from "@/components/base/mdx-components";
import { MDXRemote } from "next-mdx-remote";

const BlogItem = ({ blog }) => {
  return (
    <Fragment>
      <MetaTag title="Lorem ipsum | Muhamadzain.dev" />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10  lg:py-10 flex flex-col">
              <PageTitle title="/Lorem ipsum 📖" />
              <div className="pt-3">
                <span className="font-body lg:text-xl text-medium sm:text-medium font-light text-primary dark:text-white"></span>
              </div>
              <div className="pt-16 lg:pt-20 relative">
                <div className="pt-2 lg:pt-4">
                  <ul className="mx-4">
                    <h1 className="text-center text-2xl font-bold">
                      Under Construction
                    </h1>
                    {blog.content}
                    {/* <MDXRemote {...blog} components={MDXComponents} /> */}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </Fragment>
  );
};

export async function getStaticProps({ params }) {
  const blog = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "publishedOn",
    "content",
  ]);

  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      };
    }),
    fallback: false,
  };
}

export default BlogItem;

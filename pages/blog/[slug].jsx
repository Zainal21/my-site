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
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";

const components = { SyntaxHighlighter, code };

const BlogItem = ({ frontMatter: { title, publishedOn }, mdxSource }) => {
  return (
    <Fragment>
      <MetaTag title={`${title} | Muhamadzain.dev`} />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-9 lg:py-10 flex flex-col">
              <PageTitle title={`${title} 📖`} />
              <div className="pt-3">
                <span className="font-body lg:text-xl text-medium sm:text-medium font-light text-primary dark:text-white"></span>
              </div>
              <div className="pt-16 lg:pt-20 relative">
                <div className="pt-2 lg:pt-4">
                  {/* <ul className="mx-4"> */}
                  <MDXRemote {...mdxSource} components={components} />
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </Fragment>
  );
};

function code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props} />
  ) : (
    <code className={className} {...props} />
  );
}

// export async function getStaticProps({ params }) {
//   const blog = getPostBySlug(params.slug, [
//     "title",
//     "excerpt",
//     "publishedOn",
//     "content",
//   ]);

//   return {
//     props: { blog },
//   };
// }

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("contents/posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

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

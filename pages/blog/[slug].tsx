import React, { useState } from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Image from "next/image";
import fs from "fs";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { GetStaticProps, NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { Animate } from "@/components/design-system/utils";
import { Heading, TagLink, Text } from "@/components/design-system";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useTheme } from "@/context/ThemeContext";
import { frontMatterPost } from "@/types/posts";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

interface BlogDetailProps {
  frontMatter: frontMatterPost;
  mdxSource: any;
}

const BlogDetail: NextPage<BlogDetailProps> = (props) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const { theme } = useTheme();

  return (
    <HomePageLayout>
      <Animate>
        <section className="max-w-3xl p-2 mx-auto -mt-12 md:p-0 md:-mt-0">
          {props.frontMatter && props.mdxSource && (
            <div>
              <Head>
                <title>{props.frontMatter.title}</title>
              </Head>
              <div className=" bg-gray-50 rounded-md  p-10 md:w-[38.5rem] mt-10">
                <Image
                  loading="lazy"
                  src={props.frontMatter.thumbnail}
                  alt={"thumbnail"}
                  width={1}
                  height={1}
                  sizes="80"
                  className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
                  onLoadingComplete={() => setLoading(false)}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <h1 className="font-semibold my-8 text-4xl dark:text-gray-100 text-dark">
                {props.frontMatter.title}
              </h1>

              <MDXRemote
                {...props.mdxSource}
                components={{
                  h1: ({ children }) => <Heading>{children}</Heading>,
                  h2: ({ children }) => <Heading>{children}</Heading>,
                  p: ({ children }) => (
                    <Text
                      style={{
                        marginTop: 12,
                        lineHeight: 2,
                      }}
                    >
                      {children}
                    </Text>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="mt-4 border-l-4 border-l-teal-600  pl-2 bg-color-secondary dark:border-l-teal-500">
                      {children}
                    </blockquote>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc ml-10 dark:text-gray-100 text-[#10161a]">
                      {children}
                    </ul>
                  ),
                  img: ({ src, alt }) => (
                    <figure className="mt-4 border text-center  dark:text-gray-100 text-[#10161a]">
                      <img src={src} alt={alt} className="w-full" />
                      <figcaption className="py-2 text-xs dark:text-gray-100 text-[#10161a]">
                        {alt}
                      </figcaption>
                    </figure>
                  ),
                  code: ({ children }) => {
                    if (typeof children === "string") {
                      return (
                        <SyntaxHighlighter
                          language="javascript"
                          className="rounded-md border-2"
                          style={theme == "dark" ? dark : a11yLight}
                        >
                          {children}
                        </SyntaxHighlighter>
                      );
                    }
                    return children;
                  },
                }}
              />
            </div>
          )}
          {/* <div className="border-t text-sm border-color">
            <TagLink
              href={""}
              onClick={() => {
                !location && router.back();
              }}
            >
              <FiArrowLeft className="text-lg mr-1" /> Go back to
            </TagLink>
          </div> */}
        </section>
      </Animate>
    </HomePageLayout>
  );
};

export default BlogDetail;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { slug } = params;
  const fileData = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");
  const { data, content } = matter(fileData);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter: data,
      slug,
      mdxSource,
    },
  };
};

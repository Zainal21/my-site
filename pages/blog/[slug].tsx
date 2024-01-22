import React, { useState } from "react";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import Image from "next/image";
import fs from "fs";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { Animate } from "@/components/design-system/utils";

const BlogDetail: NextPage<any> = (props) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <HomePageLayout>
      <Animate>
        <div className="container  mx-auto mt-10 dark:text-white text-black">
          {props.frontMatter && props.mdxSource && (
            <div>
              <Head>
                <title>{props.frontMatter.title}</title>
              </Head>
              <div className="mt-0 bg-gray-50 rounded-md w-full  md:w-[38.5rem]">
                <Image
                  loading="lazy"
                  src={props.frontMatter.thumbnail}
                  alt={"thumbnail"}
                  width={0}
                  height={0}
                  sizes="100vw"
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
              <h1 className="font-semibold my-8 text-xl ">
                {props.frontMatter.title}
              </h1>

              <MDXRemote {...props.mdxSource} />
            </div>
          )}
        </div>
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

export async function getStaticProps({ params: { slug } }: any) {
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
}

import { Fragment, memo, useState } from "react";
import Container from "@/components/ui/container";
import MainWrapped from "@/components/base/main-wrapped";
import PageTitle from "@/components/ui/page-title";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import { getPosts } from "../../lib/utils";
import Link from "next/link";

const indexPage = ({ posts }) => {
  return (
    <Fragment>
      <MetaTag title="Blog | Muhamadzain.dev" />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10  lg:py-10 flex flex-col">
              <PageTitle title="/Blogs 📖" />
              <div className="pt-3">
                <span className="font-body lg:text-xl text-medium sm:text-medium font-light text-primary dark:text-white">
                  tweets in the form of my stories, experiences and knowledge
                  that I can share
                </span>
              </div>
              <div className="pt-16 lg:pt-20 relative">
                <div className="pt-2 lg:pt-4">
                  <ul className="mx-4">
                    {(posts || []).map((post, index) => (
                      <div
                        key={index}
                        className="border border-2 border-gray-700 rounded-md p-6 m-4"
                      >
                        <h3 className="text-left  py-3 text-2xl font-bold">
                          <Link href={`/blog/${post.slug}`}>
                            {post.data.title}
                          </Link>
                        </h3>
                        <p>{post.data.excerpt}</p>
                        <p className="text-gray-200 mt-2 hover:underline hover:underline-offset-auto">
                          <Link href={`/blog/${post.slug}`}>Read more</Link>
                        </p>
                      </div>
                    ))}
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

export default indexPage;

export const getStaticProps = () => {
  const posts = getPosts(1);
  return {
    props: {
      posts,
    },
  };
};

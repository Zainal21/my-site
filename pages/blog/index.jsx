import React, { memo } from "react";
import Container from "@/components/ui/container";
import MainWrapped from "@/components/base/main-wrapped";
import PageTitle from "@/components/ui/page-title";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import BlogList from "@/components/base/blog/blog-list";
import { createClient } from "contentful";

export async function getStaticProps() {
  const Client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  let response = await Client.getEntries({
    content_type: "myPersonalBlog",
  });
  return {
    props: {
      posts: response.items,
    },
  };
}

const indexPage = ({ posts }) => {
  return (
    <React.Fragment>
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
                    {posts.map((item) => (
                      <BlogList key={item.sys.id} posts={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </React.Fragment>
  );
};

export default memo(indexPage);

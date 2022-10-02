import { Fragment } from "react";
import Date from "@/components/ui/date";
import MetaTag from "@/components/base/meta-tag";
import Container from "@/components/ui/container";
import PageTitle from "@/components/ui/page-title";
import MainWrapped from "@/components/base/main-wrapped";
import MarkdownRendered from "@/components/base/blog/markdown-rendered";
import PageContent from "@/components/base/page-content";
import { createClient } from "contentful";
import Image from "next/image";

// const Client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// export const getStaticPaths = async () => {
//   let response = await Client.getEntries({
//     content_type: "myPersonalBlog",
//   });
//   const paths = response.items.map((item) => ({
//     params: { slug: item.fields.slug },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   let response = await Client.getEntries({
//     content_type: "myPersonalBlog",
//     "fields.slug": params.slug,
//   });
//   return {
//     props: {
//       blog: response.items[0],
//     },
//   };
// };

export default function index({ blog }) {
  // const { title, publishedAt, markdownContent, thumbnail } = blog.fields;
  // const { url, fileName } = thumbnail[0].fields.file;
  // const { width, height } = thumbnail[0].fields.file.details.image;
  return (
    <Fragment>
      <MetaTag title="Blog | Muhamadzain.dev" />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-10 flex flex-col">
              <PageTitle title={title} />
              <Date dateString={publishedAt} className="text-gray-100 mt-6" />
              <Image
                src={`https:${url}`}
                width={width}
                height={height}
                alt={fileName}
              ></Image>
              <div className="pt-3 w-5/6">
                <div className="font-body text-xl sm:text-medium font-light text-primary dark:text-white">
                  <MarkdownRendered content={markdownContent} />
                </div>
              </div>
              <div className="pt-16 lg:pt-20 relative">
                <div className="pt-2 lg:pt-4"></div>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </Fragment>
  );
}

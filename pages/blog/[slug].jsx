import Date from "@/components/ui/date";
import MetaTag from "@/components/base/meta-tag";
import Container from "@/components/ui/container";
import PageTitle from "@/components/ui/page-title";
import MainWrapped from "@/components/base/main-wrapped";
import MarkdownRendered from "@/components/base/markdown-rendered";
import PageContent from "@/components/base/page-content";
// import { useRouter } from "next/router";
import { createClient } from "contentful";

const Client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  let response = await Client.getEntries({
    content_type: "myPersonalBlog",
  });
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  let response = await Client.getEntries({
    content_type: "myPersonalBlog",
    "fields.slug": params.slug,
  });
  console.log(response.items);
  return {
    props: {
      blog: response.items[0],
    },
  };
};

export default function index({ blog }) {
  const { title, publishedAt, thumbnail, markdownContent } = blog.fields;
  const { file } = thumbnail[0].fields;
  const { imageSource } = file.url;
  const { width, height } = file.details.image;
  return (
    <Container className="mx-auto ">
      <MetaTag title="Blog | Muhamadzain.dev" />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-10 flex flex-col">
              <PageTitle title={title} />
              <Date dateString={publishedAt} className="text-gray-100" />
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
    </Container>
  );
}

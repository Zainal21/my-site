import Head from "next/head";
import Container from "@/components/ui/container";
import MainWrapped from "@/components/base/main-wrapped";
import PageTitle from "@/components/ui/page-title";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import BlogList from "@/components/base/blog-list";

export default function index() {
  const posts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  return (
    <Container className="mx-auto ">
      <MetaTag title="Blog | Muhamadzain.dev" />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-5 lg:py-10 flex flex-col">
              <PageTitle title="/Blogs" />
              <div className="pt-3">
                <span className="font-body text-xl sm:text-medium font-light text-primary dark:text-white">
                  tweets in the form of my stories, experiences and knowledge
                  that I can share
                </span>
              </div>
              <div className="pt-16 lg:pt-20 relative">
                <div className="pt-2 lg:pt-4">
                  <ul className="mx-4">
                    {posts.map((item, index) => (
                      <BlogList key={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </Container>
  );
}

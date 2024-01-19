import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { Animate } from "@/components/design-system/utils";
import { Heading } from "@/components/design-system";

const BlogPage: NextPage = () => {
  return (
    <>
      <HomePageLayout>
        <Animate>
          <section className="flex flex-col mb-12 mt-10 w-full h-screen">
            <Heading>Cooming Soon 💭</Heading>
          </section>
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default BlogPage;

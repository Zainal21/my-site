import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import {
  MainSection,
  AboutSection,
  ExperienceSection,
} from "@/components/modules";
import { Animate } from "@/components/design-system/utils";
import { Heading } from "@/components/design-system";

const BlogPage: NextPage = () => {
  return (
    <>
      <HomePageLayout>
        <Animate>
          <section className="flex flex-col mb-12 mt-10 w-screen h-screen">
            <Heading>Cooming Soon 💭</Heading>
          </section>
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default BlogPage;
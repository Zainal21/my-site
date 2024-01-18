import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { Animate, SeoMeta } from "@/components/design-system/utils";
import ProjectSection from "@/components/modules/sections/ProjectSection";

const Projects: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={"Project - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <ProjectSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Projects;

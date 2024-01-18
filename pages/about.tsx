import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { AboutSection, ExperienceSection } from "@/components/modules";
import { Animate, SeoMeta } from "@/components/design-system/utils";

const About: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={"About - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <AboutSection short={false} />
          <ExperienceSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default About;

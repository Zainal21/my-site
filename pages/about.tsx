import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { AboutSection, ExperienceSection } from "@/components/modules";
import { Animate, SeoMeta } from "@/components/design-system/utils";
import { Fragment } from "react";

const About: NextPage = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default About;

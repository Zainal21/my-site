import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import {
  AboutSection,
  ExperienceSection,
  MainSection,
} from "@/components/modules";
import { Animate } from "@/components/design-system/utils";
import { Heading } from "@/components/design-system";

const About: NextPage = () => {
  return (
    <>
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

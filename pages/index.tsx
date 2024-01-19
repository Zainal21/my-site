import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import {
  MainSection,
  AboutSection,
  ExperienceSection,
} from "@/components/modules";
import { Animate, SeoMeta } from "@/components/design-system/utils";

const Home: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={"Home - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <MainSection />
          <AboutSection short={true} />
          <ExperienceSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Home;

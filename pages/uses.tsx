import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { ExperienceSection, UsesSection } from "@/components/modules";
import { Animate } from "@/components/design-system/utils";
import { Heading } from "@/components/design-system";

const Uses: NextPage = () => {
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

export default Uses;
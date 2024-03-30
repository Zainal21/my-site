import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { Animate, SeoMeta } from "@/components/design-system/utils";
import { UsesSection } from "@/components/modules";

const Uses: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={"Uses - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <UsesSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Uses;

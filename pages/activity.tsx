import { SeoMeta } from "@/components/design-system/utils";
import { ActivitySection } from "@/components/modules";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import React from "react";

export default function ServerErrorPage(): React.JSX.Element {
  return (
    <React.Fragment>
      <SeoMeta
        description={"Activity - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <ActivitySection />
      </HomePageLayout>
    </React.Fragment>
  );
}

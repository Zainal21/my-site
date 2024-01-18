import { SeoMeta } from "@/components/design-system/utils";
import { ErrorSection } from "@/components/modules";
import React from "react";

export default function NotFoundPage(): React.JSX.Element {
  return (
    <React.Fragment>
      <SeoMeta
        description={"404 - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <ErrorSection
        heading={"404 - Not Found"}
        text={"Oops! We couldn't find this page."}
      />
    </React.Fragment>
  );
}

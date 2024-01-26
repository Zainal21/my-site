import { Animate, SeoMeta } from "@/components/design-system/utils";
import { ErrorSection } from "@/components/modules";
import React from "react";

export default function ServerErrorPage(): React.JSX.Element {
  return (
    <>
      <Animate>
        <SeoMeta
          description={"500 - Muhamad Zainal Arifin"}
          title={"Muhamad Zain - Software Engineer"}
        />
        <ErrorSection
          heading={"500 - Internal Server Error"}
          text={"Oops! Internal Server Error."}
        />
      </Animate>
    </>
  );
}

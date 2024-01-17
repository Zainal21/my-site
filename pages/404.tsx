import { ErrorSection } from "@/components/modules";
import React from "react";

export default function NotFoundPage(): React.JSX.Element {
  return (
    <ErrorSection
      heading={"404 - Not Found"}
      text={"Oops! We couldn't find this page."}
    />
  );
}

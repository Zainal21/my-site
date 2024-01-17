import { ErrorSection } from "@/components/modules";
import React from "react";

export default function ServerErrorPage(): React.JSX.Element {
  return (
    <ErrorSection
      heading={"500 - Internal Server Error"}
      text={"Oops! Internal Server Error."}
    />
  );
}

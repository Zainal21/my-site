import React from "react";
import cn from "classnames";
export default function PageContent({ className, children }) {
  return <div className={cn("content max-w-6xl", className)}>{children}</div>;
}

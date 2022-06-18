import React from "react";
import cn from "classnames";
export default function container({ className, children }) {
  return <div className={cn(`container`, className)}>{children}</div>;
}

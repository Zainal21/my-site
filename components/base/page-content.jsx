import React from "react";
import cn from "classnames";
export default function PageContent(props) {
  return (
    <div className={cn("content max-w-6xl", props.ClassName)}>
      {props.children}
    </div>
  );
}

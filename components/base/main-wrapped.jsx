import React from "react";
import cn from "classnames";
export default function MainWrapped(props) {
  return (
    <main className={cn(`main-wrapped`, props.className)}>
      {props.children}
    </main>
  );
}

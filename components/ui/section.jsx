import React from "react";
import cn from "classnames";
export default function Section(props) {
  return (
    <section className={cn("container mb-8", props.className)}>
      {props.children}
    </section>
  );
}

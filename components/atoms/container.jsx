import React from "react";
import cn from "classnames";
export default function container(props) {
  return (
    <div className={cn(`container`, props.className)}>{props.children}</div>
  );
}

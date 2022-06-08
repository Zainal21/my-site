import React from "react";

export default function Icon({ iconClassName, linkIcon }) {
  return (
    <a href={linkIcon} target="_blank" rel="noreferrer">
      <i
        className={`text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors ${iconClassName}`}
      ></i>
    </a>
  );
}

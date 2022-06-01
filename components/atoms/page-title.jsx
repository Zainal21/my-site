import React from "react";
export default function PageTitle({ title }) {
  return (
    <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
      {title}
    </h1>
  );
}

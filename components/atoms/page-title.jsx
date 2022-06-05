import React from "react";
export default function PageTitle({ title }) {
  return (
    <h1 className="pt-5 font-body text-3xl font-semibold text-primary dark:text-white ">
      {title}
    </h1>
  );
}

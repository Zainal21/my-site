import Link from "next/link";
import React from "react";
import Date from "../../ui/date";

export default function BlogList({ posts }) {
  const { title, excerpt, publishedAt, slug } = posts.fields;
  return (
    <li className=" flex flex-col p-3 md:p-5 sm:hover:bg-gray-800 sm:rounded-md bg-gray-800 ">
      <span className="text-sm text-neutral-400">
        <Date dateString={publishedAt} className="text-gray-100" />
      </span>
      <h4 className="mb-2 text-2xl py-4 font-bold line-clamp-3 text-white hover:underline">
        <Link href={`/blog/${slug}`} passHref>
          {title}
        </Link>
      </h4>
      <p className="mb-4 max-w-2xl text-neutral-400 line-clamp-3 text-medium">
        {excerpt}
      </p>
      <div className="flex items-center mb-2 space-x-2"></div>
    </li>
  );
}

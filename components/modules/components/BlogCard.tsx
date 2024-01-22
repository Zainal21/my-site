import { convertDateFormat } from "@/libs/date";
import { Post } from "@/types/posts";
import Link from "next/link";
import React from "react";

const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-16 mt-10">
        <article className="group relative  flex flex-col items-start  my-4 ">
          <h2 className="text-base font-semibold tracking-tight text-black dark:text-white">
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 dark:bg-[#10161a] opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-[#10161a]/50 bg-gray-100/50 rounded-lg sm:-inset-x-6 sm:rounded-2xl"></div>
            <Link
              href={`/blog/${post.slug}`}
              className="dark:text-white text-black"
            >
              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className=" z-10">{post.frontMatter.title}</span>
            </Link>
          </h2>
          <time className="order-first mb-3 flex items-center text-sm text-gray-400 dark:text-white">
            {convertDateFormat(post.frontMatter.date)}
          </time>
          <p className="mt-2 text-sm text-gray-600 dark:text-white">
            {post.frontMatter.description}
          </p>
          <div
            aria-hidden="true"
            className="mt-4 flex items-center text-sm font-medium text-teal-600 dark:text-teal-400"
          >
            Read article
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                stroke-width="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;

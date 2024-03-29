import { convertDateFormat } from "@/libs/date";
import { Post } from "@/types/posts";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-16 mt-10">
        <article className="group cursor-pointer flex flex-col items-start  my-2 border border-teal-100 hover:bg-gray-100 bg-gray-50 hover:dark:bg-[#10161a]/60 dark:bg-[#10161a]/100 dark:border-teal-900 p-4 rounded-lg group-hover:scale-100 group-hover:opacity-100">
          <h3 className="font-semibold tracking-tight text-gray-800 dark:text-gray-100">
            <Link
              href={`/blog/${post.slug}`}
              className="dark:text-gray-100 text-[#10161a] no-underline"
            >
              <span className="z-10 text-xl">{post.frontMatter.title}</span>
            </Link>
          </h3>
          <time className="order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-100">
            {convertDateFormat(post.frontMatter.date)}
          </time>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-100">
            {post.frontMatter.description}
          </p>
          <Link
            className="mt-4 flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 no-underline hover:underline"
            href={`/blog/${post.slug}`}
          >
            <span>Read article</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </article>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;

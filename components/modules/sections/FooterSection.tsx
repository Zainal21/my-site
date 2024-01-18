import Link from "next/link";
import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

export default function FooterSection(): React.JSX.Element {
  return (
    <footer className="relative flex w-full sm:flex-row flex-col items-center justify-between border-t py-10 text-sm border-color dark:text-gray-100">
      <div className="flex gap-3 sm:mb-0 mb-6">
        <Link
          href="/"
          className="underline-offset-2 transition-colors hover:text-black dark:hover:text-white no-underline hover:underline"
          rel="noopener noreferrer"
        >
          /me
        </Link>
        <Link
          href="/source"
          className="underline-offset-2 transition-colors hover:text-black dark:hover:text-white no-underline hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          /source
        </Link>
        <Link
          href="/about"
          className="underline-offset-2 transition-colors hover:text-black dark:hover:text-white no-underline hover:underline"
          rel="noopener noreferrer"
        >
          /about
        </Link>
        <Link
          href="/projects"
          className="underline-offset-2 transition-colors hover:text-black dark:hover:text-white no-underline hover:underline"
          rel="noopener noreferrer"
        >
          /projects
        </Link>
        <Link
          href="/blog"
          className="underline-offset-2 transition-colors hover:text-black dark:hover:text-white no-underline hover:underline"
          rel="noopener noreferrer"
        >
          /blog
        </Link>
        <Link
          href="/uses"
          className="underline-offset-2 transition-colors hover:text-black dark:hover:text-white no-underline hover:underline"
          rel="noopener noreferrer"
        >
          /uses
        </Link>
      </div>
      <div className="flex items-center space-x-1">
        <FaRegCopyright />
        <span className="text-gray-600 dark:text-gray-300">
          {new Date().getFullYear()} by Muhamad Zain
        </span>
      </div>
    </footer>
  );
}

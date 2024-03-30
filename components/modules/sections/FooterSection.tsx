import Link from "next/link";
import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { navlinks } from "@/components/modules/sections/NavbarSection";

export default function FooterSection(): React.JSX.Element {
  return (
    <footer className="flex w-full sm:flex-row flex-col items-center justify-between border-t py-10 text-sm border-gray-700 dark:text-gray-100">
      <div className="flex gap-3 sm:mb-0 mb-6">
        <Link
          target="_blank"
          href="https://github.com/Zainal21/my-site"
          className="underline-offset-2 transition-colors hover:text-gray-800 dark:hover:text-gray-100 no-underline hover:underline"
          rel="noopener noreferrer"
        >
          /source
        </Link>
        {navlinks
          .filter((item) => item.to != "/")
          .map((item) => (
            <Link
              key={item.id}
              href={item.to}
              className="underline-offset-2 transition-colors hover:text-gray-800 dark:hover:text-gray-100 no-underline hover:underline"
              rel="noopener noreferrer"
            >
              {item.to}
            </Link>
          ))}
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

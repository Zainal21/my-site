import Link from "next/link";
import React from "react";

interface ButtonLinkProps {
  target: React.HTMLAttributeAnchorTarget | undefined;
  children: React.ReactNode;
  href: string;
}

export default function ButtonLink({
  target,
  children,
  href,
}: ButtonLinkProps): React.JSX.Element {
  return (
    <Link
      className="flex items-center p-2 rounded-lg justify-center px-6 text-gray-800
  dark:text-gray-100 duration-300 font-semibold  bg-gray-100 hover:bg-gray-200
  dark:bg-gray-800 dark:hover:bg-gray-900 outline-none dark:ring-offset-black focus:ring-4 focus:ring-offset-2 ring-teal-400 w-fit"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}

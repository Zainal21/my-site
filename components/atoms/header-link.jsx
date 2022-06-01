import React from "react";
import Link from "next/link";
export default function HeaderLink(props) {
  return (
    <>
      <li className="group relative mr-6 mb-1">
        <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
        <Link href={props.link}>
          <a className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
            {props.name}
          </a>
        </Link>
      </li>
    </>
  );
}

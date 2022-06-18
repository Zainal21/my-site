import React from "react";
import Link from "next/link";
export default function ButtomLink({ link, name }) {
  return (
    <li className="nav-list-item">
      <Link href={link}>
        <a className="mb-3 block px-2 font-body text-lg font-medium text-white">
          {name}
        </a>
      </Link>
    </li>
  );
}

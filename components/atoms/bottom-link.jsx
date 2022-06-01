import React from "react";
import Link from "next/link";
export default function ButtomLink(props) {
  return (
    <li className="nav-list-item">
      <Link href={props.link}>
        <a className="mb-3 block px-2 font-body text-lg font-medium text-white">
          {props.name}
        </a>
      </Link>
    </li>
  );
}

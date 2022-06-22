import React, { useState } from "react";
import Link from "next/link";
import HeaderLink from "../ui/header-link";
import ButtomLink from "../ui/bottom-link";
import links from "../../data/links.json";

export default function Header() {
  const [toggleMobile, setToggleMobile] = useState(false);
  return (
    <header
      className={`${toggleMobile ? "max-h-screen overflow-hidden " : ""}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6 lg:py-10">
          <div className="flex items-center">
            <p className=" font-body lg:text-2xl text-lg font-bold text-primary dark:text-white lg:block">
              <Link href="/">Muhamadzain.</Link>
            </p>
          </div>
          <div className="flex items-center lg:hidden">
            <i className="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"></i>
            <svg
              width="24"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-primary dark:text-white"
              onClick={() => setToggleMobile(true)}
            >
              <g fillRule="evenodd">
                <rect width="24" height="3" rx="1.5" />
                <rect x="8" y="6" width="16" height="3" rx="1.5" />
                <rect x="4" y="12" width="20" height="3" rx="1.5" />
              </g>
            </svg>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              {links.map((item, index) => (
                <HeaderLink name={item.name} link={item.link} key={index} />
              ))}
              <li>
                <i className="bx cursor-pointer text-3xl text-primary dark:text-white"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden ${
          toggleMobile ? "opacity-100 pointer-events-auto" : ""
        }`}
      >
        <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">
          <i
            className="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
            onClick={() => setToggleMobile(false)}
          ></i>
          <ul className="mt-8 flex flex-col">
            {links.map((item, index) => (
              <ButtomLink name={item.name} link={item.link} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

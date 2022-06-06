import React from "react";
import Icon from "../atoms/icon";
import SocialMediaLinks from "../../data/social-media-links.json";

export default function footer() {
  return (
    <footer className="flex flex-col items-center py-8 my-16 text-2xs text-center text-neutral-400 mt-10 ">
      <p className="mb-2">
        Made using Next.js and Tailwind CSS. Hosted on Vercel.
      </p>
      <p>
        <a
          className="hover:text-neutral-300 underline"
          href="https://github.com/Zainal21"
        >
          MIT License
        </a>{" "}
        &copy; {new Date().getFullYear()} Muhamadzain.
      </p>
      <br />
      <div className="flex items-center space-x-6">
        {SocialMediaLinks.map((item, index) => (
          <Icon
            iconClassName={item.name}
            linkIcon={item.link}
            key={index}
          ></Icon>
        ))}
      </div>
    </footer>
  );
}

import React from "react";
import cn from "classnames";
export default function LinktreeCard({ name, classname, link }) {
  return (
    <div
      className={cn(
        `w-full my-3 rounded-md shadow-2xl py-5   px-8 text-white  hover:border-2 border-1 border-gray-600 hover:border-gray-600`,
        classname
      )}
    >
      <div className="flex justify-between items-center container mx-auto py-4 px-6">
        <div className="flex">
          <a
            className="text-xl font-bold hover:underline"
            target="_blank"
            href={link}
            rel="noreferrer"
          >
            {name}
          </a>
        </div>
      </div>
    </div>
  );
}

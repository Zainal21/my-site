import React from "react";

export default function ReadingListCard({
  title,
  authors,
  time_read,
  excerpt,
  category,
  linksource,
}) {
  return (
    <div className=" flex flex-col justify-start mx-auto mt-5 bg-transparant overflow-hidden hover:shadow-lg hover:border-1 hover:border-gray-600 border-2 border-gray-700 rounded-lg">
      <div className="p-5">
        <div>
          <span className="text-blue-100 text-xs font-bold uppercase">
            {authors}
          </span>
          <div className="flex justify-center">
            <span className="font-medium ml-auto text-gray-100 text-sm">
              {time_read}
            </span>
          </div>
          <a
            className="block text-gray-100  font-semibold hover:underline lg:text-xl text-base mt-3 hover:text-gray-300 hover:text-underline"
            target="_blank"
            rel="noreferrer"
            href={linksource}
          >
            {title}
          </a>
          <p className="lg:text-md text-gray-100 mt-3 text-sm">{excerpt}</p>
          <span className="px-3 py-1 mt-5 mb-5 float-left  lg:text-sm text-sm text-white font-bold rounded bg-gray-700 hover:bg-gray-600">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}

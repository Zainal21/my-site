import React from "react";

export default function BlogList() {
  return (
    <li className=" flex flex-col p-3 md:p-5 sm:hover:bg-gray-800 sm:rounded-xl bg-gray-800">
      <h4 className="mb-2 text-xl py-4 font-bold line-clamp-3 text-white hover:underline">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        ab?
      </h4>
      <p className="mb-4 max-w-2xl text-neutral-400 line-clamp-3 text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo
        dolorem praesentium. Praesentium nesciunt similique recusandae dolore
        quod aperiam tenetur saepe minima delectus tempora, beatae autem alias
        reiciendis maiores? Ex?
      </p>
      <div className="flex items-center mb-2 space-x-2"></div>
      <span className="text-medium text-neutral-400">May 16, 2022</span>
    </li>
  );
}

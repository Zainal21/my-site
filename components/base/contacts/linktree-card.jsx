import React from "react";

export default function LinktreeCard({ name, link }) {
  let color = "bg-gray-800";
  switch (name) {
    case "Github":
      color = "bg-gray-600";
      break;
    case "Whatsapp":
      color = "bg-green-600";
      break;
    case "Gitlab":
      color = "bg-yellow-600";
      break;
    case "E-mail":
      color = "bg-blue-500";
      break;
    case "Facebook":
      color = "bg-blue-900";
      break;
    case "Twitter":
      color = "bg-blue-600";
      break;
    case "Github":
      color = "bg-gray-800";
      break;
    case "instagram":
      color = "bg-red-600";
      break;
    case "LinkedIn":
      color = "bg-blue-800";
      break;
    case "Telegram":
      color = "bg-blue-500";
      break;
    default:
      color = "bg-blue-500";
      break;
  }

  return (
    <div
      className={`w-full my-3 rounded-md shadow-2xl py-5 px-8 text-white  hover:border-2 border-1 border-gray-600 hover:border-gray-600 ${color}`}
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

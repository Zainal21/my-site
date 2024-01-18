import { ProjectType } from "@/types/projects";
import Image from "next/image";
import React from "react";

export type ProjectProps = {
  project: ProjectType;
};

const ProjectList: React.FC<ProjectProps> = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 no-underline transition border duration-300 dark:bg-[#10161a]/50 rounded-lg border-teal-100 dark:border-teal-900"
    >
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold dark:text-white text-black hover:underline">
          {project.name}
        </h3>
        <p className="text-sm leading-normal dark:text-white text-black">
          {project.description}
        </p>
        <div className="mt-0 bg-gray-50 rounded-md">
          {project.img && (
            <Image
              src={`/images/projects/${project.img}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt={project.name}
            />
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectList;

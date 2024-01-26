import { ProjectType } from "@/types/projects";
import Image from "next/image";
import React, { useState } from "react";

interface ProjectListProps {
  project: ProjectType;
}

const ProjectList: React.FC<ProjectListProps> = ({ project }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 shadow-lg hover:shadow-xl no-underline transition border duration-300 dark:bg-[#10161a]/50 bg-gray-100/50 rounded-lg border-teal-100 dark:border-teal-900"
    >
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold dark:text-gray-100 text-[#10161a] hover:underline">
          {project.name}
        </h3>
        <p className="text-sm leading-normal dark:text-gray-100 text-[#10161a]">
          {project.description}
        </p>
        <div className="mt-0 bg-gray-50 rounded-md w-full  md:w-[38.5rem]">
          {project.img && (
            <Image
              loading="lazy"
              src={`/images/projects/${project.img}`}
              width={0}
              height={0}
              sizes="100vw"
              className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading(false)}
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

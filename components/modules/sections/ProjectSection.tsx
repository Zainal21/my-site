import React from "react";
import { projects } from "@/data/projects";
import { Heading, Text } from "@/components/design-system";
import { ProjectList } from "@/components/modules";

export default function ProjectSection() {
  return (
    <section className="max-w-3xl p-4 mx-auto md:p-0 md:-mt-0 mb-12 mt-10">
      <Heading className="mt-5">Recent Project 👨🏻‍💻</Heading>
      <div className="mt-5 prose max-w-none dark:text-white text-black">
        <Text>This page contains a list of applications I have worked on.</Text>
        <div className="space-y-8 md:-mx-6">
          {projects.map((project, index) => (
            <ProjectList project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

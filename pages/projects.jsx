import React from "react";
import Container from "@/components/ui/container";
import PageContent from "@/components/base/page-content";
import MainWrapped from "@/components/base/main-wrapped";
import PageTitle from "@/components/ui/page-title";
import MetaTag from "@/components/base/meta-tag";
import ProjectCard from "@/components/base/projects/project-card";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <React.Fragment>
      <MetaTag title="Projects | Muhamadzain.dev" />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <PageTitle title="/Projects" />
              <div className="pr-2 pt-3">
                <span className="font-body text-xl font-light text-primary dark:text-white">
                  A recent project to fill my spare time and to learn some new
                  technologies
                </span>
              </div>
              <div className="pt-16 lg:pt-20">
                <div className="flex flex-wrap justify-center">
                  {projects.map((item, index) => (
                    <ProjectCard
                      key={index}
                      image={`/assets${item.image}`}
                      description={item.description}
                      link={item.link}
                      stack={item.stack}
                      projectName={item.project_name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </React.Fragment>
  );
}

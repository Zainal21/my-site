import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { ProjectList } from "@/components/modules";
import { Animate, SeoMeta } from "@/components/design-system/utils";
import { Heading, Text } from "@/components/design-system";
import { projects } from "@/data/projects";

const Projects: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={"Project - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <section className="max-w-3xl p-4 mx-auto -mt-12 md:p-0 md:-mt-0">
            <Heading className="mt-5">Recent Project 💻</Heading>
            <div className="mt-5 prose max-w-none dark:text-white text-black">
              <Text>
                This page contains a list of applications I have worked on.
              </Text>
              <div className="space-y-8 md:-mx-6">
                {projects.map((project, index) => (
                  <ProjectList project={project} key={index} />
                ))}
              </div>
            </div>
          </section>
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Projects;

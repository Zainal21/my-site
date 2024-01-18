import { Heading, LinkTarget, Text } from "@/components/design-system";
import React from "react";

const AboutSection: React.FC<{ short: boolean }> = ({ short }) => {
  return (
    <section className="flex flex-col mb-12 mt-10">
      <Heading>About 💭</Heading>
      <React.Fragment>
        <Text style={{ marginBottom: `1.5rem` }}>
          I'm a 21 y.o, a passionate individual exploring the realms of
          technology, with a specific interest in software development.
        </Text>

        <Text style={{ marginBottom: `1.5rem` }}>
          With over 3 years of hands-on experience in programming, I have honed
          my skills in utilizing frameworks and libraries such as{" "}
          <LinkTarget href="https://codeigniter.com" target="_blank">
            Codeigniter
          </LinkTarget>{" "}
          ,{" "}
          <LinkTarget href="https://laravel.com" target="_blank">
            Laravel
          </LinkTarget>{" "}
          ,{" "}
          <LinkTarget href="https://vuejs.org" target="_blank">
            VueJS
          </LinkTarget>{" "}
          ,{" "}
          <LinkTarget href="https://react.dev" target="_blank">
            ReactJS
          </LinkTarget>{" "}
          ,{" "}
          <LinkTarget href="https://kotlinlang.org/" target="_blank">
            Kotlin
          </LinkTarget>{" "}
          ,{" "}
          <LinkTarget href="https://expressjs.com" target="_blank">
            Express JS
          </LinkTarget>{" "}
          ,{" "}
          <LinkTarget href="https://docs.nestjs.com" target="_blank">
            Nest JS
          </LinkTarget>{" "}
          , and{" "}
          <LinkTarget href="https://gofiber.io" target="_blank">
            Go Fiber
          </LinkTarget>{" "}
          , among others. Currently, I am dedicated to deepening my expertise in
          Backend Development and DevOps
        </Text>
      </React.Fragment>
      {!short && (
        <React.Fragment>
          <Text style={{ marginBottom: `1.5rem` }}>
            Professionally, I'm contributing my skills as a Software Engineer at{" "}
            <LinkTarget href="https://oxycreative.com" target="_blank">
              OXY Creative
            </LinkTarget>{" "}
            , where I actively engage in innovative projects and contribute to
            the dynamic tech landscape. In addition to my full-time role, I also
            take on freelance projects, allowing me to further diversify my
            experience as a software developer.
          </Text>
        </React.Fragment>
      )}
      <Text>
        Let's connect and explore the endless possibilities at the intersection
        of technology and innovation! 👨‍💻✨ #SoftwareDeveloper #WebDevelopment
        #MobileApps #TechEnthusiast #DevOpsEngineer
      </Text>
    </section>
  );
};

export default AboutSection;

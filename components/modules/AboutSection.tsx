import { Heading, Text, TagLink } from "@/components/design-system";

const AboutSection = () => {
  const TEXT_MARGIN_BOTTOM = 1.5;

  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m a {new Date().getFullYear() - 2003} a passionate individual
        exploring the realms of technology, with a specific interest in web and
        mobile application development.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        With over 3 years of hands-on experience in programming, I have honed my
        skills in utilizing frameworks and libraries such as Codeigniter,
        Laravel, Vue JS, React JS, Kotlin, Express JS, Nest JS, and Go Fiber,
        among others. Currently, I am dedicated to deepening my expertise in
        Backend Development and DevOps
      </Text>

      <Text>
        Let's connect and explore the endless possibilities at the intersection
        of technology and innovation! 👨‍💻✨ #SoftwareDeveloper #WebDevelopment
        #MobileApps #TechEnthusiast #DevOpsEngineer
      </Text>
    </section>
  );
};

export default AboutSection;

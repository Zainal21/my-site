import { Heading, Text, TagLink } from "@/components/design-system";

const AboutSection = () => {
  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>

      <Text style={{ marginBottom: `1.5rem` }}>
        I'm a 21 y.o, a passionate individual exploring the realms of
        technology, with a specific interest in software development.
      </Text>

      <Text style={{ marginBottom: `1.5rem` }}>
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

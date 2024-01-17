import { Heading } from "@/components/design-system/components";
import { SocialMediaLink } from "@/components/modules";

const MainSection: React.FC = () => {
  return (
    <div className="flex flex-col mt-5">
      <Heading style={{ marginBottom: "0.5rem" }}>
        Hi, I&apos;m Muhamad Zainal Arifin! <span className="wave">👋</span>
      </Heading>
      <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
        <p>Software Engineer</p>
      </div>
      <SocialMediaLink />
    </div>
  );
};

export default MainSection;

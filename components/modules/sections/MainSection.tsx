import { Avatar, Heading } from "@/components/design-system/components";
import { SocialMediaLink } from "@/components/modules";

const MainSection: React.FC = () => {
  return (
    <div className="flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 mt-18">
      <div className="flex flex-col">
        <Heading style={{ marginBottom: "0.5rem" }}>
          Hi, I&apos;m Muhamad Zainal Arifin! <span className="wave">👋</span>
        </Heading>
        <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
          <p>Software Engineer & DevOps Engineer</p>
        </div>
        <SocialMediaLink />
      </div>
      <div className="flex mb-8 md:mb-0 duration-300 rounded-full">
        <Avatar border={true} width={122} height={122} />
      </div>
    </div>
  );
};

export default MainSection;

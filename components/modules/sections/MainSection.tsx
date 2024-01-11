import { Heading } from "@/components/design-system/components";
import { SocialMediaLink } from "..";

const MainSection: React.FC = () => {
  return (
    <main className=" flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 mt-36">
      <div className="flex flex-col">
        <Heading style={{ marginBottom: "0.5rem" }}>
          Hi, I&apos;m Muhamad Zainal Arifin! <span className="wave">👋</span>
        </Heading>
        <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
          <p>Software Engineer</p>
        </div>
        <SocialMediaLink />
      </div>
    </main>
  );
};

export default MainSection;

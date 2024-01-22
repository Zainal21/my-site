import React from "react";
import {
  Border,
  ButtonLink,
  Heading,
  Tag,
  Text,
} from "@/components/design-system";
import { LinkTarget } from "../../design-system/components/Link";
import { experienceList } from "@/data/experience";
import Image from "next/image";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import { Experience } from "@/types/experience";

export default function ExperienceSection(): React.JSX.Element {
  return (
    <section className="flex flex-col mb-12">
      <Heading>Experience 🛠️</Heading>
      <Text>
        If you want to find out more about my experience please head over to my{" "}
        <LinkTarget
          href="https://www.linkedin.com/in/muhammad-zainal-arifin/"
          target="_blank"
        >
          LinkedIn
        </LinkTarget>{" "}
      </Text>
      <div className="content">
        {experienceList?.map((item) => {
          return (
            <ExperienceCard
              key={item.id}
              name={item.name}
              description={item.description}
              year={item.year}
              employmentType={item.employmentType}
              remote={item.remote}
              location={item.location}
              current={item.current}
              link={item.link}
              task={item.task}
            />
          );
        })}
      </div>
    </section>
  );
}

const ExperienceCard: React.FC<Experience> = (props) => {
  function getEmploymentTypeString() {
    switch (props.employmentType) {
      case "freelance":
        return "Freelance";
      case "full-time":
        return "Full-Time";
      case "internship":
        return "Internship";
      case "part-time":
        return "Part-Time";
      default:
        return "Contract";
    }
  }

  return (
    <div
      className="flex flex-col sm:flex-row w-full items-center dark:bg-[#10161a]/50 bg-gray-100/50 rounded-lg p-6 mt-5
    duration-300 border border-teal-100 dark:border-teal-900 mb-6 shadow-md ease-in transition-all hover:shadow-lg"
    >
      {props.logo ? (
        <div className="mb-5">
          <Border>
            <Image
              className="rounded-full h-fit"
              src={props.logo}
              width={100}
              height={100}
              alt={`${props.name} Logo`}
              title={`${props.name} Logo`}
              quality={99}
            />
          </Border>
        </div>
      ) : (
        <div></div>
      )}
      <div className="w-full text-left">
        <div className="flex items-center justify-start mb-3">
          <h1 className="text-2xl font-bold dark:text-white mr-3">
            {props.name}
          </h1>
          <Tag title={props.current ? "Current" : "Past"} />
        </div>
        <Text>
          {props.description} &bull; {props.year} &bull;{" "}
          {getEmploymentTypeString()} &bull; {props.remote && "Remote"}
        </Text>
        <div className="relative my-4">
          <Text>{props.task}</Text>
        </div>
        <div className="w-full flex-row items-center justify-between mt-2">
          <div className="flex items-center mb-4 mt-2">
            <FiMapPin className="text-gray-600 dark:text-gray-300 mr-2" />
            <Text>{props.location}</Text>
          </div>
          <ButtonLink href={props.link} target="_blank">
            Visit
            <FiExternalLink className="text-xl ml-2" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

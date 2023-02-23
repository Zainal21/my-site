import Image from "next/image";

export default function ProjectCard({
  image,
  link,
  projectName,
  stack,
  description,
}) {
  return (
    <div className=" lg:w-1/2 p-1 mt-2 w-full">
      <div className="h-full bg-gray-700 card-skills shadow-md hover:border-2  overflow-hidden relative p-8 flex flex-wrap flex-col items-center justify-center hover:shadow-2xl hover:border-1 hover:border-gray-600 border-2 border-gray-700 rounded-lg">
        <div>
          <Image
            src={image}
            alt="Image Skill"
            className="lg:w-full h-auto md:w-full mb-5 rounded object-cover object-center mx-auto"
            width="400%"
            height="200%"
            loading="eager"
          />
        </div>
        <a
          target="_blank"
          href={link}
          rel="noreferrer"
          className="text-lg md:text-medium text-center font-bold mb-2 text-gray-200"
        >
          {projectName}
          <br />
          <span className="font-bold lg:text-lg text-medium">({stack})</span>
        </a>
        <p className="lg:text-base text-medium text-center font-light mb-4">
          {description}
        </p>
        <a
          target="_blank"
          href={link}
          rel="noreferrer"
          className="flex items-center py-2 px-2 capitalize tracking-wide bg-btn text-white font-medium rounded hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-400 dark:focus:bg-gray-700"
        >
          <span className="mx-1 hover:underline">See Project</span>
        </a>
      </div>
    </div>
  );
}

import React from "react";
import { LinkTarget, TagLink, Text } from "@/components/design-system";
import { useRouter } from "next/router";
import { FiArrowLeft } from "react-icons/fi";

interface ErrorSectionProps {
  heading: string;
  text: string;
  location?: string;
}

export default function ErrorSection({
  heading,
  text,
  location,
}: ErrorSectionProps): React.JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-4xl font-bold text-center tracking-tight dark:text-gray-100">
        {heading}
      </h1>
      <Text style={{ marginBottom: "1rem" }}>{text}</Text>
      <TagLink
        href={location ? location : ""}
        onClick={() => {
          !location && router.back();
        }}
      >
        <FiArrowLeft className="text-lg mr-1" /> Go back
      </TagLink>
    </div>
  );
}

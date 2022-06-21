import React from "react";
import Section from "@/components/ui/section";
import readinglist from "../../data/reading-list.json";
import ReadingListCard from "../base/home/reading-list-card";
export default function ReadingListSection(props) {
  return (
    <Section className="mt-10  mb-6 bg-transparant dark:bg-gray-800">
      <h2 className="text-gray-100 text-2xl text-medium font-bold mb-8  mt-8 underline">
        My Recent Reading list
      </h2>
      {readinglist.map((item, index) => (
        <ReadingListCard
          key={index}
          title={item.title}
          authors={item.authors}
          excerpt={item.excerpt}
          category={item.category}
          linksource={item.sourceLink}
        />
      ))}
    </Section>
  );
}

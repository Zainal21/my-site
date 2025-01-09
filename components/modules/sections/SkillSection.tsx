import React from "react";
import { SkillsCard } from "@/components/modules";

export default function SkillSection(): React.JSX.Element {
  return (
    <section className="flex flex-col mb-12 mt-1">
      <SkillsCard />
    </section>
  );
}

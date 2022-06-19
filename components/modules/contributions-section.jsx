import React from "react";
import Container from "../ui/container";
import Section from "../ui/section";
export default function ContributionSection() {
  return (
    <Section className="container mt-10 mb-10 bg-transparant dark:bg-gray-800">
      <h2 className="text-gray-100 text-2xl font-bold mb-8  mt-8 underline">
        My Github Contribution Chart
      </h2>
      <Container className=" mx-auto px-6 py-8">
        <img
          src="https://ghchart.rshah.org/Zainal21"
          alt="My Contributions"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Container>
    </Section>
  );
}

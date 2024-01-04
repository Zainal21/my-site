import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { MainSection } from "@/components/modules";
import { Animate } from "@/components/design-system/utils";

const Home: NextPage = () => {
  return (
    <HomePageLayout>
      <Animate>
        <MainSection />
      </Animate>
    </HomePageLayout>
  );
};

export default Home;

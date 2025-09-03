import { Animate, SeoMeta } from "@/components/design-system/utils";
import { ChatBotSection, ChatInput } from "@/components/modules";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { NextPage } from "next";
import React from "react";

const ChatAIPage: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={"TanyaAI - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <ChatBotSection />
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default ChatAIPage;

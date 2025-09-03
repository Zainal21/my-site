"use client";

import { ChatInput } from "@/components/modules";
import React, { FormEvent, useState, KeyboardEvent } from "react";
import { FaRobot, FaUserAstronaut } from "react-icons/fa";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { continueConversation } from "@/libs/ai";
import { Heading, Text } from "@/components/design-system";

interface MessageInterface {
  content: string;
  role: "user" | "assistant";
}

type RemarkPlugin = typeof remarkGfm;

export default function ChatBotSection() {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [input, setInput] = useState("");

  const remarkPlugins = [remarkGfm];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim().length === 0) return;

    const newMessages: MessageInterface[] = [
      ...messages,
      { content: input, role: "user" },
    ];

    setMessages(newMessages);
    setInput("");

    try {
      const result = await continueConversation(newMessages);

      const reader = result.getReader();
      let assistantContent = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        assistantContent += value;
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: assistantContent,
          },
        ]);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (input.trim().length > 0) {
        handleSubmit(e);
      }
    }
  };

  return (
    <section className="max-w-3xl p-4 mx-auto -mt-12 md:p-0 md:-mt-0 w-[46vw] h-[70vh]">
      <Heading className="mt-5">Muzar AI 🤖</Heading>
      <div className="mt-5 prose max-w-none dark:text-gray-100 text-[#10161a]">
        <Text>This page contains a chatbot AI-based assistant.</Text>
      </div>

      <div
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
        className="mt-5 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] "
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center text-gray-400 mb-4">
            <FaRobot size={50} className="mb-4" />
            <p className="text-lg">Ask me anything!</p>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
            {/* Avatar Icon */}
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <div className="rounded-full bg-gray-100 border p-1">
                {m.role === "user" ? (
                  <FaUserAstronaut size={20} className="text-black" />
                ) : (
                  <FaRobot size={20} className="text-black" />
                )}
              </div>
            </span>

            {/* Message Content */}
            <p className="leading-relaxed">
              <span className="block font-bold text-gray-700">
                {m.role === "user" ? "You" : "AI"}
              </span>
              <div className="prose prose-sm dark:prose-invert">
                <ReactMarkdown remarkPlugins={remarkPlugins}>
                  {m.content}
                </ReactMarkdown>
              </div>
            </p>
          </div>
        ))}

        <ChatInput
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
        />
      </div>
    </section>
  );
}

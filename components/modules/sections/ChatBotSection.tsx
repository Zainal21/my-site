"use client";

import { ChatInput } from "@/components/modules";
import React, { FormEvent, useState, useRef, useEffect } from "react";
import { FaRobot, FaUserAstronaut } from "react-icons/fa";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { continueConversation } from "@/libs/ai";
import { Heading, Text } from "@/components/design-system";

interface MessageInterface {
  content: string;
  role: "user" | "assistant";
}

export default function ChatBotSection() {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const remarkPlugins = [remarkGfm];
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent
  ) => {
    e.preventDefault();
    if (input.trim().length === 0) return;

    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && !(e.nativeEvent as any).isComposing) {
      e.preventDefault();
      if (input.trim().length > 0) {
        handleSubmit(e);
      }
    }
  };

  // Auto-scroll ke bawah tiap ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <section className="max-w-3xl p-4 mx-auto -mt-12 md:p-0 md:-mt-0 w-[100%] md:w-[100vw]">
      <Heading className="mt-5">Demo : Muzar AI 🤖</Heading>
      <div className="mt-3 prose max-w-none dark:text-gray-100 text-[#10161a]">
        <Text>This page contains a chatbot AI-based assistant.</Text>
      </div>

      {/* Message container */}
      <div className="flex flex-col flex-1 mt-5 border border-[#e5e7eb] bg-gray-100 dark:bg-gray-600 rounded-xl shadow-md overflow-hidden">
        <div
          style={{
            boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          }}
          className="flex-1 mt-5 bg-gray-200 dark:bg-gray-600 p-6 rounded-lg overflow-y-auto"
        >
          {messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center text-center text-gray-400 mt-20">
              <FaRobot size={50} className="mb-4" />
              <p className="text-lg">Ask me anything!</p>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className="flex gap-3 my-4 text-gray-600 text-sm">
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
              <div className="flex flex-col">
                <span className="block font-bold dark:text-gray-200 text-gray-600">
                  {m.role === "user" ? "You" : "AI"}
                </span>
                <div className="prose prose-sm dark:prose-invert">
                  <ReactMarkdown remarkPlugins={remarkPlugins}>
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}

          {/* Loading animation */}
          {isLoading && (
            <div className="flex gap-3 my-4 text-gray-500 text-sm items-center">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <FaRobot size={20} className="text-black" />
                </div>
              </span>
              <div className="flex flex-col">
                <span className="block font-bold text-gray-600 dark:text-gray-200">
                  AI
                </span>
                <div className="flex gap-1 mt-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
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

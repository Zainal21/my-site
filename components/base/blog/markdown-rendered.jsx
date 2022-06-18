import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";

export default function MarkdownRendered({ content }) {
  return (
    <ReactMarkdown
      className="text-gray-300 mt-10"
      components={{
        code: ({ inline, className, children }) => {
          const match = /language-(\w+)/.exec(className || "");
          return inline ? (
            <code className={className}></code>
          ) : (
            <SyntaxHighlighter style={nord} language={match[1]} showLineNumbers>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

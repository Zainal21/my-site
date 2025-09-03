interface Message {
  role: string;
  content: string;
}

interface StreamResponse {
  choices: Array<{
    delta: {
      content?: string;
    };
  }>;
}

async function continueConversation(
  messages: Message[]
): Promise<ReadableStream<string>> {
  const response = await fetch("/api/muzar-ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const stream = new ReadableStream<string>({
    async start(controller) {
      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer: string = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");

        for (let i = 0; i < lines.length - 1; i++) {
          const line = lines[i].trim();
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              controller.close();
              break;
            }
            try {
              const parsed: StreamResponse = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || "";
              if (content) {
                controller.enqueue(content);
              }
            } catch (e) {
              console.error("Error parsing stream data:", e);
            }
          }
        }
        buffer = lines[lines.length - 1];
      }
    },
  });

  return stream;
}

export { continueConversation };

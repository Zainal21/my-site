import type { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";

interface Message {
  role: string;
  content: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { messages } = req.body as { messages: Message[] };

  try {
    const response = await fetch(
      "https://integrate.api.nvidia.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NVIDIA_NIM_API_KEY}`,
        },
        body: JSON.stringify({
          model: "google/gemma-2-9b-it",
          messages,
          temperature: 0.2,
          top_p: 0.7,
          max_tokens: 1024,
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`NVIDIA API error: ${await response.text()}`);
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    response.body?.pipeTo(
      new WritableStream({
        write(chunk) {
          res.write(chunk);
        },
        close() {
          res.end();
        },
        abort(err) {
          console.error("Stream error:", err);
          res.status(500).end();
        },
      })
    );
  } catch (error) {
    console.error("API route error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

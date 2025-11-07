import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

export async function POST() {
  const { text } = await generateText({
    model: anthropic("claude-3-haiku-20240307"),
    prompt: "Explain what an LLM is in simple terms",
  });

  return Response.json({ text });
}

import { generateText } from "ai";
import { ai } from "@/app/constants/ai";

export async function POST(req: Request) {
  try {
    console.log("Google key:", process.env.GOOGLE_GENERATIVE_AI_API_KEY);
    const { prompt } = await req.json();
    const { text } = await generateText({
      model: ai.model,
      prompt,
    });
    return Response.json({ text });
  } catch (error) {
    console.error("Error generating text:", error);
    return Response.json({ error: "Failed to generate text" }, { status: 500 });
  }
}

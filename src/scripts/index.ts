import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("VITE_GEMINI_API_KEY is not set");
}

const ai = new GoogleGenAI({ apiKey });

type ChatHistory = {
  role: "user" | "model";
  parts: { text: string }[];
};

export async function sendMessage(
  message: string,
  history: ChatHistory[] = []
) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      ...history,
      {
        role: "user",
        parts: [{ text: message }],
      },
    ],
    config: {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
    },
  });

  return response.text;
}

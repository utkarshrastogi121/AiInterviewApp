import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY!,
});

export async function sendMessage(
  message: string,
  history: { role: "user" | "model"; parts: { text: string }[] }[] = []
) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      ...history,
      { role: "user", parts: [{ text: message }] },
    ],
  });

  return response.text;
}

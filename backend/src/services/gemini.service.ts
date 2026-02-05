import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing in environment variables");
}

// log safely (optional)
console.log("Gemini API key loaded:", process.env.GEMINI_API_KEY.slice(0, 5) + "...");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ---------- Helpers ----------
const cleanJson = (text: string) => {
  const cleaned = text.replace(/```json|```/g, "").trim();
  const match = cleaned.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
  if (!match) throw new Error("Invalid JSON from AI");
  return JSON.parse(match[0]);
};

// ---------- 1. Generate Questions ----------
export const generateQuestionsAI = async (data: {
  position: string;
  description: string;
  experience: number;
  techStack: string;
}) => {
  const prompt = `
Generate EXACTLY 5 technical interview questions with answers.

Return STRICT JSON ARRAY:
[
  { "question": "string", "answer": "string" }
]

Job:
- Position: ${data.position}
- Description: ${data.description}
- Experience: ${data.experience}
- Tech Stack: ${data.techStack}

No markdown. No explanation.
`;

  const res = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return cleanJson(res.text!);
};

// ---------- 2. Evaluate Answer ----------
export const evaluateAnswerAI = async (data: {
  question: string;
  correctAnswer: string;
  userAnswer: string;
}) => {
  const prompt = `
Evaluate the user's answer.

Question: "${data.question}"
Correct Answer: "${data.correctAnswer}"
User Answer: "${data.userAnswer}"

Return STRICT JSON:
{
  "ratings": number,
  "feedback": string
}
`;

  const res = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return cleanJson(res.text!);
};

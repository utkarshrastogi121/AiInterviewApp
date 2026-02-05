import { Request, Response } from "express";
import {
  generateQuestionsAI,
  evaluateAnswerAI,
} from "../services/gemini.service";

export const generateQuestions = async (req: Request, res: Response) => {
  console.log("🔥 generate-questions HIT", req.body);

  try {
    const questions = await generateQuestionsAI(req.body);
    res.json({ success: true, questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};


export const evaluateAnswer = async (req: Request, res: Response) => {
  try {
    const result = await evaluateAnswerAI(req.body);
    res.json({ success: true, result });
  } catch {
    res.status(500).json({ success: false, message: "Evaluation failed" });
  }
};

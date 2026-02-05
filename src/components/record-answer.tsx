import { useAuth } from "@clerk/clerk-react";
import {
  CircleStop,
  Loader,
  Mic,
  RefreshCw,
  Save,
  Video,
  VideoOff,
  WebcamIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useSpeechToText, { type ResultType } from "react-hook-speech-to-text";
import { useParams } from "react-router-dom";
import WebCam from "react-webcam";
import { TooltipButton } from "./tooltip-button";
import { toast } from "sonner";
import { SaveModal } from "./save-modal";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { evaluateAnswer } from "@/scripts/ai";

interface RecordAnswerProps {
  question: { question: string; answer: string };
  isWebCam: boolean;
  setIsWebCam: (value: boolean) => void;
}

interface AIResponse {
  ratings: number;
  feedback: string;
}

export const RecordAnswer = ({
  question,
  isWebCam,
  setIsWebCam,
}: RecordAnswerProps) => {
  const {
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  const [userAnswer, setUserAnswer] = useState("");
  const [aiResult, setAiResult] = useState<AIResponse | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  const resultsRef = useRef<ResultType[]>([]);
  const { userId } = useAuth();
  const { interviewId } = useParams();

  // 🎯 Generate evaluation from backend
  const generateResult = async (): Promise<void> => {
    try {
      setIsAiGenerating(true);

      const result = await evaluateAnswer({
        question: question.question,
        correctAnswer: question.answer,
        userAnswer,
      });

      setAiResult(result);
    } catch {
      toast.error("AI Error", {
        description: "Failed to evaluate your answer",
      });
      setAiResult({
        ratings: 0,
        feedback: "Evaluation failed. Please try again.",
      });
    } finally {
      setIsAiGenerating(false);
    }
  };

  const recordUserAnswer = async () => {
    if (!isRecording) {
      resultsRef.current = [];
      setUserAnswer("");
      setAiResult(null);
      startSpeechToText();
      return;
    }

    stopSpeechToText();

    if (userAnswer.trim().length < 30) {
      toast.error("Answer too short", {
        description: "Minimum 30 characters required",
      });
      return;
    }

    await generateResult();
  };

  const recordNewAnswer = () => {
    stopSpeechToText();
    resultsRef.current = [];
    setUserAnswer("");
    setAiResult(null);
    startSpeechToText();
  };

  const saveUserAnswer = async () => {
    if (!aiResult || !userId) return;

    setLoading(true);

    try {
      const q = query(
        collection(db, "userAnswers"),
        where("userId", "==", userId),
        where("question", "==", question.question)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        toast.info("Already Answered");
        return;
      }

      await addDoc(collection(db, "userAnswers"), {
        mockIdRef: interviewId,
        question: question.question,
        correct_ans: question.answer,
        user_ans: userAnswer,
        feedback: aiResult.feedback,
        rating: aiResult.ratings,
        userId,
        createdAt: serverTimestamp(),
      });

      toast.success("Saved successfully");
      setOpen(false);
      setUserAnswer("");
      setAiResult(null);
    } catch {
      toast.error("Save failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const validResults = results.filter(
      (r): r is ResultType => typeof r !== "string"
    );

    resultsRef.current = validResults;

    const transcript = validResults.map((r) => r.transcript).join(" ");
    setUserAnswer(transcript);
  }, [results]);

  return (
    <div className="w-full flex flex-col items-center gap-8 mt-4">
      <SaveModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={saveUserAnswer}
        loading={loading}
      />

      <div className="w-full h-[400px] md:w-96 border bg-gray-50 rounded-md flex items-center justify-center">
        {isWebCam ? (
          <WebCam className="w-full h-full rounded-md object-cover" />
        ) : (
          <WebcamIcon className="w-24 h-24 text-muted-foreground" />
        )}
      </div>

      <div className="flex justify-center gap-3">
        <TooltipButton
          content={isWebCam ? "Turn Off" : "Turn On"}
          icon={isWebCam ? <VideoOff /> : <Video />}
          onClick={() => setIsWebCam(!isWebCam)}
        />

        <TooltipButton
          content={isRecording ? "Stop Recording" : "Start Recording"}
          icon={isRecording ? <CircleStop /> : <Mic />}
          onClick={recordUserAnswer}
        />

        <TooltipButton
          content="Record Again"
          icon={<RefreshCw />}
          onClick={recordNewAnswer}
        />

        <TooltipButton
          content="Save Result"
          icon={
            isAiGenerating ? <Loader className="animate-spin" /> : <Save />
          }
          onClick={() => !isAiGenerating && setOpen(true)}
          disabled={!aiResult || isAiGenerating}
        />
      </div>

      <div className="w-full p-4 border rounded-md bg-gray-50">
        <h2 className="font-semibold">Your Answer</h2>
        <p className="mt-2 text-sm text-gray-700">
          {userAnswer || "Start recording..."}
        </p>

        {interimResult && (
          <p className="text-xs text-gray-500 mt-2">
            <strong>Current:</strong> {interimResult}
          </p>
        )}

        {aiResult && (
          <div className="mt-4 text-sm">
            <p>
              <strong>Rating:</strong> {aiResult.ratings}/10
            </p>
            <p className="mt-1">
              <strong>Feedback:</strong> {aiResult.feedback}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

import type { Interview } from "@/types";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./tooltip-button";
import { Eye, Newspaper, Sparkles } from "lucide-react";

interface InterviewPinProps {
  interview: Interview;
  onMockPage?: boolean;
}

export const InterviewPin = ({
  interview,
  onMockPage = false,
}: InterviewPinProps) => {
  const navigate = useNavigate();

  const techStack = interview?.techStack
    ? interview.techStack.split(",")
    : [];

  const createdAtDate = interview?.createdAt?.toDate?.();

  return (
    <Card className="p-4 rounded-md shadow-none hover:shadow-md shadow-gray-100 transition-all space-y-4">
      <CardTitle className="text-lg">
        {interview?.position}
      </CardTitle>

      <CardDescription>
        {interview?.description}
      </CardDescription>

      <div className="w-full flex items-center gap-2 flex-wrap">
        {techStack.map((word, index) => (
          <Badge
            key={`${word}-${index}`}
            variant="outline"
            className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
          >
            {word.trim()}
          </Badge>
        ))}
      </div>

      <CardFooter
        className={cn(
          "w-full flex items-center p-0",
          onMockPage ? "justify-end" : "justify-between"
        )}
      >
        <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
          {createdAtDate &&
            `${createdAtDate.toLocaleDateString("en-US", {
              dateStyle: "long",
            })} - ${createdAtDate.toLocaleTimeString("en-US", {
              timeStyle: "short",
            })}`}
        </p>

        {!onMockPage && (
          <div className="flex items-center">
            <TooltipButton
              content="View"
              buttonVariant="ghost"
              onClick={() =>
                navigate(`/generate/${interview.id}`, { replace: true })
              }
              buttonClassName="hover:text-sky-500"
              icon={<Eye />}
            />

            <TooltipButton
              content="Feedback"
              buttonVariant="ghost"
              onClick={() =>
                navigate(`/generate/feedback/${interview.id}`, {
                  replace: true,
                })
              }
              buttonClassName="hover:text-yellow-500"
              icon={<Newspaper />}
            />

            <TooltipButton
              content="Start"
              buttonVariant="ghost"
              onClick={() =>
                navigate(`/generate/interview/${interview.id}`, {
                  replace: true,
                })
              }
              buttonClassName="hover:text-sky-500"
              icon={<Sparkles />}
            />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

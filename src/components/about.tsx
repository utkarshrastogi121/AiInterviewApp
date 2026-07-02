import React from "react";
import {
  Brain,
  LayoutDashboard,
  FileText,
  BarChart3,
  Briefcase,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About AI Interview App
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        <strong>AI Interview App</strong> is your intelligent companion to
        mastering job interviews. Our platform empowers you to simulate
        realistic mock interviews tailored to your job role, experience level,
        and tech stack — all powered by AI insights. Whether you're a fresher
        or an experienced professional, AI Interview App helps you prepare,
        improve, and boost your confidence before the big day.
      </p>

      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-blue-400" />
        <h2 className="text-2xl font-semibold">Key Features</h2>
      </div>

      <ul className="space-y-4 mb-8">
        <li className="flex items-start gap-3">
          <Brain className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
          <span>
            <strong>AI-powered Interview Generation</strong> – Personalized
            interviews based on your role, description, experience, and
            technology stack.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <LayoutDashboard className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
          <span>
            <strong>Dashboard for Interview Management</strong> – Keep track of
            all your mock interviews in one place.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
          <span>
            <strong>Role-specific Inputs</strong> – Customize your interview by
            specifying job role, experience, and tech stack.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <BarChart3 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
          <span>
            <strong>Performance Insights</strong> – Get AI-driven feedback to
            identify strengths and areas for improvement.
          </span>
        </li>
      </ul>

      <div className="flex items-center gap-2 mb-4">
        <Target className="w-6 h-6 text-orange-400" />
        <h2 className="text-2xl font-semibold">Use Cases</h2>
      </div>

      <ul className="space-y-4 mb-8">
        <li className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
          <span>
            Prepare for your dream job interviews with realistic AI
            simulations.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <Target className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
          <span>
            Gain confidence through repeated practice in a stress-free
            environment.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
          <span>
            Identify weak areas and work on them with AI-generated suggestions.
          </span>
        </li>

        <li className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
          <span>
            Use role-specific interviews for different job applications.
          </span>
        </li>
      </ul>

      <p className="text-lg leading-relaxed">
        With AI Interview App, you're not just practicing — you're preparing
        smarter. Let AI guide you towards your career goals.
      </p>
    </div>
  );
};

export default About;
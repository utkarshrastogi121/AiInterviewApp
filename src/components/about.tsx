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

const features = [
  {
    icon: <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: "AI-powered Interview Generation",
    description:
      "Generate personalized mock interviews based on your role, experience, job description, and technology stack.",
  },
  {
    icon: (
      <LayoutDashboard className="w-6 h-6 text-green-600 dark:text-green-400" />
    ),
    title: "Interview Dashboard",
    description:
      "Manage, organize, and revisit all your mock interviews from one place.",
  },
  {
    icon: <FileText className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    title: "Role-specific Interviews",
    description:
      "Customize interviews for different companies, roles, and technologies.",
  },
  {
    icon: (
      <BarChart3 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
    ),
    title: "Performance Insights",
    description:
      "Receive AI-powered feedback highlighting strengths and areas for improvement.",
  },
];

const useCases = [
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: "Prepare for Placements",
    description:
      "Practice realistic interviews before your campus or off-campus interviews.",
  },
  {
    icon: <Target className="w-6 h-6 text-red-600 dark:text-red-400" />,
    title: "Build Confidence",
    description:
      "Improve your communication and interview skills through regular practice.",
  },
  {
    icon: (
      <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    ),
    title: "Track Improvement",
    description:
      "Monitor your progress and identify weak areas with AI-generated insights.",
  },
];

const About: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          About AI Interview App
        </h1>

        <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <span className="font-semibold">AI Interview App</span> is your
          intelligent companion for mastering technical and HR interviews.
          Practice realistic AI-generated mock interviews tailored to your job
          role, experience level, and technology stack while receiving detailed
          feedback to improve with every session.
        </p>
      </div>

      {/* Features */}
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Key Features
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-14">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4">{feature.icon}</div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Use Cases */}
      <div className="flex items-center gap-2 mb-8">
        <Target className="w-7 h-7 text-orange-600 dark:text-orange-400" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Use Cases
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-14">
        {useCases.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4">{item.icon}</div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Practice Smarter with AI
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Whether you're preparing for campus placements, internships, or
          experienced software engineering roles, AI Interview App helps you
          build confidence, sharpen your interview skills, and maximize your
          chances of success through personalized AI-driven practice.
        </p>
      </div>
    </section>
  );
};

export default About;
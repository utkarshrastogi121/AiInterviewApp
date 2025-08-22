import React from "react";
import {
  FaRobot,
  FaChartLine,
  FaUserCog,
  FaHistory,
  FaClock,
  FaComments,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot className="text-indigo-600 dark:text-indigo-400 text-4xl" />,
    title: "AI-Powered Mock Interviews",
    description:
      "Simulate realistic interviews tailored to your role, experience, and tech stack using AI-driven question generation.",
  },
  {
    icon: <FaChartLine className="text-green-600 dark:text-green-400 text-4xl" />,
    title: "Performance Insights",
    description:
      "Get detailed feedback highlighting strengths and improvement areas to boost your confidence and skills.",
  },
  {
    icon: <FaUserCog className="text-yellow-600 dark:text-yellow-400 text-4xl" />,
    title: "Custom Role Setup",
    description:
      "Personalize your mock interviews by specifying role, job description, experience level, and technologies.",
  },
  {
    icon: <FaHistory className="text-pink-600 dark:text-pink-400 text-4xl" />,
    title: "Interview History & Dashboard",
    description:
      "Track past interviews, review responses, and monitor your progress over time with ease.",
  },
  {
    icon: <FaClock className="text-blue-600 dark:text-blue-400 text-4xl" />,
    title: "Practice Anytime, Anywhere",
    description:
      "Accessible from anywhere, letting you prepare at your own pace without scheduling constraints.",
  },
  {
    icon: <FaComments className="text-red-600 dark:text-red-400 text-4xl" />,
    title: "Real-Time AI Feedback",
    description:
      "Receive instant AI-driven feedback during interviews to adjust your responses and improve on the spot.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Explore how AI Interview App can help you prepare better and land your
          dream job.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

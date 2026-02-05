import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white-500">
      <h1 className="text-4xl font-bold mb-6 text-center">About AI Interview App</h1>

      <p className="text-lg leading-relaxed mb-6">
        <strong>AI Interview App</strong> is your intelligent companion to mastering job interviews. 
        Our platform empowers you to simulate realistic mock interviews tailored to your job role, 
        experience level, and tech stack — all powered by AI insights. Whether you're a fresher or an experienced 
        professional, AI Interview App helps you prepare, improve, and boost your confidence before the big day.
      </p>

      <h2 className="text-2xl font-semibold mb-4">🌟 Key Features</h2>
      <ul className="list-disc list-inside space-y-2 mb-8">
        <li>
          🧠 <strong>AI-powered Interview Generation</strong> – Personalized interviews based on your role, 
          description, experience, and technology stack.
        </li>
        <li>
          📅 <strong>Dashboard for Interview Management</strong> – Keep track of all your mock interviews in one place.
        </li>
        <li>
          ✍️ <strong>Role-specific Inputs</strong> – Customize your interview by specifying job role, experience, and tech stack.
        </li>
        <li>
          📊 <strong>Performance Insights</strong> – Get AI-driven feedback to identify strengths and areas for improvement.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">💡 Use Cases</h2>
      <ul className="list-disc list-inside space-y-2 mb-8">
        <li>Prepare for your dream job interviews with realistic AI simulations.</li>
        <li>Gain confidence through repeated practice in a stress-free environment.</li>
        <li>Identify weak areas and work on them with AI-generated suggestions.</li>
        <li>Use role-specific interviews for different job applications.</li>
      </ul>

      <p className="text-lg leading-relaxed">
        With AI Interview App, you're not just practicing — you're preparing smarter. 
        Let AI guide you towards your career goals.
      </p>
    </div>
  );
};

export default About;

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative flex items-center justify-between w-14 h-7 rounded-full px-1 bg-muted dark:bg-gray-700 transition-colors"
    >
      <SunIcon className="w-4 h-4 text-yellow-500" />
      <MoonIcon className="w-4 h-4 text-blue-400" />
      <span
        className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
}

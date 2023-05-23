import { useEffect, useState } from "react";

import { Icon } from "@iconify/react";

interface Props {
  Style: string;
}

const DarkMode = ({ Style }: Props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Dark Mode Toggle Button"
    >
      <Icon icon="gg:dark-mode" className={Style} />
    </button>
  );
};

export default DarkMode;

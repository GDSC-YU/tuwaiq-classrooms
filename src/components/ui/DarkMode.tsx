import { useEffect } from "react";

import { Icon } from "@iconify/react";

import { hookstate, useHookstate, State } from "@hookstate/core";

interface Props {
  Style: string;
}

const wrapState = (d: State<boolean>) => ({
  get: () => d.value,
});

const darkMode = hookstate(false);

export const globalDarkMode = () => wrapState(useHookstate(darkMode));

const DarkMode = ({ Style }: Props) => {
  const dark = useHookstate(darkMode);

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      dark.set(true);
    } else {
      document.documentElement.classList.remove("dark");
      dark.set(false);
    }
  }, []);

  const toggleTheme = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        dark.set(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        dark.set(false);
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        dark.set(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        dark.set(true);
      }
    }
  };

  return (
    <button type="button" onClick={toggleTheme}>
      <Icon icon="gg:dark-mode" className={Style} />
    </button>
  );
};

export default DarkMode;

import { useEffect } from "react";

import { Icon } from "@iconify/react";

import { hookstate, useHookstate, State } from "@hookstate/core";

interface Props {
  Style: string;
}

const globalDark = hookstate(localStorage.getItem("theme") ?? "light");

const wrapState = (d: State<string>) => ({
  get: () => d.value,
});

export const useGlobalDark = () => wrapState(useHookstate(globalDark));

const DarkMode = ({ Style }: Props) => {
  const theme = useHookstate(globalDark);

  useEffect(() => {
    if (theme.get() === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme.get());
  }, [theme]);

  const toggleTheme = () => {
    theme.set(theme.get() === "light" ? "dark" : "light");
  };

  return (
    <button type="button" onClick={toggleTheme}>
      <Icon icon="gg:dark-mode" className={Style} />
    </button>
  );
};

export default DarkMode;

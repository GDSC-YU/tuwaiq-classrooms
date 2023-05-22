import { Children, ReactNode } from "react";

import { Icon } from "@iconify/react";

import type { GoogleColor } from "../../data/data";

import DarkMode from "./DarkMode";

interface Props {
  backButtonHref: string;
  title: string;
  color: GoogleColor;
  padding?: string;
  children?: ReactNode;
}

const Header = ({ backButtonHref, title, color, padding, children }: Props) => {
  return (
    <header
      role="banner"
      aria-label={`${
        title.charAt(2) === "C"
          ? `${title} Header`
          : `${title} Classroom  Header`
      }`}
      className={`rounded-b-2xl ${color} p-5 ${padding}`}
    >
      <div className="flex items-center justify-between">
        <a href={backButtonHref} rel="prefetch" aria-label="Go Back Button">
          <Icon
            icon="fa:arrow-left"
            className="h-7 w-8 transition-all duration-200 hover:scale-110 md:h-11 md:w-12"
          />
        </a>
        <h1
          className="text-3xl font-black tracking-wide md:text-4xl"
          aria-label={`${
            title.charAt(2) === "C" ? title : `${title} Classroom`
          }`}
        >
          {title}
        </h1>
        <DarkMode Style="h-8 w-8 transition-all duration-200 hover:scale-110 md:h-12 md:w-12" />
      </div>
      {Children.map(children, (child) => child)}
    </header>
  );
};

export default Header;

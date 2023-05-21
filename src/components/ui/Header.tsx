import { Children, ReactNode } from "react";

import { Icon } from "@iconify/react";

import type { GoogleColor } from "../../data/data";

import DarkMode from "./DarkMode";

interface Props {
  backButtonHref: string;
  title: string;
  color: GoogleColor;
  children?: ReactNode;
}

export default function Header({
  backButtonHref,
  title,
  color,
  children,
}: Props) {
  return (
    <header className={`rounded-b-2xl ${color} p-5`}>
      <div className="flex items-center justify-between">
        <a href={backButtonHref}>
          <Icon
            icon="fa:arrow-left"
            className="h-7 w-8 transition-all duration-200 hover:scale-110 md:h-11 md:w-12"
          />
        </a>
        <p className="text-3xl font-black tracking-wide md:text-4xl">{title}</p>
        <DarkMode Style="h-8 w-8 transition-all duration-200 hover:scale-110 md:h-12 md:w-12" />
      </div>
      {Children.map(children, (child) => child)}
    </header>
  );
}

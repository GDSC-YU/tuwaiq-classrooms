import { Children, ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa/index.js";

export enum HeaderColor {
  paleYellow = "bg-pale-yellow",
  paleRed = "bg-pale-red",
  paleGreen = "bg-pale-green",
  paleBlue = "bg-pale-blue",
}

interface Props {
  title: string;
  color: HeaderColor;
  children?: ReactNode;
  backButtonHref: string;
  aria: string;
}

export default function Header({
  title,
  color,
  children,
  backButtonHref,
  aria,
}: Props) {
  return (
    <header className={`${color} rounded-b-[16px] p-5`}>
      <div className="flex">
        <a href={backButtonHref}>
          <FaArrowLeft
            className="text-center text-4xl hover:text-white"
            aria-label="Go Back Button"
          />
        </a>
        <p
          className="mx-auto font-cairo text-4xl font-black"
          aria-label={`${title} ${aria}`}
        >
          {title}
        </p>
        {/* This is a hack to make the room name centered */}
        <FaArrowLeft className="invisible text-center text-4xl hover:text-white" />
      </div>
      {Children.map(children, (child) => child)}
    </header>
  );
}

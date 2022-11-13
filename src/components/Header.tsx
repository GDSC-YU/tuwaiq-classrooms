import PropTypes from "prop-types";
import { Children } from "react";

export function MiArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9 hover:text-white mt-1 mx-4 ">
      <path fill="currentColor" d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z">
        </path>
    </svg>
  )
}

export enum HeaderColor {
  paleYellow = "bg-pale-yellow",
  paleRed = "bg-pale-red",
  paleGreen = "bg-pale-green",
  paleBlue = "bg-pale-blue",
}

interface Props {
  title: string;
  color: HeaderColor;
  children?: JSX.Element | JSX.Element[] | string | string[];
  callback?:string;
}
export default function Header({ title, color, children,callback}: Props) {
  return (
    <header className={`${color} p-5 rounded-b-[16px]`}>
      <p className="flex font-black font-cairo text-4xl"><a href={callback}>{MiArrowLeft()}</a>{title}</p>
      {Children.map(children, (child) => child)}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(Object.values(HeaderColor)),
};

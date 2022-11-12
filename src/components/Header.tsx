import type Icon from "astro-icon";
import PropTypes from "prop-types";
import { Children, SVGProps } from "react";


export function EiArrowLeft() {
  return (
    <svg  className="w-11 h-11 hover:text-white ">
      <path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"/>
      <path fill="currentColor" d="M25.3 34.7L15.6 25l9.7-9.7l1.4 1.4l-8.3 8.3l8.3 8.3z"/>
      <path fill="currentColor" d="M17 24h17v2H17z"/>
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
      <p className="font-black font-cairo text-4xl"><a href={callback}>{EiArrowLeft()}</a>{title}</p>
      {Children.map(children, (child) => child)}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(Object.values(HeaderColor)),
};

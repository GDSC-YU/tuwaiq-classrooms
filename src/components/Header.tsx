import PropTypes from "prop-types";
import { Children } from "react";

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
}

export default function Header({ title, color, children }: Props) {
  return (
    <header className={`${color} p-5 rounded-b-[16px]`}>
      <p className="font-black font-cairo text-4xl">{title}</p>
      {Children.map(children, (child) => child)}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(Object.values(HeaderColor)),
};

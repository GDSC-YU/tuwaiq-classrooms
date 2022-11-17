import PropTypes from "prop-types";
import { Children } from "react";


export function MaterialSymbolsArrowBackRounded() {
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9 hover:text-white mt-1 mx-4 ">
      <path fill="currentColor" d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288q.413-.012.713.288q.3.275.313.687q.012.413-.288.713L7.4 11h11.175q.425 0 .713.287q.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7q.012.425-.288.7q-.275.3-.7.3q-.425 0-.725-.3Z">
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
  backButtonHref?:string;
}
export default function Header({ title, color, children,backButtonHref}: Props) {
  return (
    <header className={`${color} p-5 rounded-b-[16px] `}>
      <div className="flex ">
      <a href={backButtonHref}>{MaterialSymbolsArrowBackRounded()}</a>     
      <p className="font-black font-cairo text-4xl">{title}</p>  
      </div>   
      {Children.map(children, (child) => child)}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(Object.values(HeaderColor)),
};

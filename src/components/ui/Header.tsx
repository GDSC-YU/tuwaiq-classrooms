import { Children, ReactNode } from "react";

import type { GoogleColor } from "../../assets/data/data";

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
          : `${title} Classroom Header`
      }`}
      className={`rounded-b-2xl ${color} p-5 ${padding}`}
    >
      <div className="flex items-center justify-between">
        <a href={backButtonHref} rel="prefetch" aria-label="Go Back Button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1536 1536"
            className="h-8 w-8 transition duration-300 ease-in-out hover:scale-110 md:h-12 md:w-12"
          >
            <path
              fill="currentColor"
              d="M1280 832V704q0-26-19-45t-45-19H714l189-189q19-19 19-45t-19-45l-91-91q-18-18-45-18t-45 18L360 632l-91 91q-18 18-18 45t18 45l91 91l362 362q18 18 45 18t45-18l91-91q18-18 18-45t-18-45L714 896h502q26 0 45-19t19-45zm256-64q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768z"
            />
          </svg>
        </a>
        <h1
          className="text-3xl font-black tracking-wide md:text-4xl"
          aria-label={`${
            title.charAt(2) === "C" ? title : `${title} Classroom`
          }`}
        >
          {title}
        </h1>
        <div className="h-8 w-8 md:h-12 md:w-12"></div>
      </div>
      {Children.map(children, (child) => child)}
    </header>
  );
};

export default Header;

import * as React from "react";

const SVGSearchIcon: React.FC = () => {
  return (
    <svg
      className="h-6 w-6 text-neutral-500"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 15.5L19 19M5 11a6 6 0 1012 0 6 6 0 00-12 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SVGSearchIcon;

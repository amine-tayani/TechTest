import * as React from "react";

const Hamburger: React.FunctionComponent = () => {
  return (
    <svg
      width="30"
      height="20"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="4" y1="0.5" x2="20" y2="0.500001" stroke="black" />
      <line y1="5.5" x2="20" y2="5.5" stroke="black" />
      <line x1="12" y1="10.5" x2="20" y2="10.5" stroke="black" />
    </svg>
  );
};

export default Hamburger;

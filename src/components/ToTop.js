import React from "react";
import "../css/toTop.scss";

const ToTop = () => {
  return (
    <abbr title="Back to Top">
      <a href="#back-to-top" id="to-top-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </a>
    </abbr>
  );
};

export default ToTop;

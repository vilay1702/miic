import "../css/toTop.scss";
import React, { useState, useEffect } from "react";

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(true);
  // useEffect(() => {
  //   console.log(window.pageYOffset);
  //   if (window.scrollY > 300) {
  //     setIsVisible(true);
  //   }
  // }, [window.pageYOffset]);

  return (
    <abbr title="Back to Top">
      <button
        onClick={() => window.scrollTo(0, 0)}
        className={isVisible ? "show-btn" : "hide-btn"}
        id="to-top-button"
      >
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
      </button>
    </abbr>
  );
};

export default ToTop;

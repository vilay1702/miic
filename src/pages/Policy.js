import React from "react";
import "../css/policy.scss";
import background from "../images/background.jpeg";

const vision = [
  "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];

const Policy = () => {
  return (
    <>
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>Policy</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            dicta excepturi iusto obcaecati vel eligendi quasi, est esse ullam
            repudiandae.
          </p>

          <h3 onClick={() => window.scrollBy(0, 400)}>&#10093;</h3>
        </div>
      </section>
      <div className="policy">
        <section className="outerDiv">
          <h2>Our Vision</h2>
          <div className="divBody">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              maxime excepturi voluptates minus earum exercitationem vitae
              dolore natus, fugit molestias neque sapiente reiciendis doloribus
              perspiciatis beatae quia est corporis ad, consequuntur quidem
              laborum amet. Sit nulla architecto debitis saepe corrupti ea sunt
              ipsam, sed esse, unde ducimus sequi cupiditate laudantium.
            </p>
          </div>
        </section>
        <section className="outerDiv">
          <h2>Our Mission</h2>
          <div className="divBody">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              maxime excepturi voluptates minus earum exercitationem vitae
              dolore natus, fugit molestias neque sapiente reiciendis doloribus
              perspiciatis beatae quia est corporis ad, consequuntur quidem
              laborum amet. Sit nulla architecto debitis saepe corrupti ea sunt
              ipsam, sed esse, unde ducimus sequi cupiditate laudantium.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Policy;

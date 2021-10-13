import React from "react";
import "../css/header.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { navContents } from "../data";
const Header = () => {
  return (
    <header>
      <nav>
        <div class="logo">
          <img src={logo} alt="" />
          <h1>MIIC</h1>
        </div>
        <ul>
          {navContents.map(({ name, link }, index) => (
            <li key={index}>
              <Link
                className={
                  name.toLowerCase() === "login" ||
                  name.toLowerCase() === "apply"
                    ? "navItems btn"
                    : "navItems"
                }
                to={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div class="carousel">
        <h2>MIIC</h2>
        <p>
          MIIC provides an interactive and safe environment for learning and
          experimenting. A broad network of educators, angel investors and legal
          workers help in easing the process and help Incubatees to focus on
          ideas and work towards its further development. A great pool of
          knowledge to access and a bunch of resources to utilize. We work on
          building a link with business eco-system for a more creative
          result-driven outcome.
        </p>
      </div>
    </header>
  );
};

export default Header;

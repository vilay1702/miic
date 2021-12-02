import React from "react";
import "../css/header.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { navContents } from "../data";
const Header = () => {
  const toggleNav = () => {
    const navToggler = document.querySelectorAll("#nav-toggler>div");
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("toggle-nav-list");
    navToggler[0].classList.toggle("nav-line-one");
    navToggler[1].classList.toggle("nav-line-two");
    navToggler[2].classList.toggle("nav-line-three");
  };
  return (
    <header id="back-to-top">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>MIIC</h1>
        </div>
        <ul>
          {navContents.map(({ name, link }, index) => (
            <li
              onClick={
                window.innerWidth <= "850" ? () => toggleNav() : () => {}
              }
              key={index}
            >
              <Link
                className={
                  name.toLowerCase() === "login" ||
                  name.toLowerCase() === "apply"
                    ? "navItems navItemsBtn"
                    : "navItems"
                }
                to={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div id="nav-toggler" onClick={() => toggleNav()}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className="carousel">
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

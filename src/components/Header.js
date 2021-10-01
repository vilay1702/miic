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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis
          ipsum, velit reiciendis provident cum quas voluptatibus totam maiores
          illum neque vel facilis, fuga voluptates ab porro ut sed labore? Vitae
          quo quos ex quibusdam fugit velit eius suscipit. Ad possimus quis
          quisquam repellat laudantium ipsam deleniti exercitationem, hic
          numquam.
        </p>
      </div>
    </header>
  );
};

export default Header;

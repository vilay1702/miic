import React from "react";
import "../css/footer.scss";
import { Link } from "react-router-dom";
import { navContents } from "../data";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div class="footerAbout">
        <div class="logo">
          <img src={logo} alt="" />
          <h1>MIIC</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          minima voluptatum quibusdam. Hic vero deleniti assumenda et, animi
          perferendis quis!
        </p>
        <div class="socialHandles">
          <a href="#">
            <img src="images/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="images/linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="images/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="images/twitter.png" alt="" />
          </a>
        </div>
      </div>
      <div class="usefulLinks">
        <h4>Useful Links</h4>
        <ul>
          {navContents.map(({ name, link }, index) => (
            <li key={index}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div class="twitterHandle">
        <h4>Our Twitter</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          molestias omnis expedita labore, est quasi?
          <span>3 mins ago</span>
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          molestias omnis expedita labore, est quasi?
          <span>5 mins ago</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

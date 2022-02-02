import React from "react";
import "../css/footer.scss";
import { Link } from "react-router-dom";
import { navContents } from "../data";
import logo from "../images/logo.png";
import InstagramLogo from "../images/instagram.png";
import LinkedinLogo from "../images/linkedin.png";
import FacebookLogo from "../images/facebook.png";
import TwitterLogo from "../images/twitter.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerAbout">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>MIIC</h1>
        </div>
        <p>
          MIIC provides an interactive and safe environment for learning and
          experimenting. A broad network of educators, angel investors and legal
          workers help in easing the process and help Incubatees to focus on
          ideas and work towards its further development
        </p>
        <div className="socialHandles">
          <a href="#">
            <img src={InstagramLogo} alt="" />
          </a>
          <a href="#">
            <img src={LinkedinLogo} alt="" />
          </a>
          <a href="#">
            <img src={FacebookLogo} alt="" />
          </a>
          <a href="#">
            <img src={TwitterLogo} alt="" />
          </a>
        </div>
      </div>
      <div className="usefulLinks">
        <h4>Useful Links</h4>
        <ul>
          {navContents.map(({ name, link }, index) => (
            <li key={index}>
              <Link onClick={() => window.scrollTo(0, 0)} to={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="twitterHandle">
        <h4>Our LinkedIn</h4>
        <p>
          One Day Workshop <br />
          on "Lean canvas" <br />
          Lean Canvas: Capture your business model in a portable one page
          diagram.
          <span>October 2021</span>
        </p>
        <p>
          LAST DATE TO APPLY <br />
          September 14, 2021 (Extended) <br />
          🖥️ Hurry, get yourself registered in the form provided below
          <span>September 2021</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

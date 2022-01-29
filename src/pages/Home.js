import React from "react";
import "../css/home.scss";
import newsBackground from "../images/background.jpeg";
import brandImg from "../images/brand.png";
import image2 from "../images/image2.jpeg";
import { Link } from "react-router-dom";
import mhrd_logo from "../images/mhrd_logo.jpg";
import msme_logo from "../images/msme_logo.jpeg";
import iic_logo from "../images/iic_logo.png";
import aicte_logo from "../images/aicte_logo.png";
import startup1 from "../images/startup1.jpeg";
import startup2 from "../images/startup2.jpeg";
import background from "../images/background.jpeg";

const news = [
  {
    title: "News 1",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis.`,
  },
  {
    title: "News 2",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis.`,
  },
  {
    title: "News 3",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis.`,
  },
  {
    title: "News 4",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis.`,
  },
  {
    title: "News 5",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis.`,
  },
  {
    title: "News 6",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis.`,
  },
];

const partners = [
  {
    img: aicte_logo,
    title: "AICTE",
  },
  {
    img: iic_logo,
    title: "IIC",
  },
  {
    img: mhrd_logo,
    title: "MHRD",
  },
  {
    img: msme_logo,
    title: "MSME",
  },
];

const startups = [
  {
    img: startup1,
    title: "",
  },
  {
    img: startup2,
    title: "",
  },
];

const Home = () => {
  return (
    <main>
      {/* Intro */}
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>Welcome to MIIC</h1>
          <h2>Medi-Caps Innovation and Incubation Center</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            dicta excepturi iusto obcaecati vel eligendi quasi, est esse ullam
            repudiandae.
          </p>

          <button className="btn">Apply Now</button>
          <h3 onClick={() => window.scrollBy(0, 400)}>&#10093;</h3>
        </div>
      </section>
      {/* About us  */}
      <section className="outer-container">
        <section className="inner-container">
          <div className="img-container">
            <h2>About us</h2>
            <img src={image2} alt="" />
          </div>
          <div className="card-container">
            <p>
              Medi-Caps Innovation and Incubation Center (MIIC) enables
              start-ups for a successful exit from the incubator by assisting in
              external fund-raising, custom acquisition, etc. Leverage R&D
              infrastructure to create technology and innovation-based start-up
              companies.
            </p>
            <p className="highlightPara">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique consequatur doloribus ex, recusandae doloremque quisquam
              culpa molestiae adipisci hic velit, odio ipsa nostrum. Saepe
              repellat porro, quis autem distinctio fugit fuga explicabo
              obcaecati cupiditate cum nobis libero, rem, sed rerum corporis!
              Reiciendis ratione, hic recusandae perspiciatis inventore id
              minima aliquam?
            </p>
            <Link to="/miic/about" className="btn">
              ABOUT US
            </Link>
          </div>
        </section>
      </section>

      {/* ============== Partners ============== */}
      <section className="home-partners">
        <div className="home-brands">
          {partners.map(({ img, title }, index) => (
            <div>
              <img key={index} src={img} alt={img} />
              <p>{title}</p>
            </div>
          ))}
        </div>
        <div className="home-partners-info">
          <h2>Our partners</h2>
          <p>
            Our people share their insights on implementing your innovative idea
            to the real world.
          </p>
        </div>
      </section>

      {/* ============== Vision ============== */}
      <section className="outer-container">
        <section className="inner-container inner-container-reverse">
          <div className="img-container">
            <h2>Our Vision</h2>
            <img src={image2} alt="" />
          </div>
          <div className="card-container">
            <p>
              Medi-Caps Innovation and Incubation Center (MIIC), aims to create
              a conducive environment for nurturing entrepreneurship and to
              provide an eco-system that fosters and supports innovation, new
              ideas and young talents catalyzing the entrepreneurship through
              various interventions and initiatives amongst classes and
              communities.
            </p>
            <p className="highlightPara">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique consequatur doloribus ex, recusandae doloremque quisquam
              culpa molestiae adipisci hic velit, odio ipsa nostrum. Saepe
              repellat porro, quis autem distinctio fugit fuga explicabo
              obcaecati cupiditate cum nobis libero, rem, sed rerum corporis!
              Reiciendis ratione, hic recusandae perspiciatis inventore id
              minima aliquam?
            </p>
            <Link to="/miic/about" className="btn">
              POLICY
            </Link>
          </div>
        </section>
      </section>
      {/* ============== Startups ============== */}
      <section className="home-partners">
        <div className="home-brands">
          {startups.map(({ img, title }, index) => (
            <div>
              <img key={index} src={img} alt={img} />
              {/* <p>{title}</p> */}
            </div>
          ))}
        </div>
        <div className="home-partners-info">
          <h2>Our Startups</h2>
          <p>
            Our people share their insights on implementing your innovative idea
            to the real world.
          </p>
        </div>
      </section>
      {/* ============== Mission ============== */}
      <section className="outer-container">
        <section className="inner-container">
          <div className="img-container">
            <h2>Our Mission</h2>
            <img src={image2} alt="" />
          </div>
          <div className="card-container">
            <p>
              Establishing profound entrepreneurs with leadership qualities and
              capabilities of showcasing global ethical business practices for
              the benefit of the society. Developing flexible and innovative
              programmes and procedures that cater to a broad range of students
              with different background and prepare them to compete at the
              national and international levels as entrepreneurs
            </p>
            <p className="highlightPara">
              Transmitting knowledge through a well thought teaching pedagogy
              and putting a strong emphasis on knowledge creation through
              well-planned training programmes in emerging areas and application
              of knowledge by undertaking issues and problems from the industry.
              Encouraging innovators and their ideas, which lead to commercially
              viable products and/or services and pave the path for potential
              business ideas to convert into startup/venture and reach to the
              market. Creating awareness among the students and help society to
              come up with new solutions to existing problem
            </p>
            <Link to="/miic/about" className="btn">
              POLICY
            </Link>
          </div>
        </section>
      </section>

      {/* ============== News ============== */}
      <section className="home-news-section">
        <h1>News</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio!
        </p>
        <div className="home-news">
          {news.map(({ title, desc }, index) => {
            return (
              <div key={index} className="home-news-card">
                <img src={newsBackground} alt="" />
                <div>
                  <h3>{title}</h3>
                  <span>{desc}</span>
                </div>
              </div>
            );
          })}
        </div>
        <a href="#" className="btn">
          Load More
        </a>
      </section>

      {/* ============== Inquiry ============== */}
      <section className="inquiry-outer-container">
        <section className="inquiry-inner-container">
          <div className="inquiry-card-container">
            <p>
              For any ideas, innovations or queries, feel free to contact us.
              We'd love to connect with you and help you mould your ideas into
              successful products.
            </p>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
          <div className="inquiry-form-container">
            <h2>Inquiry</h2>
            <form action="#">
              <label htmlFor="name">Your Full name</label>
              <input type="text" id="nameInput" name="name" />
              <label htmlFor="email">Your Email address</label>
              <input type="email" id="emailInput" name="email" />
              <label htmlFor="inquiry">Your Inquiry</label>
              <textarea
                name="inquiry"
                id="inquiryInput"
                cols="30"
                rows="10"
              ></textarea>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;

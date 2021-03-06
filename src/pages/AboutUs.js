import React from "react";
import { Link } from "react-router-dom";
import "../css/aboutUs.scss";
import brand from "../images/brand.png";
import { Grid } from "@material-ui/core";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import brandImg from "../images/brand.png";
import background from "../images/background.jpeg";
import ImageSlider from "../components/Carousel";
import { sliderData } from "../sliderData";

const miicMembers = [
  { img: brandImg, name: "Name", designation: "Designation" },
  { img: brandImg, name: "Name", designation: "Designation" },
  { img: brandImg, name: "Name", designation: "Designation" },
  { img: brandImg, name: "Name", designation: "Designation" },
  { img: brandImg, name: "Name", designation: "Designation" },
  { img: brandImg, name: "Name", designation: "Designation" },
  { img: brandImg, name: "Name", designation: "Designation" },
  { img: brandImg, name: "Name", designation: "Designation" },
  { img: brandImg, name: "Name", designation: "Designation" },
];

const AboutUs = () => {
  return (
    <main>
      {/* Intro */}
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>About Us</h1>
          <p>
            When it comes to innovation, an ounce of execution is worth more
            than a ton of theory
          </p>

          <h3 onClick={() => window.scrollBy(0, 400)}>&#10093;</h3>
        </div>
      </section>

      {/* Who are we  */}
      <div className="aboutus-heading">
        <h1>Who are we</h1>
      </div>
      <section className="outer-container outer-container-about">
        <section className="inner-container inner-container-about">
          <div className="img-container">
            <img src={image2} alt="" />
          </div>
          <div className="card-container">
            <p className="highlightPara">
              Medicaps innovation and Incubation centre ( MIIC ). aims to create
              a conductive environment for inhancing entrepreneurship among
              young aspiring entripsenuss , and with a mission to provide an eco
              - system that supports and encourage innovation , new ideas of
              young talents catalyzing the entrepreneurship and innovation
              through various modes of initiatives amongst classes. seminars and
              communities
              <br />
              We also focus on establishing profound entrepreneurs with
              leadership qualities and capabilities of showcasing global ethical
              business practices for benefit of socity . we win show the light
              on developing flexible and innovative programones and procedures
              that
              <br />
              includes a broad category of students with different backgrounds
              and prepare them to compete at national and international levels
              as entrepreneurs.
            </p>
          </div>
        </section>
      </section>

      <div className="aboutus-heading ">
        <h1>ABOUT MEDICAPS</h1>
      </div>
      <section className="outer-container outer-container-about">
        <section className="inner-container inner-container-about inner-container-reverse">
          <div className="img-container">
            {/* <h2>Our Vision</h2> */}
            <img src={image1} alt="" />
          </div>
          <div className="card-container">
            <p className="highlightPara">
              Medi-Caps has been a brand name in the arena of technical
              education. Since its inception in July 2000, Medi-Caps has
              consistently aimed at creating an ideal ambiance for budding
              technocrats and managers; and helping them to grow like true
              professionals. With its highly qualified faculty there seems an
              optimal blend of academic brilliance and industry exposure,
              supplemented by highly specialized visiting faculty and industry
              experts, senior professionals from various segments of different
              industries and business houses. It was time now to spread wings
              and move out for more exposure and widening of the periphery.
              <br />
              <br />
              Hence the foundation of Medi-Caps University has been laid down.
              With a strong foundation of the Group since 15 years, Medi-Caps
              University wishes to maintain the same objective of imparting
              quality education and producing sound professionals for the
              benefit of the society at large.
            </p>
          </div>
        </section>
      </section>
      <hr className="blank"></hr>
      <div className="mentors-heading">
        <h1>MEMBERS OF MIIC</h1>
      </div>

      <section className="mentors-outer">
        <div className="mentors">
          {miicMembers.map(({ name, img, designation }, index) => {
            return (
              <div className="mentor">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{designation}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* <section className="inquiry-outer-container">
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
            <h2>Donate</h2>
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
      </section> */}

      <div className="aboutus-heading ">
        <h1>GALLERY</h1>
      </div>
      {/* <div className="backimage"></div> */}
      <div>
        <ImageSlider slides={sliderData} />
      </div>

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
            <h2>Contact Us</h2>
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
      <hr className="blank"></hr>
    </main>
  );
};

export default AboutUs;

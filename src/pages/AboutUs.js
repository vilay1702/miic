import React from "react";
import { Link } from "react-router-dom";
import "../css/aboutUs.scss";
import brand from "../images/brand.png";
import { Grid } from "@material-ui/core";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import brandImg from "../images/brand.png";

const AboutUs = () => {
  return (
    <main>
      <div className="block">
        <h1>Who we are</h1>
      </div>
      <section className="outer-container outer-container-about">
        <section className="inner-container inner-container-about">
          <div className="img-container">
            <h2>About us</h2>
            <img src={image2} alt="" />
          </div>
          <div className="card-container">
            <p className="highlightPara">
              Medi-Caps Innovation and Incubation Center (MIIC) enables
              start-ups for a successful exit from the incubator by assisting in
              external fund-raising, custom acquisition, etc. Leverage R&D
              infrastructure to create technology and innovation-based start-up
              companies.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique consequatur doloribus ex, recusandae doloremque quisquam
              culpa molestiae adipisci hic velit, odio ipsa nostrum. Saepe
              repellat porro, quis autem distinctio fugit fuga explicabo
              obcaecati cupiditate cum nobis libero, rem, sed rerum corporis!
              Reiciendis ratione, hic recusandae perspiciatis inventore id
              minima aliquam?
            </p>
          </div>
        </section>
      </section>

      <div className="block">
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
      <div className="block">
        <h1>BOARD MEMBERS</h1>
      </div>

      <section className="news">
        <Grid container spacing={2}>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>

      <div className="block">
        <h1>LEADERSHIP TEAM</h1>
      </div>

      <section className="news">
        <Grid container spacing={2}>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div className="newsCard">
              <img src={brandImg} alt="" />
              <div>
                <h3>Name</h3>
                <span>Designation</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>

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
      </section>

      <div className="block">
        <h1>GALLERY</h1>
      </div>
      <div className="backimage"></div>

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

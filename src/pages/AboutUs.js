import React from "react";
import { Link } from "react-router-dom";
import "../css/aboutUs.scss";
import brand from "../images/brand.png";
import { Grid } from "@material-ui/core";
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

      <div className="block">
        <h1>ABOUT MEDICAPS</h1>
      </div>
      <section className="outer-container outer-container-about">
        <section className="inner-container inner-container-about inner-container-reverse">
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
              <label for="name">Your Full name</label>
              <input type="text" id="nameInput" name="name" />
              <label for="email">Your Email address</label>
              <input type="email" id="emailInput" name="email" />
              <label for="inquiry">Your Inquiry</label>
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
              <label for="name">Your Full name</label>
              <input type="text" id="nameInput" name="name" />
              <label for="email">Your Email address</label>
              <input type="email" id="emailInput" name="email" />
              <label for="inquiry">Your Inquiry</label>
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

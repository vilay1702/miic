import React from "react";
import "../css/home.scss";
import newsBackground from "../images/background.jpeg";
import brandImg from "../images/brand.png";
import image2 from "../images/image2.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
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
            <p class="highlightPara">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique consequatur doloribus ex, recusandae doloremque quisquam
              culpa molestiae adipisci hic velit, odio ipsa nostrum. Saepe
              repellat porro, quis autem distinctio fugit fuga explicabo
              obcaecati cupiditate cum nobis libero, rem, sed rerum corporis!
              Reiciendis ratione, hic recusandae perspiciatis inventore id
              minima aliquam?
            </p>
            <Link to="/miic/about" class="btn">
              ABOUT US
            </Link>
          </div>
        </section>
      </section>

      <section class="partner">
        <div class="brands">
          {Array(10)
            .fill()
            .map(() => (
              <img src={brandImg} alt={brandImg} />
            ))}
        </div>
        <div class="partnerInfo">
          <h2>Our partners</h2>
          <p>
            Our people share their insights on implementing your innovative idea
            to the real world.
          </p>
        </div>
      </section>

      <section className="outer-container">
        <section className="inner-container inner-container-reverse">
          <div className="img-container">
            <h2>Our Vision</h2>
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
            <p class="highlightPara">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique consequatur doloribus ex, recusandae doloremque quisquam
              culpa molestiae adipisci hic velit, odio ipsa nostrum. Saepe
              repellat porro, quis autem distinctio fugit fuga explicabo
              obcaecati cupiditate cum nobis libero, rem, sed rerum corporis!
              Reiciendis ratione, hic recusandae perspiciatis inventore id
              minima aliquam?
            </p>
            <Link to="/miic/about" class="btn">
              POLICY
            </Link>
          </div>
        </section>
      </section>
      <section className="outer-container">
        <section className="inner-container">
          <div className="img-container">
            <h2>Our Mission</h2>
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
            <p class="highlightPara">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique consequatur doloribus ex, recusandae doloremque quisquam
              culpa molestiae adipisci hic velit, odio ipsa nostrum. Saepe
              repellat porro, quis autem distinctio fugit fuga explicabo
              obcaecati cupiditate cum nobis libero, rem, sed rerum corporis!
              Reiciendis ratione, hic recusandae perspiciatis inventore id
              minima aliquam?
            </p>
            <Link to="/miic/about" class="btn">
              POLICY
            </Link>
          </div>
        </section>
      </section>

      <section className="home-news-section">
        <h1>News</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio!
        </p>
        <div className="home-news">
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="home-news-card">
                  <img src={newsBackground} alt="" />
                  <div>
                    <h3>News</h3>
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore, perspiciatis.
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <a href="#" class="btn">
          Load More
        </a>
      </section>

      <section className="inquiry-outer-container">
        <section className="inquiry-inner-container">
          <div className="inquiry-card-container">
            <h2>Inquiry</h2>
            <form action="#" id="inquiryForm">
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
          <div className="inquiry-form-container">
            <p>
              For any ideas, innovations or queries, feel free to contact us.
              We'd love to connect with you and help you mould your ideas into
              successful products.
            </p>
            <button type="submit" class="btn" id="submitInquiry">
              Submit
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;

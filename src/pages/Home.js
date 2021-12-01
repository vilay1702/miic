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

      <section className="home-partners">
        <div className="home-brands">
          {Array(10)
            .fill()
            .map(() => (
              <img src={brandImg} alt={brandImg} />
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
        <a href="#" className="btn">
          Load More
        </a>
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
            <h2>Inquiry</h2>
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
    </main>
  );
};

export default Home;

import React from "react";
import "../css/aboutUs.scss";
import brand from "../images/brand.png";
import image2 from "../images/image2.jpeg";
import image1 from "../images/image1.jpeg";

const AboutUs = () => {
  return (
    <main>
      <div className="block">
        <h1>WHO WE ARE</h1>
      </div>
      <hr className="blank"></hr>
      <section className="containerL">
        <div className="imgContainer">
          <img src={image2} alt="" />
        </div>
        <div className="cardContainer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem animi rem, tenetur impedit, a ab ipsum architecto amet, non
            saepe quod recusandae nostrum! Voluptas reprehenderit quod eligendi
            sed dolorem laboriosam nihil eveniet dolores optio architecto labore
            cupiditate veniam, atque deleniti, debitis rerum ipsum provident
            temporibus eaque accusantium placeat et.
          </p>
          <p className="highlightPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            consequatur doloribus ex, recusandae doloremque quisquam culpa
            molestiae adipisci hic velit, odio ipsa nostrum. Saepe repellat
            porro, quis autem distinctio fugit fuga explicabo obcaecati
            cupiditate cum nobis libero, rem, sed rerum corporis! Reiciendis
            ratione, hic recusandae perspiciatis inventore id minima aliquam?
          </p>
        </div>
      </section>
      <hr className="blank"></hr>
      <div className="block">
        <h1>ABOUT MEDICAPS</h1>
      </div>
      <hr className="blank"></hr>
      <section className="containerL">
        <div className="imgContainer imgContainerReverse">
          <h2>Funding</h2>
          <img src={image2} alt="" />
        </div>
        <div className="cardContainer cardContainerReverse">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem animi rem, tenetur impedit, a ab ipsum architecto amet, non
            saepe quod recusandae nostrum! Voluptas reprehenderit quod eligendi
            sed dolorem laboriosam nihil eveniet dolores optio architecto labore
            cupiditate veniam, atque deleniti, debitis rerum ipsum provident
            temporibus eaque accusantium placeat et.
          </p>
          <p className="highlightPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            consequatur doloribus ex, recusandae doloremque quisquam culpa
            molestiae adipisci hic velit, odio ipsa nostrum. Saepe repellat
            porro, quis autem distinctio fugit fuga explicabo obcaecati
            cupiditate cum nobis libero, rem, sed rerum corporis! Reiciendis
            ratione, hic recusandae perspiciatis inventore id minima aliquam?
          </p>
        </div>
      </section>
      <hr className="blank"></hr>
      <div className="block">
        <h1>BOARD MEMBERS</h1>
      </div>
      <section className="news red">
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="newsCard">
                  <img src={brand} alt="" />
                  <div>
                    <h3>Name</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <div className="block">
        <h1>LEADERSHIP TEAM</h1>
      </div>
      <section className="news red">
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="newsCard">
                  <img src={brand} alt="" />
                  <div>
                    <h3>Name</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <hr className="blank"></hr>
      <section class="containerL">
        <div class="imgContainer imgContainerReverse inquiry donate green ">
          <h2>Donate</h2>
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
        <div class="cardContainer cardContainerReverse">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            quisquam voluptas aliquid architecto sequi minima rem asperiores
            pariatur ad adipisci illum illo, quas, harum dolorum dolores
            officiis iusto numquam eligendi veniam unde perspiciatis! At,
            consequuntur! Cupiditate facilis, repellat, amet veritatis dolore
            ipsa commodi corrupti deleniti explicabo fugiat, accusantium sunt
            quis?
          </p>
          <button type="submit" class="btn" id="submitInquiry">
            Pay
          </button>
        </div>
      </section>
      <hr className="blank"></hr>
      <div className="block">
        <h1>GALLERY</h1>
      </div>
      <div class="backimage"></div>
      <hr className="blank"></hr>
      <section class="containerL">
        <div class="imgContainer imgContainerReverse inquiry contact red">
          <h2>Contact Us</h2>
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
        <div class="cardContainer cardContainerReverse">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            quisquam voluptas aliquid architecto sequi minima rem asperiores
            pariatur ad adipisci illum illo, quas, harum dolorum dolores
            officiis iusto numquam eligendi veniam unde perspiciatis! At,
            consequuntur! Cupiditate facilis, repellat, amet veritatis dolore
            ipsa commodi corrupti deleniti explicabo fugiat, accusantium sunt
            quis?
          </p>
          <button type="submit" class="btn" id="submitInquiry">
            Contact
          </button>
        </div>
      </section>
      <hr className="blank"></hr>
    </main>
  );
};

export default AboutUs;

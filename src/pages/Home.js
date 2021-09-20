import React from "react";
import "../css/home.scss";
import newsBackground from "../images/background.jpeg";
import brandImg from "../images/brand.png";
import image2 from "../images/image2.jpeg";

const Home = () => {
  return (
    <main>
      <section class="containerM">
        <p class="sideContentLeft">MIIC</p>
        <div class="containerL">
          <div class="imgContainer">
            <h2>About Us</h2>
            <img src={image2} alt="" />
          </div>
          <div class="cardContainer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quidem animi rem, tenetur impedit, a ab ipsum architecto amet, non
              saepe quod recusandae nostrum! Voluptas reprehenderit quod
              eligendi sed dolorem laboriosam nihil eveniet dolores optio
              architecto labore cupiditate veniam, atque deleniti, debitis rerum
              ipsum provident temporibus eaque accusantium placeat et.
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
            <a href="#" class="btn">
              ABOUT US
            </a>
          </div>
        </div>
        <p class="sideContentRight">ABOUT</p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            praesentium laboriosam ducimus, impedit quo vitae nihil repellat id
            enim veritatis laudantium porro neque nostrum cupiditate quibusdam
            adipisci eveniet quia error.
          </p>
        </div>
      </section>
      <section class="containerL">
        <div class="imgContainer imgContainerReverse">
          <h2>Our Vision</h2>
          <img src={image2} alt="" />
        </div>
        <div class="cardContainer cardContainerReverse">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem animi rem, tenetur impedit, a ab ipsum architecto amet, non
            saepe quod recusandae nostrum! Voluptas reprehenderit quod eligendi
            sed dolorem laboriosam nihil eveniet dolores optio architecto labore
            cupiditate veniam, atque deleniti, debitis rerum ipsum provident
            temporibus eaque accusantium placeat et.
          </p>
          <p class="highlightPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            consequatur doloribus ex, recusandae doloremque quisquam culpa
            molestiae adipisci hic velit, odio ipsa nostrum. Saepe repellat
            porro, quis autem distinctio fugit fuga explicabo obcaecati
            cupiditate cum nobis libero, rem, sed rerum corporis! Reiciendis
            ratione, hic recusandae perspiciatis inventore id minima aliquam?
          </p>
          <a href="#" class="btn">
            Policy
          </a>
        </div>
      </section>
      <section class="containerL">
        <div class="imgContainer">
          <h2>Our Mission</h2>
          <img src={image2} alt="" />
        </div>
        <div class="cardContainer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem animi rem, tenetur impedit, a ab ipsum architecto amet, non
            saepe quod recusandae nostrum! Voluptas reprehenderit quod eligendi
            sed dolorem laboriosam nihil eveniet dolores optio architecto labore
            cupiditate veniam, atque deleniti, debitis rerum ipsum provident
            temporibus eaque accusantium placeat et.
          </p>
          <p class="highlightPara">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            consequatur doloribus ex, recusandae doloremque quisquam culpa
            molestiae adipisci hic velit, odio ipsa nostrum. Saepe repellat
            porro, quis autem distinctio fugit fuga explicabo obcaecati
            cupiditate cum nobis libero, rem, sed rerum corporis! Reiciendis
            ratione, hic recusandae perspiciatis inventore id minima aliquam?
          </p>
          <a href="#" class="btn">
            Policy
          </a>
        </div>
      </section>
      <section class="news">
        <h1>News</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio!
        </p>
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div class="newsCard">
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

      <section class="containerL">
        <div class="imgContainer imgContainerReverse inquiry">
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
            Submit
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;

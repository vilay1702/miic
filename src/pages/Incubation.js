import React from "react";
import "../css/incubation.scss";
// import build from "../images/build.png";
import build from "../images/brand.png";
import image1 from "../images/image1.jpeg";

const Incubation = () => {
  return (
    <main>
      <div className="block">
        <h1>Facilities</h1>
      </div>

      <section className="news red">
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="newsCard">
                  <img src={build} alt="" />
                  <div>
                    <h3>Name</h3>
                  </div>
                </div>
              );
            })}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis consequuntur necessitatibus ducimus facilis
          amet itaque autem debitis dignissimos voluptatum odio! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Corporis consequuntur
          necessitatibus ducimus facilis amet itaque autem debitis dignissimos
          voluptatum odio!
        </p>
      </section>

      <div className="block">
        <h1>Services</h1>
      </div>

      <section className="news green">
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="newsCard">
                  <img src={build} alt="" />
                  <div className="green">
                    <h3>Name</h3>
                  </div>
                </div>
              );
            })}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis consequuntur necessitatibus ducimus facilis
          amet itaque autem debitis dignissimos voluptatum odio! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Corporis consequuntur
          necessitatibus ducimus facilis amet itaque autem debitis dignissimos
          voluptatum odio!
        </p>
      </section>

      <div className="block">
        <h1>Resources</h1>
      </div>
      <section className="news red">
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="newsCard">
                  <img src={build} alt="" />
                  <div>
                    <h3>Name</h3>
                  </div>
                </div>
              );
            })}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis consequuntur necessitatibus ducimus facilis
          amet itaque autem debitis dignissimos voluptatum odio! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Corporis consequuntur
          necessitatibus ducimus facilis amet itaque autem debitis dignissimos
          voluptatum odio!
        </p>
      </section>

      <div className="block">
        <h1>Eligibility</h1>
      </div>

      <section className="containerL">
        <div className="imgContainer imgContainerReverse">
          <h2>Eligibility</h2>
          <p className="redpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem animi rem, tenetur impedit, a ab ipsum architecto amet
          </p>
          <p className="redpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem animi rem, tenetur impedit, a ab ipsum architecto amet
          </p>
          <p className="redpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem animi rem, tenetur impedit, a ab ipsum architecto amet
          </p>
          <p className="redpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem animi rem, tenetur impedit, a ab ipsum architecto amet
          </p>
        </div>
        <div className="cardContainer cardContainerReverse">
          <h2 class="yellow">Eligibility</h2>
          <ol>
            <li>Loremipsum</li>
            <li>ipsumconsectetur</li>
            <li>consecteturadipisici</li>
            <li>adipisicing</li>
            <li>elit</li>
          </ol>
        </div>
        <hr className="blank"></hr>
      </section>

      <div className="paracontainer">
        <p className="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          delectus, dolore quidem perspiciatis assumenda molestiae et velit,
          expedita officiis aut dolor fugiat maxime commodi cupiditate ea
          suscipit sit natus. Vitae! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Repellat quisquam aspernatur obcaecati eos cum nisi.
          Quod in iure praesentium architecto, id aliquam eveniet voluptatem,
          magni quos quas beatae assumenda quam? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Tempora delectus, dolore quidem
          perspiciatis assumenda molestiae et velit, expedita officiis aut dolor
          fugiat maxime commodi cupiditate ea suscipit sit natus. Vitae! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Repellat quisquam
          aspernatur obcaecati eos cum nisi. Quod in iure praesentium
          architecto, id aliquam eveniet voluptatem, magni quos quas beatae
          assumenda quam?
        </p>
      </div>

      <div className="block">
        <h1>Services</h1>
      </div>

      <div className="imageContainer">
        <div class="applyButton">
          <a href="#" className="btn btn-warning">
            Apply
          </a>
        </div>
      </div>
    </main>
  );
};

export default Incubation;

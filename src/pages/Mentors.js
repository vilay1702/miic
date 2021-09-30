import React from "react";
import "../css/mentors.scss";
import brandImg from "../images/brand.png";

const Mentors = () => {
  return (
    <main>
      <div className="block">
        <h1>CORE MENTORS</h1>
      </div>
      <section className="news red">
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="newsCard">
                  <img src={brandImg} alt="" />
                  <div>
                    <h3>Name</h3>
                    <span>Designation</span>
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
        <h1>EXTERNAL MENTORS</h1>
      </div>

      <section className="news green">
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="newsCard">
                  <img src={brandImg} alt="" />
                  <div className="green">
                    <h3>Name</h3>
                    <span>Designation</span>
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
        <h1>FACULTY MENTORS</h1>
      </div>
      <section className="news red">
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="newsCard">
                  <img src={brandImg} alt="" />
                  <div>
                    <h3>Name</h3>
                    <span>Designation</span>
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
        <h1>TEAM MENTORS</h1>
      </div>
      <section className="news green">
        <div>
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="newsCard">
                  <img src={brandImg} alt="" />
                  <div className="green">
                    <h3>Name</h3>
                    <span>Designation</span>
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
    </main>
  );
};

export default Mentors;

import React from "react";
import { Grid } from "@material-ui/core";
import "../css/mentors.scss";
import brandImg from "../images/brand.png";

const coreMentors = [
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
const facultyMentors = [
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
const teamMentors = [
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
const externalMentors = [
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

const Mentors = () => {
  return (
    <main>
      <div className="mentors-heading">
        <h1>CORE MENTORS</h1>
      </div>

      <section className="mentors-outer">
        <div className="mentors">
          {coreMentors.map(({ name, img, designation }, index) => {
            return (
              <div className="mentor">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{designation}</p>
              </div>
            );
          })}
        </div>
        <p className="mentor-txt">
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

      <div className="mentors-heading">
        <h1>EXTERNAL MENTORS</h1>
      </div>

      <section className="mentors-outer">
        <div className="mentors">
          {externalMentors.map(({ name, img, designation }, index) => {
            return (
              <div className="mentor">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{designation}</p>
              </div>
            );
          })}
        </div>
        <p className="mentor-txt">
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

      <div className="mentors-heading">
        <h1>FACULTY MENTORS</h1>
      </div>

      <section className="mentors-outer">
        <div className="mentors">
          {facultyMentors.map(({ name, img, designation }, index) => {
            return (
              <div className="mentor">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{designation}</p>
              </div>
            );
          })}
        </div>
        <p className="mentor-txt">
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

      <div className="mentors-heading">
        <h1>TEAM MENTORS</h1>
      </div>

      <section className="mentors-outer">
        <div className="mentors">
          {teamMentors.map(({ name, img, designation }, index) => {
            return (
              <div className="mentor">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{designation}</p>
              </div>
            );
          })}
        </div>
        <p className="mentor-txt">
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

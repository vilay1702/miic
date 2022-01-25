import React from "react";
import { Grid } from "@material-ui/core";
import "../css/mentors.scss";
import brandImg from "../images/brand.png";
import avatar from "../images/avatar.png";
import background from "../images/background.jpeg";

const coreMentors = [
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
];
const facultyMentors = [
  { img: avatar, name: "Dr. Sarita Kansal", designation: "Designation" },
  { img: avatar, name: "Prof. Ram Janm Singh", designation: "Designation" },
  { img: avatar, name: "Prof Sanjay Jathar", designation: "Designation" },
  { img: avatar, name: "Dr. Anjali Soni", designation: "Designation" },
  { img: avatar, name: "Dr. Ravindra Pathak", designation: "Designation" },
  { img: avatar, name: "Prof Poorva Kakani", designation: "Designation" },
  { img: avatar, name: "Prof Preeti yadav", designation: "Designation" },
  { img: avatar, name: "Prof Devendra Singh Bais", designation: "Designation" },
  { img: avatar, name: "Prof Sagar Pandya", designation: "Designation" },
  { img: avatar, name: "Prof Neha Toshniwal", designation: "Designation" },
  { img: avatar, name: "Prof Ajay Sinha", designation: "Designation" },
  { img: avatar, name: "Dr. Veena Rathore", designation: "Designation" },
  { img: avatar, name: "Prof Hemant Malviya", designation: "Designation" },
  { img: avatar, name: "Ms. Asha Rani Pyati", designation: "Designation" },
];
const teamMentors = [
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
];
const externalMentors = [
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
  { img: avatar, name: "Name", designation: "Designation" },
];

const Mentors = () => {
  return (
    <main>
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>Mentors</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            dicta excepturi iusto obcaecati vel eligendi quasi, est esse ullam
            repudiandae.
          </p>

          <h3 onClick={() => window.scrollBy(0, 400)}>&#10093;</h3>
        </div>
      </section>
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

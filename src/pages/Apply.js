import React from "react";
import { Link } from "react-router-dom";
import "../css/apply.scss";
import image2 from "../images/image2.jpeg";
import background from "../images/background.jpeg";

const Apply = () => {
  return (
    <>
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>Apply</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            dicta excepturi iusto obcaecati vel eligendi quasi, est esse ullam
            repudiandae.
          </p>

          <h3 onClick={() => window.scrollBy(0, 400)}>&#10093;</h3>
        </div>
      </section>
      <main className="apply-outer">
        <section className="outer-container">
          <section className="inner-container">
            <div className="img-container">
              <h2>Startup</h2>
              <img src={image2} alt="" />
            </div>
            <div className="card-container">
              <p>
                Medicaps Innovation and Incubation Centrer is currently having
                on going 4 start ups. [ Elarm, Deal Delight, Agro network, Rent
                Mitro ]. We encourage our students to who are intrested to in
                shaping or starting their start up by giving them right guidance
                and support.
              </p>
              <p className="highlightPara">
                Along with giving them a proper insight about how documentation
                , tax exemptions, fundings work , we also provide ous students
                the start up workable experience and environment, which will
                build their capability to show this work potential out in the
                world.
              </p>
              <Link to="/miic/about" className="btn">
                APPLY
              </Link>
            </div>
          </section>
        </section>
        <section className="outer-container">
          <section className="inner-container inner-container-reverse">
            <div className="img-container">
              <h2>Funding</h2>
              <img src={image2} alt="" />
            </div>
            <div className="card-container">
              <p>
                " An entreprenus without finding is a musician without an
                instrument" MIIC ( Medicans Innovation and Inculation centre )
                believes in supporting and training our innovators so that they
                are fit for getting funded rightly .
              </p>
              <p className="highlightPara">
                We have ate up with various government esteemed organisations
                which look forward to jund the new upcoming innovators, their
                innovations making the life eascis and bettes, we also have with
                us some government organisations providing funding to our
                innovators helping them taking their innovation
              </p>
              <Link to="/miic/about" className="btn">
                APPLY
              </Link>
            </div>
          </section>
        </section>
        <section className="outer-container">
          <section className="inner-container">
            <div className="img-container">
              <h2>Resources</h2>
              <img src={image2} alt="" />
            </div>
            <div className="card-container">
              <p>
                We believe that our innovators and entrepreneurs and their ideas
                should not be caged because of most common excuse i. e . lack of
                resources. MIIC believes in giving their students a true
                exposure of all the needed resource so that this innovation is
                not hindered
              </p>
              <p className="highlightPara">
                MIIC provides them with the innovation labs, along with access
                to laboratories where in they can perform and execute their
                ideas turning into big innovations. we also provide them the
                adequate environment so that they can concentrately focus on
                their work. Every idea needs to be tested first and executed
                later, we theyore keeping this in mind also give one students
                facilities tof prototyping and testing
              </p>
              <Link to="/miic/about" className="btn">
                APPLY
              </Link>
            </div>
          </section>
        </section>
        <section className="outer-container">
          <section className="inner-container inner-container-reverse">
            <div className="img-container">
              <h2>Mentorship</h2>
              <img src={image2} alt="" />
            </div>
            <div className="card-container">
              <p>
                Mentoring is a brain to pick, ear to listen and push in right
                direction. we believe in mentoring our students with a vision to
                see them achieving great heights and successful becoming
                successful in their respective fields.
              </p>
              <p className="highlightPara">
                We the Medicaps Innovation and Incubation centre belives in one
                to one mentoring our students, showing them the correct path to
                walk on. Providing mentorship also helps our students in
                empowering personal development, along with a complete guideance
                at each and every step they take towards their bright future .
              </p>
              <Link to="/miic/about" className="btn">
                APPLY
              </Link>
            </div>
          </section>
        </section>
        <section className="outer-container">
          <section className="inner-container">
            <div className="img-container">
              <h2>Investor</h2>
              <img src={image2} alt="" />
            </div>
            <div className="card-container">
              <p>
                Just like the salt plays an Important role in food similarly
                investors play an important role in success and growth of
                company , idea or start - up. At initial times usually investors
                lack off due to looking only at the law idea , they usually deny
                to invest in simply the idea.
              </p>
              <p className="highlightPara">
                But we the Medicops Innovation and Incubation centre have Angle
                investors with us with which we can discuss the respective idea
                and even leave them unconcerned about the financial barring .
              </p>
              <Link to="/miic/about" className="btn">
                APPLY
              </Link>
            </div>
          </section>
        </section>
        <section className="outer-container ">
          <section className="inner-container inner-container-reverse">
            <div className="img-container">
              <h2>Internship</h2>
              <img src={image2} alt="" />
            </div>
            <div className="card-container">
              <p>
                Transmitting knowledge through a will thought teaching pedagogy
                and putting a strong emphasis on more of practical knowledge
                along with real life success achivers workshops giving our
                students an aim to come out as a strong and shining
                entreprenurs.
              </p>
              <p className="highlightPara">
                Faciliting our students with well structured training programnes
                in emerging areas and application of knowledge by undertaking
                issues and problems faced from the industry. Also providing them
                the opportunity to be a part of industrial internship programmes
                and giving them a real idea of to how industrus work and how
                they can contribute to it.
              </p>
              <Link to="/miic/about" className="btn">
                APPLY
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Apply;

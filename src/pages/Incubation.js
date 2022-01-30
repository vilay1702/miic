import React from "react";
import "../css/incubation.scss";
import png1 from "../images/png1.PNG";
import png2 from "../images/png2.PNG";
import png3 from "../images/png3.PNG";
import background from "../images/background.jpeg";

const FacilitiesImg = [
  { img: png1, name: "Facility1" },
  { img: png2, name: "Facility2" },
  { img: png1, name: "Facility3" },
  { img: png3, name: "Facility4" },
  { img: png1, name: "Facility5" },
  { img: png3, name: "Facility6" },
];

const ServicesImg = [
  { img: png1, name: "Service1", designation: "Designation" },
  { img: png2, name: "Service2", designation: "Designation" },
  { img: png1, name: "Service3", designation: "Designation" },
  { img: png3, name: "Service4", designation: "Designation" },
  { img: png1, name: "Service5", designation: "Designation" },
  { img: png3, name: "Service6", designation: "Designation" },
];

const ResourcesImg = [
  { img: png1, name: "Resource1" },
  { img: png2, name: "Resource2" },
  { img: png1, name: "Resource3" },
  { img: png3, name: "Resource4" },
  { img: png1, name: "Resource5" },
  { img: png3, name: "Resource6" },
];

const Incubation = () => {
  return (
    <>
      {/* Intro */}
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>Incubation</h1>
          <p>Generating idea is not a problem. Incubation is</p>

          <h3 onClick={() => window.scrollBy(0, 400)}>&#10093;</h3>
        </div>
      </section>
      <main>
        <div className="incubation-block">
          <h1>Facilities</h1>
        </div>

        <section className="incubation-outer-section">
          <div className="incubate">
            {FacilitiesImg.map(({ name, img }, index) => {
              return (
                <div className="incubationCard">
                  <img src={img} alt="" />
                  <h1>{name}</h1>
                </div>
              );
            })}
          </div>

          <p className="incubation-txt">
            <ol>
              <li className="incubation-txt">
                Industry compactible infrastructural support is available on
                demand basis round the clock for incubates in terms of:
              </li>
              <li className="incubation-txt">
                Dedicated workspace with secure plug and play facility with
                high-speed dedicated lease line internet connectivity with wired
                and wireless setup
              </li>
              <li className="incubation-txt">Dedicated storage facility</li>
              <li className="incubation-txt">
                Meeting and video conferencing rooms with audio-video(AV)
                systems for brainstroming sessions and discussions
              </li>
              <li className="incubation-txt">
                Photocopier, scanner, printer facility
              </li>
              <li className="incubation-txt">Desktop, office phones etc</li>
              <li className="incubation-txt">
                Specific hardware, computing devices
              </li>
              <li className="incubation-txt">
                Well-established full-time library services for accessing the
                journals and books
              </li>
              <li className="incubation-txt">
                A shared pantry with refrigerator, heating flask and water
                cooler
              </li>
              <li className="incubation-txt">
                Mess, cafeteria, food court,etc.
              </li>
              <li className="incubation-txt">
                Miscellaneous services like hostels, fitness area and workshops
              </li>
            </ol>
          </p>
        </section>

        <div className="incubation-block">
          <h1>Services</h1>
        </div>
        <section className="incubation-outer-section">
          <div className="incubate">
            {ServicesImg.map(({ name, img, designation }, index) => {
              return (
                <div className="incubationCard">
                  <img src={img} alt="" />
                  <h1>{name}</h1>
                  <p>{designation}</p>
                </div>
              );
            })}
          </div>

          <p className="incubation-txt">
            <ol>
              <li className="incubation-txt">
                Technical guidance and advisory are supported by highly
                qualified faculty members, research scholars as well as PG
                students
              </li>
              <li className="incubation-txt">
                Mentor services and expert guidance supported by team members of
                MIIC, panel of mentors, advisory committee, who help at various
                steps of incubation and pre-incubation such as that of idea
                validation, business model, market survey etc
              </li>
              <li className="incubation-txt">
                Management and Business services are helpful to nurture the
                ideas in the structured ways; various training, inspirational
                programs, seminars and workshops to support this
              </li>
              <li className="incubation-txt">
                Marketing and Outreach allows help for marketing the ventures in
                online/offline mode
              </li>
              <li className="incubation-txt">
                Finance Advisory supports the ventures and guides them to raise
                the funds from various agencies, modeling and evalution.
                Consultants are provided for the startup advisory, guidance,
                registration, taxation etc, if required
              </li>
              <li className="incubation-txt">
                Legal support services to handle legal issues. Arrangement of
                lawyers, charted accountant or startup secretary are made
                available as and when required
              </li>
              <li className="incubation-txt">
                Exposure and outreach to various activities related to
                entrepreneurship like seminar/webinar, motivational lectures,
                events related to idea generation, competition, boot camp and
                various training program etc. to create awareness among students
                and inculcate the entrepreneurship attitute among students and
                faculty members
              </li>
              <li className="incubation-txt">
                Grants and Fellowships to Grant-in-aid source and sponsored
                projects. Alumni Fellowships are provided to alumni if they wish
                to start their own venture
              </li>
              <li className="incubation-txt">
                Seed funding for start-ups and scale up support
              </li>
              <li className="incubation-txt">Deferred Payments</li>
            </ol>
          </p>
        </section>

        <div className="incubation-block">
          <h1>Resources</h1>
        </div>
        <section className="incubation-outer-section">
          <div className="incubate">
            {ResourcesImg.map(({ name, img }, index) => {
              return (
                <div className="incubationCard">
                  <img src={img} alt="" />
                  <h1>{name}</h1>
                </div>
              );
            })}
          </div>

          <p className="incubation-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis
            consequuntur necessitatibus ducimus facilis amet itaque autem
            debitis dignissimos voluptatum odio!Lorem ipsum dolor sit amet
            consectetur adipisicing elit.Corporis consequuntur necessitatibus
            ducimus facilis amet itaque autem debitis dignissimos voluptatum
            odio!Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Corporis consequuntur necessitatibus ducimus facilis amet
            itaque autem debitis dignissimos voluptatum odio!
          </p>
        </section>

        <div className="incubation-block">
          <h1>Eligibility</h1>
        </div>

        <section className="incubation-outer-container">
          <section className="incubation-inner-container">
            <div className="cardcontainer">
              <p>
                <ol>
                  <li className="yellow eligibilty-list">Eligibility</li>
                  <li className="yellow eligibilty-list">
                    Application Procedure
                  </li>
                  <li className="yellow eligibilty-list">
                    Incubator Guidelines
                  </li>
                  <li className="yellow eligibilty-list">
                    Standard Operating Process
                  </li>
                  <li className="yellow eligibilty-list">Faculty Policy</li>
                  <li className="yellow eligibilty-list">Apply Now</li>
                </ol>
              </p>
            </div>
            <div className="incubation-container">
              <h2 className="blue">Eligibility</h2>
              <p className="redpara">
                Any person having an innovative idea and wants to convert into
                business venture, which leads to entrepreneurship may approach
                MIIC. They can avail the facilities of MIIC after signing a
                declaration form.
              </p>
              <p className="redpara">
                The start-ups, not directly linked with Medi-Caps University,
                have to be technology-based companies and must establish an
                association with Medi-Caps University e.g. having a mentor or
                advisor from MIIC. MIIC will provide all the support to
                facilitate the association. However, MIIC can incubate and allow
                time to select the mentor. any other exceptions will be decided
                by the committee.
              </p>
              <p className="redpara">
                A startup, if promoted by an employee of Govt. / Organisation
                shall be granted incubation only upon submission of No Objection
                Certificate (NOC) from the competent authority or employer.
              </p>
              <p className="redpara">
                In case of limited seats, preference will be given to alumni of
                Medi-Caps University and the faculty members of Medi-Caps
                Univerity.
              </p>
              <p className="redpara">
                Start-ups seeking for virtual incubation and dynamic incubation
                provisions are also available.
              </p>
              <p className="redpara">
                Incubation unit charges are to be paid by start-ups in advance
                with appropriate security deposit. Incubation Cell will always
                try to accomodate all possible requests of start-ups. Incubation
                unit charges are discounted by 50% for the student incubatees
                and 25% for faculty and alumni, provided they hold 50% or more
                equity in the startups and hold the position of Director.
              </p>
            </div>
          </section>
        </section>

        <div className="paracontainer">
          <br className="blank"></br>
          <br className="blank"></br>
          <p className="incubation-txt">
            <ol>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis
              consequuntur necessitatibus ducimus facilis amet itaque autem
              debitis dignissimos voluptatum odio!Lorem ipsum dolor sit amet
              consectetur adipisicing elit.Corporis consequuntur necessitatibus
              ducimus facilis amet itaque autem debitis dignissimos voluptatum
              odio!Lorem ipsum dolor sit amet consectetur adipisicing
              elit.Corporis consequuntur necessitatibus ducimus facilis amet
              itaque autem debitis dignissimos volupt !
            </ol>
          </p>
          <br className="blank"></br>
          <br className="blank"></br>
        </div>

        <div className="incubation-block">
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
    </>
  );
};

export default Incubation;

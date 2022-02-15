import React from "react";
import blur_img from "../images/blur-background-2.jpg";
import "../css/programs.scss";
import poster from "../images/poster.jfif";
import stories from "../images/unbox.jfif";
import short from "../images/short_video.png";
import lean from "../images/1.jpeg";
import essay from "../images/essay.jfif";
import startup from "../images/startup.png";
import innovate from "../images/innovation.jfif";
import entre from "../images/entreprenuer.jfif";
import isser from "../images/isser.png";
import circular from "../images/circular_eco.jfif";
import design from "../images/design_thinking.png";
import bussiness from "../images/bussiness_model.png";
import background from "../images/background.jpeg";

const workshops = [
  {
    title: "Worshop on Web Designing",
    desc: "To acquaint students with the basics of Website development. Students  learned and understood the tools website development",
    img: startup,
  },
  {
    title: "Lean Canvas",
    desc: "To introduce and explain the importance of Lean Canvas ",
    img: startup,
  },
];

const events = [
  {
    title: "Innovation and Incubation",
    desc: "To motivate faculty members towards innovation and understand the purposeof Incubation",
    img: startup,
  },
  {
    title: "Marketing of Innovation",
    desc: "Encourage students to undertake Startups based on innovation",
    img: startup,
  },
  {
    title: "My Story –Motivational Session by Successful Innovator” ",
    desc: "Encourage students towards to undertake entrepreneurship and Startups ",
    img: startup,
  },
  {
    title: "How to start a service based business with zero investment",
    desc: "To aware students how to start a service based business without invsetment",
    img: startup,
  },
  {
    title: "Principles of Effectuation",
    desc: "To acquaint students with the importance of effectuation ",
    img: startup,
  },
  {
    title: "Curret Market Scenario",
    desc: "To acquaint students with working of different types of market  and create a thought of their product",
    img: startup,
  },
  {
    title: "Idea Generation-Thought Process",
    desc: "Encourage students for innovative thinking",
    img: startup,
  },
  {
    title: "Circular Economy- Novel Approach of Business",
    desc: "To make students realize the importance of environment in businesses ",
    img: startup,
  },
  {
    title: "Orientation Session on Innovation",
    desc: "To aware students and faculties about innovation and startup procedures and facility",
    img: startup,
  },
  {
    title: "Webinar on `Venture Capital'",
    desc: "To deliver the imporatnce of Venture Capital, its sources and types",
    img: startup,
  },
  {
    title:
      "Webinar on `Essentials of Entrepreneurial University and Academic Entrepreneurship'",
    desc: "The objective was to educate the faculty members about the imporatance of entrepreneurship in academics",
    img: startup,
  },
  {
    title: "Expert Talk on `Intellectual property Rights'",
    desc: "To introduce different types of Intellectual Properties and how they are applicable to startups !",
    img: startup,
  },
  {
    title: "Product Fit for Market",
    desc: "To emphasize to design snd develop value driven products and services keeping customer in mind",
    img: startup,
  },
  {
    title: "A Talk on “From your Ph.D/Masters Thesis to a Startup”",
    desc: "",
    img: startup,
  },
  {
    title: "Why Intellectual Property is important in Academia",
    desc: "",
    img: startup,
  },
];

const seminars = [
  {
    title: "Start-up Operations: More than Managing Day-to-Day Activities",
    desc: "Speaker- Dr. Colleen Janczak",
    img: startup,
  },
  {
    title: "IICE -Kala Kaushal",
    desc: "By IISER, Bhopal Indian Institute of Science Education and Research",
    img: isser,
  },
  {
    title:
      "Skills for Entrepreneurship: The nuts & bolts of starting a business",
    desc: "Speaker:- Dr. Iman Daryaei",
    img: entre,
  },
  {
    title: "IPR and Innovation Landscape in India",
    desc: "Speaker: Mrs. Cheshta Sharma (Director, IIPTA)",
    img: innovate,
  },
  {
    title: "Starting up a technology venture",
    desc: "Speaker: Dr. Keeper Layne Sharkey (Founder and Director at ODE USA)",
    img: startup,
  },
  {
    title: "Transformation from Lab to Industry and Shaping up your career",
    desc: "Speaker: Dr. Varuni Livera",
    img: blur_img,
  },
];

const webinars = [
  {
    title: "National Level Awareness  programme of Ministry of MSME ",
    desc: "To acquaint students with functioning of MSME and various schemes available to support entrpreneurs",
    img: startup,
  },
  {
    title: "AARAMBH 2020",
    desc: "To motivate students towards startups and entrepreneurship ",
    img: startup,
  },
  {
    title: "Design Thinking",
    desc: "To introduce the concept of design thinking to students and motivate them to adopt it ! ",
    img: startup,
  },
  {
    title: "Business Models",
    desc: "To introduce the concept of business model  and its importance in any business and its selection ",
    img: startup,
  },
  {
    title: "National Webinar on Research, Innovation and Ranking",
    desc: "",
    img: startup,
  },
  {
    title: "Panel Discussion with Alumni Entrpreneurs’",
    desc: "To encourage students towards entrepreneurship through Alumni Talk",
    img: startup,
  },
];

const Programs = () => {
  return (
    <>
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>Programs</h1>
          <p>Its not about the ideas. It's about making ideas happen</p>

          <h3 onClick={() => window.scrollBy(0, 400)}>&#10093;</h3>
        </div>
      </section>
      {/* Events */}
      <section className="one">
        <h1>Events</h1>
        <p className="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>

        <div className="home-news">
          {events.map((event, index) => {
            const { title, img, desc } = event;
            return (
              <div key={index} className="home-news-card">
                <img src={img} alt="" />
                <div>
                  <h3>{title}</h3>
                  <span>{desc}</span>
                </div>
              </div>
            );
          })}
        </div>
        <button type="button" className="btn btn-warning">
          Load More
        </button>
      </section>
      {/* Workshops */}
      <section className="one">
        <h1>Workshops</h1>

        <p className="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>
        <div className="announcements">
          {workshops.map((workshop, index) => {
            const { img, title, desc } = workshop;
            return (
              <div key={index} className="announce">
                <img src={img} alt={title} />
                <div>
                  <h1>{title}</h1>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button type="button" className="btn btn-warning">
          Load More
        </button>
      </section>
      {/* Seminars */}
      <section className="one">
        <h1>Seminars</h1>
        <p className="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>

        <div className="home-news">
          {seminars.map((seminar, index) => {
            const { title, img, desc } = seminar;
            return (
              <div key={index} className="home-news-card">
                <img src={img} alt="" />
                <div>
                  <h3>{title}</h3>
                  <span>{desc}</span>
                </div>
              </div>
            );
          })}
        </div>
        <button type="button" className="btn btn-warning">
          Load More
        </button>
      </section>

      {/* Webinars */}
      <section className="one">
        <h1>Webinars</h1>

        <p className="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>
        <div className="announcements">
          {webinars.map((webinar, index) => {
            const { img, title, desc } = webinar;
            return (
              <div key={index} className="announce">
                <img src={img} alt={title} />
                <div>
                  <h1>{title}</h1>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button type="button" className="btn btn-warning">
          Load More
        </button>
      </section>
      {/* Activities */}
    </>
  );
};

export default Programs;

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
    title: "Be a Womanpreneur",
    desc: "IIITD Innovation and Incubation Center (IIITD-IC) with the support of Department of Science and Technology, Govt of India is conducting a Training Programme on Entrepreneurship for WOMEN from Science and Tech. aspiring to be an Entrepreneur or having an Early Stage Startup.This training programme aims at providing basic understanding on the following modules to enable the participants to be acquainted with them.",
    img: entre,
  },
  {
    title: "Startup Compliance",
    desc: "Entrepreneurs Masterclass Series: Startup Compliance. Join the session on Legal Compliances and Product Building for Startups being organized by IIITD Innovation and Incubation Center for entrepreneurs and startups enthusiasts by Syed Asif Iqbal (Founder, Almspay) Startup Lawyer and Mentor. Conducted on Monday, 23 October 8:00 to 9:00 PM.",
    img: startup,
  },
  {
    title: "Demystifying Finance for Startups",
    desc: "Entrepreneurs Masterclass Series: Demystifying Finance for Startups. Join this session by Neha Misra (Co-founder and CEO of The Fin Lit Project) to learn about Finance in a simple way.We will break down everything you need to know while building your startup right from Financial Statements to Startup Runway Plans, from Fundraising to Unit Economics and uncover all aspects of financial literacy for startups in a no-jargon simple way so that you can build your startup bigger and better.",
    img: startup,
  },
];

const events = [
  {
    title: "Lean Canvas",
    desc: "Capture your buisness model in a portable one page diagram",
    img: lean,
  },
  {
    title: "Essay Writing",
    desc: "Essays on startups and innovation. World Entreprenurship week",
    img: essay,
  },
  {
    title: "Short video on life of campus entreprenur",
    desc: "World Entrepreneurship Week",
    img: short,
  },
  {
    title: "Poster Making Competition",
    desc: "World Entrepreneurship Week",
    img: poster,
  },
  {
    title: "Stories Unboxed",
    desc: "World Entreprenurship Week Stories of startup failure and success",
    img: stories,
  },
  {
    title: "Cases of success/failure of start-up",
    desc: "World Entrepreneurship Week",
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
    title: "Bussiness Models",
    desc: "Session on Bussiness Model organised along with E-cell about Bussiness Models.Speaker Mr. Kiran Vivekar Assistant Professor at Medi-Caps University.The term business model refers to a company's plan for making a profit. It identifies the products or services the business plans to sell, its identified target market, and any anticipated expenses. Business models are important for both new and established businesses",
    img: bussiness,
  },
  {
    title: "Design Thinking",
    desc: "Session on Design Thinking, speaker Dr. Sarita Kansal at Medi-Caps University. Design thinking is a term used to represent a set of cognitive, strategic and practical processes by which design concepts (proposals for products, buildings, machines, communications, etc.) are developed. Many of the key concepts and aspects of design thinking have been identified through studies, across different design domains, of design cognition and design activity in both laboratory and natural contexts.",
    img: design,
  },
  {
    title: "Circular Economy",
    desc: `Circular Economy: Novel approach of business, organised on 19 Feburary,2021. Speaker Ritu Kesarwani, Founder of Zeroing Impact Rotterdam, Netherlands. Organized along with E-Cell. A circular economy is "a model of production and consumption, which involves sharing, leasing, reusing, repairing, refurbishing and recycling existing materials and products as long as possible" that aims at tackling global challenges like climate change, biodiversity loss, waste, and pollution.`,
    img: circular,
  },
];

const Programs = () => {
  return (
    <>
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>Programs</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            dicta excepturi iusto obcaecati vel eligendi quasi, est esse ullam
            repudiandae. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Debitis provident quidem tempora fugiat ea officia maiores
            similique praesentium. Mollitia quasi, dolores voluptas tempora,
            totam, autem rem at illum quibusdam doloribus molestias quo ad
            doloremque error veritatis soluta. Ex obcaecati doloribus distinctio
            amet porro rem illum hic, adipisci, nobis dolorem eum?
          </p>

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

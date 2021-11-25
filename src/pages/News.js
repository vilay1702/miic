import React from "react";
import "../css/news.scss";
import blur_img from "../images/blur-background-2.jpg";
import ideate from "../images/13.jpeg";
import recruit1 from "../images/recuit.jpeg";
import recruit from "../images/7.jpeg";
import person from "../images/person.jfif";
import ml from "../images/ml.png";
import notation from "../images/O_notation.png";
import blog from "../images/ideas_blog.jfif";

const announcements = [
  {
    img: recruit,
    title: "MIIC Recruitment",
    desc: `We are hiring! New recruitment for team members in various department of MIIC. Link in description. Teams you can apply for :- Research and Development Team, Marketing and Management Team, Development Team, Graphic Team, Content Team. Last date to apply: Wednessday, 13th October, 2021. Link in description. Eligility - B.Tech and MBA Programs. Showcase your skills and get non-pareil experience. Gain experience of working with startups and teams`,
  },
  {
    img: recruit1,
    title: "MIIC Recruitment - 1st year",
    desc: `We are hiring! New recruitment for team members in various department of MIIC. Link in description. Teams you can apply for :- Research and Development Team, Marketing and Management Team, Web Development Team, Graphic Team, Content Team. Last date to apply Monday, 25th October, 2021. Link in description. Eligility - B.Tech and MBA Programs. Showcase your skills and get non-pareil experience. Gain experience of working with startups and teams`,
  },
  {
    img: ideate,
    title: "Ideation 3.0",
    desc: `Convert your ideas to big buisnnes. Get platfoirm fot implementing your ideas and bringing thr change in social and technical world. MIIC provide platform for incubating your idead and create successful startup. Top 5 ideas will be incubated..  Submit your ideas before 13th August, 2021. Researches, students and teachers all can apply. Get grant upto 15 Lakh from MSME`,
  },
];

const openIdeas = [
  {
    title: "Idea 1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempore, perspiciatis.",
    img: blur_img,
  },
  {
    title: "Idea 2",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempore, perspiciatis.",
    img: blur_img,
  },
  {
    title: "Idea 3",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempore, perspiciatis.",
    img: blur_img,
  },
  {
    title: "Idea 4",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempore, perspiciatis.",
    img: blur_img,
  },
  {
    title: "Idea 5",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempore, perspiciatis.",
    img: blur_img,
  },
  {
    title: "Idea 6",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempore, perspiciatis.",
    img: blur_img,
  },
];

const blogs = [
  {
    title: "Big O Notation",
    author: "Britani Porwal",
    img: notation,
  },
  {
    title: "Ideas into Impact",
    author: "Saud Hashmi",
    img: blog,
  },
  {
    title: "Introduction to Python for ML",
    author: "Yamini Vijaywargiya",
    img: ml,
  },
];

const News = () => {
  return (
    <>
      {/*-- Open Ideas--*/}
      <section class="one">
        <h1>Open Ideas</h1>
        <p class="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>

        <div className="home-news">
          {openIdeas.map((idea, index) => {
            const { title, img, desc } = idea;
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
        <button type="button" class="btn btn-warning">
          Load More
        </button>
      </section>
      {/* Annnouncements */}
      <section class="one">
        <h1>Announcements</h1>

        <p class="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>
        <div className="announcements">
          {announcements.map((announcement, index) => {
            const { img, title, desc } = announcement;
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
        <button type="button" class="btn btn-warning">
          Load More
        </button>
      </section>
      {/* Blog */}

      <section className="home-news-section">
        <h1>Blogs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio!
        </p>
        <div className="home-news">
          {blogs.map((blog, index) => {
            const { title, img, author } = blog;
            return (
              <div key={index} className="home-news-card">
                <img src={img} alt="" />
                <div>
                  <h3>{title}</h3>
                  <span>by {author}</span>
                </div>
              </div>
            );
          })}
        </div>
        <a href="#" class="btn">
          Load More
        </a>
      </section>
      {/*-- Testimonials --*/}

      {/*<script src="https://kit.fontawesome.com/321e7e9d2c.js" crossorigin="anonymous" ></script>  */}
    </>
  );
};
export default News;

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
import background from "../images/background.jpeg";

const testimonials = [
  {
    title: "Cheslla Addam",
    img: person,
    desc: " C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms",
    id: "slide-4",
  },
  {
    title: "Cheslla Addam",
    img: person,
    desc: "C++ was designed with an orientation toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights.[10] C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications,[10] including desktop applications, video games, servers (e.g. e-commerce, web search, or databases), and performance-critical applications (e.g. telephone switches or space probes)",
    id: "slide-3",
  },
  {
    title: "Cheslla Addam",
    img: person,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt nobis nemo a laborum neque quisquam distinctio delectus itaque. Quae officiis quisquam quia libero eveniet pariatur nihil eligendi beatae minus provident magnam obcaecati quis asperiores optio, minima, doloribus laborum. Unde possimus repudiandae deserunt architecto mollitia vel earum debitis sunt porro! Voluptatibus laudantium quam quia ad possimus saepe voluptate cumque ipsum maxime maiores, fuga porro, tempore delectus nulla esse non atque beatae laboriosam alias qui mollitia. Omnis minus perspiciatis quas assumenda atque natus nemo ullam. Provident ex repellendus facere dolor illo nostrum, molestiae, itaque repudiandae, et quod quas doloremque quis aspernatur?",
    id: "slide-2",
  },
  {
    title: "Cheslla Addam",
    img: person,
    desc: "C++ is standardized by the International Organization for Standardization (ISO), with the latest standard version ratified and published by ISO in December 2020 as ISO/IEC 14882:2020 (informally known as C++20).[12] The C++ programming language was initially standardized in 1998 as ISO/IEC 14882:1998, which was then amended by the C++03, C++11, C++14, and C++17 standards. The current C++20 standard supersedes these with new features and an enlarged standard library. Before the initial standardization in 1998, C++ was developed by Danish computer scientist Bjarne Stroustrup at Bell Labs since 1979 as an extension of the C language; he wanted an efficient and flexible language similar to C that also provided high-level features for program organization.[13] Since 2012, C++ has been on a three-year release schedule[14] with C++23 as the next planned standard.",
    id: "slide-1",
  },
];

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
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>News and Media</h1>
          <p>
            Innovation is the ability to see changes as an opportunity, not a
            threat
          </p>

          <h3 onClick={() => window.scrollBy(0, 400)}>&#10093;</h3>
        </div>
      </section>
      {/*-- Open Ideas--*/}
      <section className="one">
        <h1>Open Ideas</h1>
        <p className="outer-p">
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
        <button type="button" className="btn btn-warning">
          Load More
        </button>
      </section>
      {/* Annnouncements */}
      <section className="one">
        <h1>Announcements</h1>

        <p className="outer-p">
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
        <button type="button" className="btn btn-warning">
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
        <a href="#" className="btn">
          Load More
        </a>
      </section>
      {/*-- Testimonials --*/}
      {/*-- Testimonials --*/}
      <section id="marginN">
        <h1 id="testimonialN">Testimonials</h1>
        <div class="containerN">
          <div class="slider">
            <input
              type="radio"
              class="radio"
              name="images"
              id="radio-1"
              checked
            />
            <input
              type="radio"
              class="radio"
              name="images"
              id="radio-2"
              checked
            />
            <input
              type="radio"
              class="radio"
              name="images"
              id="radio-3"
              checked
            />
            <input
              type="radio"
              class="radio"
              name="images"
              id="radio-4"
              checked
            />
            {testimonials.map((testimonial) => {
              const { title, img, desc, id } = testimonial;
              return (
                <div class="slideN" id={id}>
                  <fieldset>
                    <fieldset class="img-p">
                      <img src={img} alt="" />
                      <p>{title}</p>
                    </fieldset>
                    <fieldset class="outerN">
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                      <i class="fa fa-quote-right" aria-hidden="true"></i>
                      <p>{desc} </p>
                    </fieldset>
                  </fieldset>
                </div>
              );
            })}

            <div class="dotsN">
              <label for="radio-4" id="label-1"></label>
              <label for="radio-3" id="label-2"></label>
              <label for="radio-2" id="label-3"></label>
              <label for="radio-1" id="label-4"></label>
            </div>
          </div>
        </div>
      </section>

      {/*<script src="https://kit.fontawesome.com/321e7e9d2c.js" crossorigin="anonymous" ></script>  */}
    </>
  );
};
export default News;

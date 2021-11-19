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

const News = () => {
  return (
    <>
      {/*-- Open Ideas--*/}
      <section id="one">
        <h1>Open Ideas</h1>
        <p id="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>

        <div className="home-news">
          {Array(6)
            .fill()
            .map(() => {
              return (
                <div className="home-news-card news-idea">
                  <img src={blur_img} alt="" />
                  <div>
                    <h3>News</h3>
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore, perspiciatis.
                    </span>
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
      <section id="one">
        <h1>Announcements</h1>

        <p id="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>
        <div className="announ-outer">
          <div className="announ-inner">
            <div className="announ-img">
              <img src={recruit} alt="" />
            </div>
            <div className="announ-para">
              <h2>MIIC Recruitment</h2>
              <p>
                We are hiring! New recruitment for team members in various
                department of MIIC. Link in description. Teams you can apply
                for:-
                <span>Research and Development Team</span>{" "}
                <span>Marketing and Management Team</span>{" "}
                <span>Web Development Team</span> <span>Graphic Team</span>{" "}
                <span>Content Team</span>. Last date to apply{" "}
                <span>Wednessday, 13th October, 2021</span>
                Link in description. Eligility - B.Tech and MBA Programs.
                Showcase your skills and get non-pareil experience. Gain
                experience of working with startups and teams
              </p>
            </div>
          </div>
          <div class="primaryN">
            <div>
              <img src={recruit1} alt="" />
            </div>
            <div>
              <h2>MIIC Recruitment - 1st year</h2>
              <p>
                We are hiring! New recruitment for team members in various
                department of MIIC. Link in description. Teams you can apply for
                :- <span>Research and Development Team</span>{" "}
                <span>Marketing and Management Team</span>{" "}
                <span>Web Development Team</span> <span>Graphic Team</span>{" "}
                <span>Content Team</span>. Last date to apply{" "}
                <span>Monday, 25th October, 2021</span>
                Link in description. Eligility - B.Tech and MBA Programs.
                Showcase your skills and get non-pareil experience. Gain
                experience of working with startups and teams
              </p>
            </div>
          </div>
          <div class="primaryN">
            <div>
              <img src={ideate} alt="" />
            </div>
            <div>
              <h2>Ideation 3.0</h2>
              <p>
                {" "}
                Convert your ideas to big buisnnes. Get platfoirm fot
                implementing your ideas and bringing thr change in social and
                technical world. MIIC provide platform for incubating your idead
                and create successful startup. Top 5 ideas will be incubated..{" "}
                <a href="www.google.com">Goole</a> Submit your ideas before 13th
                August, 2021. Researches, students and teachers all can apply.
                Get grant upto 15 Lakh from MSME
              </p>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-warning">
          Load More
        </button>
      </section>
      {/* Blog */}
      <section id="one">
        <h1>Blog</h1>
        <p id="outer-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          dignissimos nobis dolore quod debitis, maiores asperiores, nostrum
          dicta, deserunt expedita earum adipisci. Alias, fuga quae?
        </p>
        <fieldset id="mainN-1">
          <div class="secondN">
            <div class="row g-0">
              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondaryN">
                  <img src={notation} alt="" />
                  <div class="paraN">
                    <h2>The Big O Notation</h2>
                    <p>By Britani Porwal</p>
                  </div>
                </fieldset>
              </div>
              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondaryN">
                  <img src={blog} alt="" />
                  <div class="paraN">
                    <h2>Ideas into Impact</h2>
                    <p>By Saud Hashmi</p>
                  </div>
                </fieldset>
              </div>
              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondaryN">
                  <img src={ml} alt="" />
                  <div class="paraN">
                    <h2>Introduction to Python for ML</h2>
                    <p>By Yamini Vijaywargiya</p>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </fieldset>
        <button type="button" class="btn btn-warning">
          Load More
        </button>
      </section>
      {/*-- Testimonials --*/}
      <section>
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

            <div class="slideN" id="slide-4">
              <fieldset>
                <fieldset class="img-p">
                  <img src={person} alt="" />
                  <p>Cheslla Addam</p>
                </fieldset>
                <fieldset class="outerN">
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                  <p>
                    {" "}
                    C++ (/ˌsiːˌplʌsˈplʌs/) is a general-purpose programming
                    language created by Bjarne Stroustrup as an extension of the
                    C programming language, or "C with Classes". The language
                    has expanded significantly over time, and modern C++ now has
                    object-oriented, generic, and functional features in
                    addition to facilities for low-level memory manipulation. It
                    is almost always implemented as a compiled language, and
                    many vendors provide C++ compilers, including the Free
                    Software Foundation, LLVM, Microsoft, Intel, Oracle, and
                    IBM, so it is available on many platforms
                  </p>
                </fieldset>
              </fieldset>
            </div>

            <div class="slideN" id="slide-3">
              <fieldset>
                <fieldset class="img-p">
                  <img src={person} alt="" />
                  <p>Cheslla Addam</p>
                </fieldset>
                <fieldset class="outerN">
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                  <p>
                    C++ was designed with an orientation toward system
                    programming and embedded, resource-constrained software and
                    large systems, with performance, efficiency, and flexibility
                    of use as its design highlights.[10] C++ has also been found
                    useful in many other contexts, with key strengths being
                    software infrastructure and resource-constrained
                    applications,[10] including desktop applications, video
                    games, servers (e.g. e-commerce, web search, or databases),
                    and performance-critical applications (e.g. telephone
                    switches or space probes)
                  </p>
                </fieldset>
              </fieldset>
            </div>

            <div class="slideN" id="slide-2">
              <fieldset class="img-p">
                <img src={person} alt="" />
                <p>Cheslla Addam</p>
              </fieldset>
              <fieldset class="outerN">
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                <i class="fa fa-quote-right" aria-hidden="true"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur nesciunt nobis nemo a laborum neque quisquam
                  distinctio delectus itaque. Quae officiis quisquam quia libero
                  eveniet pariatur nihil eligendi beatae minus provident magnam
                  obcaecati quis asperiores optio, minima, doloribus laborum.
                  Unde possimus repudiandae deserunt architecto mollitia vel
                  earum debitis sunt porro! Voluptatibus laudantium quam quia ad
                  possimus saepe voluptate cumque ipsum maxime maiores, fuga
                  porro, tempore delectus nulla esse non atque beatae laboriosam
                  alias qui mollitia. Omnis minus perspiciatis quas assumenda
                  atque natus nemo ullam. Provident ex repellendus facere dolor
                  illo nostrum, molestiae, itaque repudiandae, et quod quas
                  doloremque quis aspernatur?
                </p>
              </fieldset>
            </div>

            <div class="slideN" id="slide-1">
              <fieldset>
                <fieldset class="img-p">
                  <img src={person} alt="" />
                  <p>Cheslla Addam</p>
                </fieldset>
                <fieldset class="outerN">
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                  <p>
                    C++ is standardized by the International Organization for
                    Standardization (ISO), with the latest standard version
                    ratified and published by ISO in December 2020 as ISO/IEC
                    14882:2020 (informally known as C++20).[12] The C++
                    programming language was initially standardized in 1998 as
                    ISO/IEC 14882:1998, which was then amended by the C++03,
                    C++11, C++14, and C++17 standards. The current C++20
                    standard supersedes these with new features and an enlarged
                    standard library. Before the initial standardization in
                    1998, C++ was developed by Danish computer scientist Bjarne
                    Stroustrup at Bell Labs since 1979 as an extension of the C
                    language; he wanted an efficient and flexible language
                    similar to C that also provided high-level features for
                    program organization.[13] Since 2012, C++ has been on a
                    three-year release schedule[14] with C++23 as the next
                    planned standard.
                  </p>
                </fieldset>
              </fieldset>
            </div>
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

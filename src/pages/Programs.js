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

const Programs = () => {
  return (
    <>
      {/* Events */}
      <section id="one">
        <h1>Events</h1>
        <p id="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>

        <fieldset id="main-1">
          <div class="first">
            <div class="row g-0">
              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={lean} alt="" />

                  <div class="para">
                    <h2> Lean Canvas</h2>
                    <p>
                      Capture your buisness model in a portable one page diagram
                    </p>
                  </div>
                </fieldset>
              </div>
              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={essay} alt="" />
                  <div class="para">
                    <h2>Essay Writing</h2>
                    <p>
                      Essays on startups and innovation. World Entreprenurship
                      week
                    </p>
                  </div>
                </fieldset>
              </div>
              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={short} alt="" />
                  <div class="para">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>*/}
                    <h2>Short video on life of campus entreprenur</h2>
                    <p>World Entreprenurship Week</p>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div class="second">
            <div class="row g-0">
              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={poster} alt="" />
                  <div class="para">
                    <h2>Poster Making Competition</h2>
                    <p>World Entreprenurship Week</p>
                  </div>
                </fieldset>
              </div>

              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={stories} alt="" />
                  <div class="para">
                    <h2>Stories unboxed</h2>
                    <p>
                      World Entreprenurship Week Stories of startup failure and
                      success
                    </p>
                  </div>
                </fieldset>
              </div>

              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={startup} alt="" />
                  <div class="para">
                    <h2>Cases of success/failure of start-up</h2>
                    <p>World Entreprenurship Week</p>
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
      {/* Workshops */}
      <section id="one">
        <h1> Workshops</h1>

        <p id="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>
        <fieldset id="main-2">
          <div class="row g-0">
            <fieldset class="primary">
              <div class="col-xs-12">
                <img id="img-w" src={entre} alt="" />
              </div>
              <div id="float" class="col-xs-12">
                <h2>Be a Womenpreneur</h2>
                <p>
                  IIITD Innovation and Incubation Center (IIITD-IC) with the
                  support of Department of Science and Technology, Govt of India
                  is conducting a Training Programme on Entrepreneurship for
                  WOMEN from Science and Tech. aspiring to be an Entrepreneur or
                  having an Early Stage Startup.This training programme aims at
                  providing basic understanding on the following modules to
                  enable the participants to be acquainted with them.{" "}
                </p>
              </div>
            </fieldset>
            <fieldset class="primary">
              <div class="col-xs-12">
                <img id="img-w" src={startup} alt="" />
              </div>
              <div id="float">
                <h2>Startup Compliance</h2>
                <p>
                  Entrepreneurs Masterclass Series: Startup Compliance. Join the
                  session on Legal Compliances and Product Building for Startups
                  being organized by IIITD Innovation and Incubation Center for
                  entrepreneurs and startups enthusiasts by Syed Asif Iqbal
                  (Founder, Almspay) Startup Lawyer and Mentor. Conducted on
                  Monday, 23 October 8:00 to 9:00 PM.{" "}
                </p>
              </div>
            </fieldset>
            <fieldset class="primary">
              <div class="col-xs-12">
                <img id="img-w" src={startup} alt="" />
              </div>
              <div id="float">
                <h2>Demystifying Finance for Startups</h2>
                <p>
                  Entrepreneurs Masterclass Series: Demystifying Finance for
                  Startups. Join this session by Neha Misra (Co-founder and CEO
                  of The Fin Lit Project) to learn about Finance in a simple
                  way.We will break down everything you need to know while
                  building your startup right from Financial Statements to
                  Startup Runway Plans, from Fundraising to Unit Economics and
                  uncover all aspects of financial literacy for startups in a
                  no-jargon simple way so that you can build your startup bigger
                  and better.
                </p>
              </div>
            </fieldset>
          </div>
        </fieldset>
        <button type="button" class="btn btn-warning">
          Load More
        </button>
      </section>
      {/* Seminars */}
      <section id="one">
        <h1>Seminars</h1>
        <p id="outer-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          dignissimos nobis dolore quod debitis, maiores asperiores, nostrum
          dicta, deserunt expedita earum adipisci. Alias, fuga quae?
        </p>
        <fieldset id="main-1">
          <div class="first">
            <div class="row g-0">
              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={startup} alt="" />
                  <div class="para">
                    <h2>
                      Start-up Operations: More than Managing Day-to-Day
                      Activities
                    </h2>
                    <p>Speaker- Dr. Colleen Janczak</p>
                  </div>
                </fieldset>
              </div>

              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={isser} alt="" />
                  <div class="para">
                    <h2>IICE -Kala Kaushal</h2>
                    <p>
                      By IISER, Bhopal Indian Institute of Science Education and
                      Research
                    </p>
                  </div>
                </fieldset>
              </div>

              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={entre} alt="" />
                  <div class="para">
                    <h2>
                      Skills for Entrepreneurship: The nuts & bolts of starting
                      a business
                    </h2>
                    <p>Speaker:- Dr. Iman Daryaei</p>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div class="second">
            <div class="row g-0">
              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={innovate} alt="" />
                  <div class="para">
                    <h2>IPR and Innovation Landscape in India</h2>
                    <p>Speaker: Mrs. Cheshta Sharma (Director, IIPTA)</p>
                  </div>
                </fieldset>
              </div>

              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={startup} alt="" />
                  <div class="para">
                    <h2>Starting up a technology venture </h2>
                    <p>
                      Speaker: Dr. Keeper Layne Sharkey (Founder and Director at
                      ODE USA)
                    </p>
                  </div>
                </fieldset>
              </div>

              <div class="col-xs-12 col-sm-4">
                <fieldset id="secondary">
                  <img src={blur_img} alt="" />
                  <div class="para">
                    <h2>
                      Transformation from Lab to Industry and Shaping up your
                      career
                    </h2>
                    <p>Speaker: Dr. Varuni Livera</p>
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

      {/* Webinars */}
      <section id="one">
        <h1> Webinars</h1>

        <p id="outer-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam cumque quisquam nostrum quas nulla exercitationem repellendus,
          soluta recusandae dolorem molestias minima amet eveniet sed, debitis
          provident? Eius, molestiae! Vel.
        </p>
        <fieldset id="main-2">
          <div class="row g-0">
            <fieldset class="primary">
              <div class="col-xs-12">
                <img id="img-w" src={bussiness} alt="" />
              </div>
              <div id="float" class="col-xs-12">
                <h2>Bussiness Models</h2>
                <p>
                  Session on Bussiness Model organised along with E-cell about
                  Bussiness Models.Speaker Mr. Kiran Vivekar Assistant Professor
                  at Medi-Caps University.The term business model refers to a
                  company's plan for making a profit. It identifies the products
                  or services the business plans to sell, its identified target
                  market, and any anticipated expenses. Business models are
                  important for both new and established businesses.{" "}
                </p>
              </div>
            </fieldset>

            <fieldset class="primary">
              <div class="col-xs-12">
                <img id="img-w" src={design} alt="" />
              </div>
              <div id="float" class="col-xs-12">
                <h2>Design Thinking</h2>
                <p>
                  Session on Design Thinking, speaker Dr. Sarita Kansal at
                  Medi-Caps University. Design thinking is a term used to
                  represent a set of cognitive, strategic and practical
                  processes by which design concepts (proposals for products,
                  buildings, machines, communications, etc.) are developed. Many
                  of the key concepts and aspects of design thinking have been
                  identified through studies, across different design domains,
                  of design cognition and design activity in both laboratory and
                  natural contexts.{" "}
                </p>
              </div>
            </fieldset>

            <fieldset class="primary">
              <div class="col-xs-12">
                <img id="img-w" src={circular} alt="" />
              </div>
              <div id="float" class="col-xs-12">
                <h2>Circular Economy</h2>
                <p>
                  Circular Economy: Novel approach of business, organised on 19
                  Feburary,2021. Speaker Ritu Kesarwani, Founder of Zeroing
                  Impact Rotterdam, Netherlands. Organized along with E-Cell. A
                  circular economy is "a model of production and consumption,
                  which involves sharing, leasing, reusing, repairing,
                  refurbishing and recycling existing materials and products as
                  long as possible" that aims at tackling global challenges like
                  climate change, biodiversity loss, waste, and pollution.{" "}
                </p>
              </div>
            </fieldset>
          </div>
        </fieldset>
        <button type="button" class="btn btn-warning">
          Load More
        </button>
      </section>
      {/* Activities */}
      <section>
        <h1 id="testimonial">Activities</h1>
        <div class="container">
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

            <div class="slide" id="slide-4">
              <fieldset class="background">
                <fieldset class="outer">
                  <h2>Activity 1</h2>
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
            <div class="slide" id="slide-3">
              <fieldset class="background">
                <fieldset class="outer">
                  <h2>Activity 2</h2>
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
            <div class="slide" id="slide-2">
              <fieldset class="background">
                <fieldset class="outer">
                  <h2>Activity 3</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur nesciunt nobis nemo a laborum neque quisquam
                    distinctio delectus itaque. Quae officiis quisquam quia
                    libero eveniet pariatur nihil eligendi beatae minus
                    provident magnam obcaecati quis asperiores optio, minima,
                    doloribus laborum. Unde possimus repudiandae deserunt
                    architecto mollitia vel earum debitis sunt porro!
                    Voluptatibus laudantium quam quia ad possimus saepe
                    voluptate cumque ipsum maxime maiores, fuga porro, tempore
                    delectus nulla esse non atque beatae laboriosam alias qui
                    mollitia. Omnis minus perspiciatis quas assumenda atque
                    natus nemo ullam. Provident ex repellendus facere dolor illo
                    nostrum, molestiae, itaque repudiandae, et quod quas
                    doloremque quis aspernatur?
                  </p>
                </fieldset>
              </fieldset>
            </div>
            <div class="slide" id="slide-1">
              <fieldset class="background">
                <fieldset class="outer">
                  <h2>Activity 4</h2>
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
            <div class="dots">
              <label for="radio-4" id="label-1"></label>
              <label for="radio-3" id="label-2"></label>
              <label for="radio-2" id="label-3"></label>
              <label for="radio-1" id="label-4"></label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;

import React from "react";
import "../css/incubation.scss";
import { Grid } from "@material-ui/core";
import png1 from "../images/png1.PNG";
import png2 from "../images/png2.PNG";
import png3 from "../images/png3.PNG";
import background from "../images/background.jpeg";

const Incubation = () => {
  return (
    <main>
      <section className="intro">
        <img src={background} alt="background" />
        <div>
          <h1>Incubation</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            dicta excepturi iusto obcaecati vel eligendi quasi, est esse ullam
            repudiandae.
          </p>

          <h3>&#10093;</h3>
        </div>
      </section>
      <div className="block">
        <h1>Facilities</h1>
      </div>
      <section className="news green">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png1} alt="" />
              <div>
                <h3>Facility1</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png2} alt="" />
              <div>
                <h3>Facility2</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png1} alt="" />
              <div>
                <h3>Facility3</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png3} alt="" />
              <div>
                <h3>Facility4</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png1} alt="" />
              <div>
                <h3>Facility5</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png3} alt="" />
              <div>
                <h3>Facility6</h3>
              </div>
            </div>
          </Grid>
        </Grid>
        <p className="incubation-txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio!Lorem ipsum dolor sit amet consectetur
          adipisicing elit.Corporis consequuntur necessitatibus ducimus facilis
          amet itaque autem debitis dignissimos voluptatum odio!Lorem ipsum
          dolor sit amet consectetur adipisicing elit.Corporis consequuntur
          necessitatibus ducimus facilis amet itaque autem debitis dignissimos
          voluptatum odio!
        </p>
      </section>

      <div className="block">
        <h1>Services</h1>
      </div>
      <section className="news green">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png1} alt="" />
              <div>
                <h3>Service1</h3>
                <span class="services-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png2} alt="" />
              <div>
                <h3>Service2</h3>
                <span class="services-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png1} alt="" />
              <div>
                <h3>Service3</h3>
                <span class="services-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png3} alt="" />
              <div>
                <h3>Service4</h3>
                <span class="services-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png1} alt="" />
              <div>
                <h3>Service5</h3>
                <span class="services-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png3} alt="" />
              <div>
                <h3>Service6</h3>
                <span class="services-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <p className="incubation-txt red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio!Lorem ipsum dolor sit amet consectetur
          adipisicing elit.Corporis consequuntur necessitatibus ducimus facilis
          amet itaque autem debitis dignissimos voluptatum odio!Lorem ipsum
          dolor sit amet consectetur adipisicing elit.Corporis consequuntur
          necessitatibus ducimus facilis amet itaque autem debitis dignissimos
          voluptatum odio!
        </p>
      </section>

      <div className="block">
        <h1>Resources</h1>
      </div>
      <section className="news green">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png1} alt="" />
              <div>
                <h3>Resource1 </h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png2} alt="" />
              <div>
                <h3>Resource2</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png1} alt="" />
              <div>
                <h3>Resource3</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png3} alt="" />
              <div>
                <h3>Resource4</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png1} alt="" />
              <div>
                <h3>Resource5</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="incubationCard">
              <img src={png3} alt="" />
              <div>
                <h3>Resource6</h3>
              </div>
            </div>
          </Grid>
        </Grid>
        <p className="incubation-txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis
          consequuntur necessitatibus ducimus facilis amet itaque autem debitis
          dignissimos voluptatum odio!Lorem ipsum dolor sit amet consectetur
          adipisicing elit.Corporis consequuntur necessitatibus ducimus facilis
          amet itaque autem debitis dignissimos voluptatum odio!Lorem ipsum
          dolor sit amet consectetur adipisicing elit.Corporis consequuntur
          necessitatibus ducimus facilis amet itaque autem debitis dignissimos
          voluptatum odio!
        </p>
      </section>

      <div className="block">
        <h1>Eligibility</h1>
      </div>

      <section className="incubation-outer-container">
        <section className="incubation-inner-container">
          <div className="cardcontainer">
            <p>
              <h2 class="yellow">Eligibility</h2>
              <ol>
                <li className="eligibilty-list">Loremipsum</li>
                <li className="eligibilty-list">ipsumconsectetur</li>
                <li className="eligibilty-list">consecteturadipisici</li>
                <li className="eligibilty-list">adipisicing</li>
                <li className="eligibilty-list">elit</li>
              </ol>
            </p>
          </div>
          <div className="incubation-container">
            <h2 className="blue">Eligibility</h2>
            <p className="redpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quidem animi rem, tenetur impedit, a ab ipsum architecto amet
            </p>
            <p className="redpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quidem animi rem, tenetur impedit, a ab ipsum architecto amet
            </p>
            <p className="redpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quidem animi rem, tenetur impedit, a ab ipsum architecto amet
            </p>
            <p className="redpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quidem animi rem, tenetur impedit, a ab ipsum architecto amet
            </p>
          </div>
        </section>
      </section>

      <div className="paracontainer">
        <p className="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          delectus, dolore quidem perspiciatis assumenda molestiae et velit,
          expedita officiis aut dolor fugiat maxime commodi cupiditate ea
          suscipit sit natus. Vitae! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Repellat quisquam aspernatur obcaecati eos cum nisi.
          Quod in iure praesentium architecto, id aliquam eveniet voluptatem,
          magni quos quas beatae assumenda quam? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Tempora delectus, dolore quidem
          perspiciatis assumenda molestiae et velit, expedita officiis aut dolor
          fugiat maxime commodi cupiditate ea suscipit sit natus. Vitae! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Repellat quisquam
          aspernatur obcaecati eos cum nisi. Quod in iure praesentium
          architecto, id aliquam eveniet voluptatem, magni quos quas beatae
          assumenda quam?
        </p>
      </div>

      <div className="block">
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
  );
};

export default Incubation;

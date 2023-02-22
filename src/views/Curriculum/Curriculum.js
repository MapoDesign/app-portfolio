import "./Curriculum.css";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/images/hero-coding.jpg";
import { skillsCard } from "../../utils/info";
import Card from "../../Components/Card/Card";
import useTitle from "../../useTitle";

export default function List() {
  useTitle("Curriculum");
  return (
    <>
      <Hero img={image}>
        <section className="about-hero">
          <div className="about-text">
            <div className="topline"></div>
            <h3>
              <q>
                Lavoro dal 2009 nel mondo del web,
                <br /> crescendo ed evelvendo le mie capacità.
              </q>
            </h3>
            <div className="underline"></div>
          </div>
        </section>
      </Hero>

      <section className="about-value section-container">
        <div className="container about-value-content">
          <h3>Le mie hard Skills</h3>
          <div className="card-section">
            {skillsCard.map((card) => {
              return (
                <Card key={card.title} {...card} className={"value-card"} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

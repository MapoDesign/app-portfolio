import Hero from "../../Components/Hero/Hero";
import image from "../../assets/images/hero-coding.jpg";
import useTitle from "../../useTitle";

export default function Home() {
  useTitle("Elisa Resmini");

  return (
    <>
      <Hero img={image}>
        <section className="about-hero">
          <div className="about-text">
            <div className="topline"></div>
            <h3>
              <q>La programmazione è la mia passione</q>
            </h3>
            <div className="underline"></div>
          </div>
        </section>
      </Hero>
      <header className="App-header">
        <h1 id="React" class="sidebar">
          React
        </h1>
        <h1 id="JS" class="sidebar">
          JavaScript Vanilla
        </h1>
        <h1 id="WordPress" class="sidebar">
          WordPress
        </h1>
        <h1 id="eComm" class="sidebar">
          eCommerce
        </h1>
        {/* <Image src="https://images.pexels.com/photos/8658345/pexels-photo-8658345.jpeg" fluid />*/}
      </header>
    </>
  );
}

import Hero from "../../Components/Hero/Hero";
import image from "../../assets/images/home-hero.jpg";
import "./List.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import ErrorMessage from "../../Components/Messages/ErrorMessage";
import Cocktails from "../../Components/Cocktails/Cocktails";
import Loading from "../../Components/Loading/Loading";

export default function List() {
  const {
    query,
    isLoading,
    data,
    isError,
    count,
    searchCocktail,
    deleteScrollPosition,
    scrollPosition,
  } = useGlobalContext();
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero img={image}>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color">Lista dei Drink</h2>
              <h4>Ricerca il tuo cocktail preferito</h4>
              <p>
                L’Italia è famosa per la sua cucina ineguagliabile e per le
                innumerevoli varietà di vini pregiati, ma è nota anche per i
                suoi paesaggi, che di fronte ad{" "}
                <span className="brand-color">un buon aperitivo</span> sanno
                regalare emozioni più uniche che rare. Non tutti lo sanno, ma
                oltre alle eccellenze descritte sopra, alcuni dei cocktail
                classici pensati per accompagnare l’happy hour oppure da gustare
                durante una serata con gli amici sono proprio nati in Italia.
              </p>
            </div>
          </div>
        </div>
      </Hero>
      <section className="container home-screen section-container">
        <h1>Drinks list</h1>
        <div className="search-bar">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="drink">Cerca il tuo drink</label>
              <div className="input-search">
                <input
                  id="drink"
                  className="input"
                  placeholder={query}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn icon-btn" type="submit">
                  <FaSearch className="icon" />
                </button>
              </div>
            </form>
          </div>
          <p className="result">{count} risultati</p>
        </div>
        {!isLoading && isError ? (
          <ErrorMessage />
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks} />
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}

import { Container, Row } from "react-bootstrap";
import "../../Components/Products/ProductCard.css";
import logo from "../../img/ElisaResmini.jpg";

export default function List() {
  return (
    <>
      <div style={{ backgroundColor: "#005190", color: "#ffffff" }}>
        <Container>
          <Row>
            <div className="container-fluid py-5" id="about">
              <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center">
                  <h1
                    className="display-1 text-uppercase"
                    style={{
                      textShadow: "0 0 5px #ffffff",
                      color: "#005190",
                      fontWeight: "900",
                    }}
                  >
                    About
                  </h1>
                  <h2 className="position-absolute text-white">About Me</h2>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-3 pb-4 pb-lg-0">
                    <img
                      className="img-fluid rounded-circle w-100 p-4"
                      src={logo}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-7">
                    <h3 className="mb-4">Frontend Developer</h3>
                    <p>
                      Quando vidi un codice HTML per la prima volta pensai che
                      non ci avrei mai lavorato, poi al primo stage dovuto
                      imparare a scriverlo, scoprendo di esserci portata. Lavoro
                      da sempre sulle pagine web, template, scrivo volentieri
                      codice così e dal 2020 ho deciso di fare un passo in più
                      iniziando a lavorare con JavaScript e poi React.
                    </p>
                    <div className="row mb-3">
                      <div className="col-sm-6 py-2">
                        <h6>
                          Nome: <span className="fw-light">Elisa Resmini</span>
                        </h6>
                      </div>
                      <div className="col-sm-6 py-2">
                        <h6>
                          Data di Nascita:{" "}
                          <span className="fw-light">24 Febbraio 1984</span>
                        </h6>
                      </div>
                      <div className="col-sm-6 py-2">
                        <h6>
                          Disponibilità lavorativa:{" "}
                          <span className="fw-light">Milano- Lugano</span>
                        </h6>
                      </div>
                      <div className="col-sm-6 py-2">
                        <h6>
                          Contratto:{" "}
                          <span className="fw-light">
                            Consulenza a tempo determinato / indeterminato{" "}
                          </span>
                        </h6>
                      </div>
                      <div className="col-sm-6 py-2">
                        <h6>
                          Disponibilità in sede:{" "}
                          <span className="fw-light">Ibrido o full remote</span>
                        </h6>
                      </div>
                      <div className="col-sm-6 py-2">
                        <h6>
                          Modalità organizzative:{" "}
                          <span className="fw-light">Agile SCRUM </span>
                        </h6>
                      </div>
                    </div>
                    {/*<a href="/" className="btn btn-outline-primary mr-4">
                      Hire Me
                </a>*/}
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          {/* Qualification Start */}
          <div className="container-fluid py-5" id="qualification">
            <div className="container">
              <div className="position-relative d-flex align-items-center justify-content-center">
                <h1
                  className="display-1 text-uppercase"
                  style={{
                    textShadow: "0 0 5px #005190",
                    color: "#ffffff",
                    fontWeight: "900",
                  }}
                >
                  Experience
                </h1>
                <h2 className="position-absolute text-primary">
                  Experience & Education
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="mb-4">My Education</h3>
                  <div className="border-left border-primary pt-2 pl-4 ml-2">
                    <div className="position-relative mb-4">
                      <h5 className="font-weight-bold mb-1">Art Direction</h5>
                      <p className="mb-2">
                        <strong>IED - Istituto Europeo di Design Milano</strong>{" "}
                        | <small>2005 - 2008</small>
                      </p>
                      <p>
                        Ho imparato le basi dei User Experience, Psicologia
                        della Comunicazione e Cognitivismo, Programmazione
                        ActionScript3
                      </p>
                    </div>
                    <div className="position-relative mb-4">
                      <h5 className="font-weight-bold mb-1">UX Designer</h5>
                      <p className="mb-2">
                        <strong>Fastweb Digital Academy</strong> |{" "}
                        <small>2020</small>
                      </p>
                      <p>Corso di aggiornamento con tool Figma</p>
                    </div>
                    <div className="position-relative mb-4">
                      <h5 className="font-weight-bold mb-1">React Front-end</h5>
                      <p className="mb-2">
                        <strong>Tree</strong> | <small>2021</small>
                      </p>
                      <p>
                        Corso 240 ore con certificazione. Conoscenze acquisite
                        sull'utilizzo di GIT e React.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="mb-4">My Top Expericence</h3>
                  <div className="border-left border-primary pt-2 pl-4 ml-2">
                    <div className="position-relative mb-4">
                      <h5 className="font-weight-bold mb-1">
                        Junior Front-end
                      </h5>
                      <p className="mb-2">
                        <strong>Vodafone (Alkemy)</strong> | <small>2018</small>
                      </p>
                      <p>
                        Creazione codice delle pagine per l'e-commerce sezione
                        linea fissa. Creazione del codice per le newsletter
                        interne ai dipendenti sezione Happy Friday.
                      </p>
                    </div>
                    <div className="position-relative mb-4">
                      <h5 className="font-weight-bold mb-1">
                        Front-end developer
                      </h5>
                      <p className="mb-2">
                        <strong>Innonation</strong> | <small>2022</small>
                      </p>
                      <p>
                        Progetti per la pubblica amministrazione. Realizzazione
                        codice di dashboard per l'utente su Vue o Django.
                        Miglioramento UX del flow di registrazione e
                        rinfrescamento della UI per un progetto di registrazione
                        e profilo SPID.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End of Qualification  */}
        </Row>

        <Row>
          {/* Section Title  */}
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase"
              style={{
                textShadow: "0 0 5px #005190",
                color: "#ffffff",
                fontWeight: "900",
              }}
            >
              Skills
            </h1>
            <h2 className="position-absolute text-primary">Hard Skills</h2>
          </div>
          {/* End of Section Title  */}

          {/* Skills */}
          <div className="col-md-10 offset-md-1 features-holder">
            <div className="row">
              {/* Skills Item */}
              <div className="col-md-4 col-sm-12 text-center mt-4">
                <div
                  className="shadow border rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4"></div>
                  <h4>Front-end Developer</h4>
                  <p>
                    Creazione di siti e app con JavaScript, React e JQuery.
                    Lavoro in team con GIT da powershell, e preferibilmente
                    GitLab.
                  </p>
                </div>
              </div>
              {/* End of Skills Item */}
              {/* Skills Item */}
              <div className="col-md-4 col-sm-12 text-center mt-4">
                <div
                  className="shadow border rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4"></div>
                  <h4>Custom templates</h4>
                  <p>
                    Template personalizzati HTML5 + CSS3 per WordPress,
                    newsletter e landing pages.
                  </p>
                </div>
              </div>
              {/* End of Skills Item */}
              {/* Skills Item */}
              <div className="col-md-4 col-sm-12 text-center mt-4">
                <div
                  className="shadow border rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4"></div>
                  <h4>Newsletter Developer</h4>
                  <p>
                    Posso gestire le newsletter a livello UX + UI e developer.
                    Creo la struttura di newsletter responive, animate e con
                    struttura personalizzata.
                  </p>
                </div>
              </div>
              {/* End of Skills Item */}

              {/* Skills Item */}
              <div className="col-md-4 col-sm-12 text-center mt-4">
                <div
                  className="shadow border rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4"></div>
                  <h4>Smart Work</h4>
                  <p>
                    Ho esperienza di AGILE SCRUM in team Vodafone e Smart Work
                    Leroy Merlin. Tool: JIRA - Slack - Trello.
                  </p>
                </div>
              </div>
              {/* End of Skills Item */}
              {/* Skills Item */}
              <div className="col-md-4 col-sm-12 text-center mt-4">
                <div
                  className="shadow border rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4"></div>
                  <h4>Bootstrap</h4>
                  <p>
                    Ho conoscenze di Bootstrap 5 e precedenti, Bootstrap Italia
                    (per pubblica amministrazione).
                  </p>
                </div>
              </div>
              {/* End of Skills Item */}
              {/* Skills Item */}
              <div className="col-md-4 col-sm-12 text-center mt-4">
                <div
                  className="shadow border rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4"></div>
                  <h4>Gestione CMS</h4>
                  <p>
                    Posso progettare ed installare un sito WordPress. Ho gestito
                    siti eCommerce in Prestashop e Magento.
                  </p>
                </div>
              </div>
              {/* End of Skills Item */}
              {/* Skills Item */}
              <div className="col-md-4 col-sm-12 text-center mt-4">
                <div
                  className="shadow border rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4"></div>
                  <h4>UX / UI Siti Web</h4>
                  <p>
                    Ti serve strutturare il tuo sito sencondo la visione di User
                    Experience o una grafica personalizzata del tuo sito? Posso
                    farlo!
                  </p>
                </div>
              </div>
              {/* End of Skills Item */}
            </div>
          </div>
          {/* End of Skills */}
        </Row>
      </Container>
    </>
  );
}

import { Container, Row } from "react-bootstrap";
import "../../Components/Products/ProductCard.css";

export default function List() {
  return (
    <>
      <Container>
        <Row>
          {/* Qualification Start */}
          <div className="container-fluid py-5" id="qualification">
            <div className="container">
              <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white">Quality</h1>
                <h1 className="position-absolute text-uppercase text-primary">
                  Education & Expericence
                </h1>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3 className="mb-4">My Education</h3>
                  <div className="border-left border-primary pt-2 pl-4 ml-2">
                    <div className="position-relative mb-4">
                      <i className="far fa-dot-circle text-primary position-absolute"></i>
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
                      <i className="far fa-dot-circle text-primary position-absolute"></i>
                      <h5 className="font-weight-bold mb-1">UX Designer</h5>
                      <p className="mb-2">
                        <strong>Fastweb Digital Academy</strong> |{" "}
                        <small>2020</small>
                      </p>
                      <p>Corso di aggiornamento con tool Figma</p>
                    </div>
                    <div className="position-relative mb-4">
                      <i className="far fa-dot-circle text-primary position-absolute"></i>
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
                      <i className="far fa-dot-circle text-primary position-absolute"></i>
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
                      <i className="far fa-dot-circle text-primary position-absolute"></i>
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
          <div className="title-wrap mb-5" data-aos="fade-up">
            <h2 className="section-title">Hard Skills</h2>
          </div>
          {/* End of Section Title  */}

          {/* Skills */}
          <div className="col-md-10 offset-md-1 features-holder">
            <div className="row">
              {/* Skills Item */}
              <div className="col-md-4 col-sm-12 text-center mt-4">
                <div
                  className="shadow rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4">
                    <i className="lnr lnr-cog fs-40"></i>
                  </div>
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
                  className="shadow rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4">
                    <i className="lnr lnr-cog fs-40"></i>
                  </div>
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
                  className="shadow rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4">
                    <i className="lnr lnr-cog fs-40"></i>
                  </div>
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
                  className="shadow rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4">
                    <i className="lnr lnr-cog fs-40"></i>
                  </div>
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
                  className="shadow rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4">
                    <i className="lnr lnr-cog fs-40"></i>
                  </div>
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
                  className="shadow rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4">
                    <i className="lnr lnr-cog fs-40"></i>
                  </div>
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
                  className="shadow rounded feature-item p-4 mb-4"
                  data-aos="fade-up"
                >
                  <div className="my-4">
                    <i className="lnr lnr-cog fs-40"></i>
                  </div>
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

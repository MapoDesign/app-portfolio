import { Container, Row } from "react-bootstrap";
import "../../Components/Products/ProductCard.css";

export default function List() {
  return (
    <>
      <Container>
        <Row>
          {/* Section Title  */}
          <div className="title-wrap mb-5" data-aos="fade-up">
            <h2 className="section-title">Curriculum Vitae</h2>
            <p className="section-sub-title">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. <br /> pharetra augue. Donec id elit non mi.
            </p>
          </div>
          {/* End of Section Title  */}
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

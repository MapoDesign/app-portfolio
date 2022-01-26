import { Col, Container, Row } from "react-bootstrap";
import SignUpForm from "../../Components/Form/signUpForm";
import '../../Components/Products/ProductCard.css';

export default function List(){
    return <>
        <header id="slider" className="App-header">
            <div class="text-content">
                <h3>Benvenuto! Io sono</h3>
                <h1>Elisa Resmini</h1>
            </div>
        </header>
        <Container>
            <Row>
                <h1>Curriculum</h1>
            </Row>
        
            <Row>
                <h2>Hard Skills</h2>
                <div className="product-card">
                    <h3>Front-end Developer</h3>
                    <p>Creazione di siti e app con JavaScript, React e JQuery. Lavoro in team con GIT da powershell, e preferibilmente GitLab.</p>
                </div>
                
                <div className="product-card">
                    <h3>Custom templates</h3>
                    <p>Template personalizzati HTML5 + CSS3 per WordPress, newsletter e landing pages.</p>
                </div>

                <div className="product-card">
                    <h3>Newsletter Developer</h3>
                    <p>Posso gestire le newsletter a livello UX + UI e developer. Creo la struttura di newsletter responive, animate e con struttura personalizzata.</p>
                </div>
                <div className="product-card">
                    <h3>Smart Work</h3>
                    <p>Ho esperienza di AGILE SCRUM in team Vodafone e Smart Work Leroy Merlin. Tool: JIRA - Slack - Trello.</p>
                </div>
                <div className="product-card">
                    <h3>Bootstrap</h3>
                    <p>Ho conoscenze di Bootstrap e Bootstrap Italia (per pubblica amministrazione), questo sito ad esempio è creato così.</p>
                </div>
                <div className="product-card">
                    <h3>Gestione CMS</h3>
                    <p>Posso progettare ed installare un sito WordPress. Ho gestito siti eCommerce in Prestashop e Magento. Drupal COMING SOON!</p>
                </div>
                <div className="product-card">
                    <h3>UX / UI Siti Web</h3>
                    <p>Ti serve una grafica personalizzata del tuo sito? Posso farlo!</p>
                </div>
                <div className="product-card">
                    <h3>Adobe CC</h3>
                    <p>Photoshop, Illustrator, Indesign, Premiere, XD. In possesso di utenza personale di Adobe.</p>
                </div>
            </Row>

        
    </Container>
    </>
    
}
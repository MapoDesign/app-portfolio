import {
  IoLogoReact,
  IoLogoHtml5,
  IoMailOutline,
  IoLogoRss,
  IoLogoCss3,
  IoLogoWordpress,
  IoPersonOutline,
} from "react-icons/io5";

export const skillsCard = [
  {
    title: "Front-end Developer",
    icon: <IoLogoReact className="icon card-icon"></IoLogoReact>,
    text: "Creazione di siti e app con JavaScript e React. Lavoro in team con GIT da powershell.",
  },
  {
    title: "Custom templates",
    icon: <IoLogoHtml5 className="icon card-icon"></IoLogoHtml5>,
    text: "Template personalizzati HTML5 + CSS3 per WordPress, newsletter e landing pages.",
  },
  {
    title: "Newsletter Developer",
    icon: <IoMailOutline className="icon card-icon"></IoMailOutline>,
    text: "Posso gestire le newsletter a livello UX + UI e developer. Creo la struttura di newsletter responsive, animate e con struttura personalizzata.",
  },
  {
    title: "Smart Work",
    icon: <IoLogoRss className="icon card-icon"></IoLogoRss>,
    text: "Ho esperienza di AGILE SCRUM in team Vodafone e Smart Work Leroy Merlin. Tool: JIRA - Slack - Trello.",
  },
  {
    title: "Bootstrap",
    icon: <IoLogoCss3 className="icon card-icon"></IoLogoCss3>,
    text: "Uso preferibilmente come libreria di stile Bootstrap 5 e precedenti, Bootstrap Italia (per pubblica amministrazione). Utilizzo regolarmente CSS e ho conoscenze di SASS",
  },
  {
    title: "Gestione CMS",
    icon: <IoLogoWordpress className="icon card-icon"></IoLogoWordpress>,
    text: "Posso progettare ed installare un sito WordPress. Ho gestito siti eCommerce in Prestashop e Magento.",
  },
  {
    title: "UX / UI Siti Web",
    icon: <IoPersonOutline className="icon card-icon"></IoPersonOutline>,
    text: "Ti serve strutturare il tuo sito sencondo la visione di User Experience o una grafica personalizzata del tuo sito? Posso farlo!",
  },
];

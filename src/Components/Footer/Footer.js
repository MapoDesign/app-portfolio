import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="row">
          <div className="col">
            <h4 className="footer-text">
              Copyright &copy; 2023 App created by{" "}
              <a href="https://mapodesign.com" className="brand-color">
                ElisaResmini
              </a>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

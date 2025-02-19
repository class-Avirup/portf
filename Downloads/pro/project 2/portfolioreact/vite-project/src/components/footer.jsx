import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Avirup Das</h1>
              <span className="footer__subtitle">Software Development</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              <a
                href="https://www.facebook.com/prashanna.drashan"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/prashanna01/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-instagram"></i>
              </a>
              <a
                href="https://twitter.com/prashanna01"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-twitter-alt"></i>
              </a>
            </div>
          </div>
         
        </div>
      </footer>
    </div>
  );
};

export default Footer;

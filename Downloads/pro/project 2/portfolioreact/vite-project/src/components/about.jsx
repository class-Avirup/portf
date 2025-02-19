import React from "react";
import "./about.css";
const About = () => {
  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img
            src="packages/images/pras-2.jpeg"
            alt=""
            className="about__img"
          />
          <div className="about__data">
            <p className="about__description">
              Data analyst, with extensive knowledge and years of experience,
              working in Digital banking technologies and other data analitical
              tools, delivering quality work.
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">03+</span>
                <span className="about__info-name">
                  Years <br /> experience
                </span>
              </div>
              <div>
                <span className="about__info-title">05+</span>
                <span className="about__info-name">
                  Completed <br /> certifications
                </span>
              </div>
              <div>
                <span className="about__info-title">02+</span>
                <span className="about__info-name">
                  companies
                  <br />
                  worked
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <a
                download=""
                href="packages/pdf/"
                className="button button--flex"
              >
                Download CV<i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default About;

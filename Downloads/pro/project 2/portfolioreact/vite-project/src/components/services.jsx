import React from "react";
import "./services.css";
const Services = () => {
  return (
    // <div> <!--==================== SERVICES ====================-->
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {/* <!--==================== SERVICES 1 ====================-->   */}
        <div className="services__content">
          <div>
            <i className="uil uil-analytics skills__icon"></i>
            <h3 className="services__title">
              Data Analyst
              <br />
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View more
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Data Analyst <br />
              </h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I analize data systems.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Automating information retrieval.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    Systematically applying statistical and logical techniques.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    Visualizing graphs, charts and preparing reports and
                    dashboards.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!--==================== SERVICES 2 ====================-->  */}
        <div className="services__content">
          <div>
            <i className="uil uil-money-bill skills__icon"></i>
            <h3 className="services__title">
              Programmer
              <br />{" "}
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View more
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
               Programmer
                <br />
              </h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    Assiting both personal and commercial clients with financial
                    questions and needs.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Maintain customer acoounts and help resolve disputes.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    Refer customers to loan officers or other financial
                    specialist.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>
                    Systematically applying statistical and logical techniques.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!--==================== SERVICES 3 ====================--> */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Web Developer
              <br />
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View more
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Web Developer
                <br />
              </h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Webpage development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create Ux element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Well trained in WordPress.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

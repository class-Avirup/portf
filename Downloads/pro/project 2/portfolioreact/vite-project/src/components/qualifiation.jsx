import React, { useState } from "react";
import "./qualification.css";
const Qualifiation = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleDivVisibility = () => {
    setShowLogin(!showLogin);
  };
  return (
    // <div><!--==================== QUALIFICATION ====================-->
    <section className="qualification__section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <button onClick={toggleDivVisibility} className="button_quali">
            {`${showLogin ? "Education" : "Work"}`}
          </button>
        </div>
        <div className={` ${showLogin ? "blocko" : "hiddeno"}`}>
          <div className="qualification__sections">
            {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
            <div
              className="qualification__content qualification__active"
              data-content
              id="education"
            >
              {/* <!--==================== QUALIFICATION 1 ====================-->  */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Secondary Education </h3>
                  <span className="qualification__subtitle">
                  St Joseph's School,KPA
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2007 - 2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 2 ====================-->  */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">High Secondary Education</h3>
                  <span className="qualification__subtitle">
                    Kalyani Central Model School
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2020-2022
                  </div>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 3 ====================-->  */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Bachelor Of Technology
                  </h3>
                  <span className="qualification__subtitle">
                    National Institute Of Technology,Durgapur
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2022-2026
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 4 ====================-->  */}
              
            </div>
          </div>
        </div>
        <div className={` ${showLogin ? "hiddeno" : "blocko"}`}>
          {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
          <div className="qualification__content" data-content id="work">
            {/* <!--==================== QUALIFICATION 1 ====================-->  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifiation;

import  { useState } from "react";
import "./skill.css";
const Skill = () => {
  const [showSkills, setShowSkills] = useState(false);

  const toggleDivVisibility = () => {
    setShowSkills(!showSkills);
  };

  const [showSkillst, setShowSkillst] = useState(false);

  const toggleDivVisibilityt = () => {
    setShowSkillst(!showSkillst);
  };
  const [showSkillsth, setShowSkillsth] = useState(false);

  const toggleDivVisibilityth = () => {
    setShowSkillsth(!showSkillsth);
  };
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <div>
            {/* <!--==================== SKILL-1 ====================--> */}
            <div className=" skills__open">
              <div onClick={toggleDivVisibility} className="skills__header">
                <i className="uil uil-analytics skills__icon"></i>
                <div>
                  <h1 className="skills__title">Programmer</h1>
                  <span className="skills__subtitle">for 1 year</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>
              <div className={` ${showSkills ? "blockogrid" : "hiddeno"}`}>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">C++</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__python"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">SQL</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__tab"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Golang</h3>
                    <span className="skills__number">60%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__sql"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Open source</h3>
                    <span className="skills__number">50%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__google"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--==================== SKILLS 2 ====================--> */}
            <div className=" skills__close1">
              <div className="skills__header" onClick={toggleDivVisibilityt}>
                <i className="uil uil-money-bill skills__icon"></i>
                <div>
                  <h1 className="skills__title">Designer</h1>
                  <span className="skills__subtitle">More than 2 years</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>
              <div className={` ${showSkillst ? "blockogrid" : "hiddeno"}`}>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Figma</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__bank"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Adobe Illustrator</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__counter"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Photoshop</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__google"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">AfterEffects</h3>
                    <span className="skills__number">30%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__office"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <!--==================== SKILLS 3 ====================--> */}
            <div className=" skills__close2">
              <div className="skills__header" onClick={toggleDivVisibilityth}>
                <i className="uil uil-brackets-curly skills__icon"></i>
                <div>
                  <h1 className="skills__title">Web Developer</h1>
                  <span className="skills__subtitle">More than 2 years</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>
              <div className={` ${showSkillsth ? "blockogrid" : "hiddeno"}`}>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Reactjs</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Express</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__css"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">MongoDB</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Tailwind CSS</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__wordpress"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;

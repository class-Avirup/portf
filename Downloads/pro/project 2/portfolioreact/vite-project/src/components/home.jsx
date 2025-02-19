
import "./home.css";
const Home = () => {
  return (
    <div>
      {" "}
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/avirup-das-9a6177273/"
                target="_blank"
                className="home__social-icon"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              
              <a
                href="https://github.com/class-Avirup"
                target="_blank"
                className="home__social-icon"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>

            <div className="home__img">
              <img src="vite-project\src\assets\WhatsApp Image 2024-05-14 at 10.56.56_c8c5015d.jpg" alt="" className="home__img-img"  />
            </div>

            <div className="home__data">
              <h1 className="home__title">Hi, I'am Avirup</h1>
              <h3 className="home__subtitle">Web developer</h3>
              <p className="home__description">
                National Institute Of Technology,Durgapur
              </p>
            </div>
          </div>

          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt home__scroll-mouse"></i>
              <span className="home__scroll-name">Scroll Down</span>
              <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

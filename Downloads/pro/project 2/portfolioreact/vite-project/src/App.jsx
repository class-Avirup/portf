import { useState } from "react";
import "./App.css";
import Nav from "./components/nav.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Skill from "./components/skill.jsx";
import Qualifiation from "./components/qualifiation.jsx";
import Portfolio from "./components/portfolio.jsx";
import Services from "./components/services.jsx";


import Footer from "./components/footer.jsx";

function App() {
  const [theme, setTheme] = useState(false);
  const toggleDivVisibility = () => {
    setTheme(!theme);
  };
  const themeClassName = `${theme ? "darkTheme" : "lightTheme"}`;
  return (
    <>
      <div className={themeClassName}>
        <Nav toggleTheme={toggleDivVisibility} />

        <Home />

        <About />

        <Skill />
        <Qualifiation />
        <Portfolio />
        <Services />
       
        
        <Footer />
      </div>
    </>
  );
}

export default App;

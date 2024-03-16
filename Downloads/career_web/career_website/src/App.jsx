import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Features from "./components/Features";
import Secondsection from "./components/Secondsection";
import CarouselComponent from "./components/Carousel";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <CarouselComponent />
      <Section />
      <Secondsection />
      <Features />
    </>
  );
}

export default App;

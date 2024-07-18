import About from "./components/About"
import Hero from "./components/Hero"
import SiteHeader from "./components/Site-header"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div>
      <SiteHeader />
      <Hero />
      <About />
    </div>
  )
}

export default App

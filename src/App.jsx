import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from "./components/About"
import Experience from "./components/Experience";
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import SiteHeader from "./components/Site-header"
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      {/* <SiteHeader /> */}
      {/* <Hero /> */}
      <About />
      <Experience />
      <Projects />
      <ScrollToTop />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App

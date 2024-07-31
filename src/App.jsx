import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SiteHeader from "./components/Site-header";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const headerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,
      mirror: false,
    });

    const handleScroll = (e) => {
      if (!headerRef.current) return;
      const targetId = e.target.getAttribute('href')?.substring(1);
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
    
      e.preventDefault();
    
      // Aniq offset qo'llash
      const headerHeight = 70; // header balandligini o'rnating
    
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    };
    
    

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <div>
      <SiteHeader headerRef={headerRef} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ScrollToTop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import * as React from 'react'

import About from './about/About';
import Contact from './contact/contact';
import Footer from './footer/Footer';
import Hero from './home/Hero';
import Nav from './home/Nav';
import Projects from './projects/Projects';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Hero />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
 
export default Portfolio;

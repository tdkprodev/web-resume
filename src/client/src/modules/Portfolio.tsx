import * as React from "react";

import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Home } from "./home";
import { Projects } from "./projects";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;

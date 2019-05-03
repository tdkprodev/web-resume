import { About } from "@modules/about/about";
import { Contact } from "@modules/contact/contact";
import { Footer } from "@modules/footer/footer";
import { Home } from "@modules/home/home";
import { Projects } from "@modules/projects";
import * as React from "react";

export const Portfolio = () => {
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

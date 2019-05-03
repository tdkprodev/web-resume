// import { About } from "@modules/about";
import { Contact } from "@modules/contact";
import { Footer } from "@modules/footer";
import { Home } from "@modules/home";
import { Projects } from "@modules/projects";
import * as React from "react";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <Home />
      {/* <About /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

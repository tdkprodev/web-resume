import { About } from "@modules/about";
import { Contact } from "@modules/contact";
import { Footer } from "@modules/footer";
import { Home } from "@modules/home";
import { Projects } from "@modules/projects";
// import { RecentWork } from "@modules/recent-work/recent-work";
import * as React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Home />
      <About />
      {/* <RecentWork /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;

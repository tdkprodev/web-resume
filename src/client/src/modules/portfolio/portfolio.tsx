import * as React from 'react';
import { About } from '../../modules/about';
import { Contact } from '../../modules/contact';
import { Footer } from '../../modules/footer';
import { Home } from '../../modules/home';
import { Projects } from '../../modules/projects';
import { ResponsiveDrawer } from '../responsive-drawer';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <ResponsiveDrawer>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ResponsiveDrawer>
    </div>
  );
};

export default Portfolio;

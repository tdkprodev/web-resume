import * as React from "react";
import { Hero } from "../../modules/home/components/hero";
import { Nav } from "../../modules/home/components/nav";

class Home extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Hero />
        <Nav />
      </React.Fragment>
    );
  }
}

export default Home;

import Hero from "@modules/home/components/hero";
import Nav from "@modules/home/components/nav";
import * as React from "react";

export class Home extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Hero />
        <Nav />
      </React.Fragment>
    );
  }
}

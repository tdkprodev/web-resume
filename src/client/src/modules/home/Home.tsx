import Hero from "@modules/home/components/Hero";
import Nav from "@modules/home/components/Nav";
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

import * as React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

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

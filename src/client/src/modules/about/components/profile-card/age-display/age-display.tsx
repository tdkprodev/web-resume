import { getAge } from "@utils/getAge";
import * as React from "react";

class AgeDisplay extends React.Component {
  public state = {
    age: ""
  };

  public componentWillMount() {
    // tslint:disable-next-line:no-console
    const dob = new Date("Jan 01, 1993 00:00:00");
    setInterval(() => {
      const myAge = getAge(dob);
      // tslint:disable-next-line:no-console
      console.log("myAge = ", myAge);
    }, 1000);
  }

  public render() {
    return <React.Fragment>asdf</React.Fragment>;
  }
}

export default AgeDisplay;

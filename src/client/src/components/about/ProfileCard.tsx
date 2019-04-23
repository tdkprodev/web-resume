import * as React from "react";

import { Tooltip, Typography } from "@material-ui/core";
import myPhoto from "../../images/prophoto.png";

const myGreetings = [
  "Hello there!",
  "Thanks for browsing.",
  "I'm glad you're here.",
  "Did you know birds fly south?"
];

interface IState {
  greeting: string;
  greetingIntervalId: number;
}

class ProfileCard extends React.Component<{}, IState> {
  public state = {
    greeting: myGreetings[0],
    greetingIntervalId: 0
  };

  public componentDidMount() {
    const rand = Math.floor(Math.random() * myGreetings.length);
    this.setState({
      greeting: myGreetings[rand]
    });

    const greetingIntervalId = window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * myGreetings.length);
      this.setState({
        greeting: myGreetings[randomIndex]
      });
    }, 5000);

    this.setState(() => ({
      greetingIntervalId
    }));
  }

  public componentWillUnmount() {
    window.clearInterval(this.state.greetingIntervalId);
  }

  public render() {
    const { greeting } = this.state;
    return (
      <div className="profile__description">
        <div className="profile__photo circle animateFromTop">
          <Tooltip title={greeting} placement="right-start">
            <img className="image circle" src={myPhoto} alt="My Photo" />
          </Tooltip>
        </div>
        <Typography className="profile__text animateFromBottom">
          I'm a web developer from Charlotte, NC. I'm passionate about the web
          technologies that connect us all.
        </Typography>
      </div>
    );
  }
}

export default ProfileCard;

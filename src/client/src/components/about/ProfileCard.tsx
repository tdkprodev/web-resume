import {
  createStyles,
  Tooltip,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import * as React from "react";
import myPhoto from "../../images/prophoto.png";

const myGreetings = [
  "Hello there!",
  "Thanks for browsing.",
  "I'm glad you're here.",
  "Did you know birds fly south?"
];

const styles = createStyles({
  customTip: {
    alignItems: "center",
    display: "flex",
    minHeight: 50
  }
});

interface IState {
  greeting: string;
  greetingIntervalId: number;
}

interface IProps extends WithStyles<typeof styles> {}

class ProfileCard extends React.Component<IProps, IState> {
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
    const { classes } = this.props;
    return (
      <div className="profile__description">
        <div className="profile__photo circle animateFromTop">
          <Tooltip
            title={greeting}
            placement="right-start"
            classes={{ tooltip: classes.customTip }}
          >
            <img className="image circle" src={myPhoto} alt="My Photo" />
          </Tooltip>
        </div>
        <Typography className="profile__text animateFromBottom">
          I'm a web developer from Charlotte, NC. I'm passionate about the web
          technologies that connects us all.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileCard);

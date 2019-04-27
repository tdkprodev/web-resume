import {
  createStyles,
  Fab,
  Grow,
  Theme,
  Tooltip,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import * as React from "react";
import myPhoto from "../../images/prophoto.png";

const myGreetings = [
  "Hello there!",
  "Thanks for browsing.",
  "I'm glad you're here.",
  "Queen city!!!",
  "Did you know birds fly south?"
];

const styles = (theme: Theme) =>
  createStyles({
    customTip: {
      alignItems: "center",
      display: "flex",
      minHeight: 50
    },
    margin: {
      margin: theme.spacing.unit
    },
    positionAbsolute: {
      position: "absolute"
    }
  });

interface IState {
  greeting: string;
  hovering: boolean;
  greetingIntervalId: number;
}

interface IProps extends WithStyles<typeof styles> {}

class ProfileCard extends React.Component<IProps, IState> {
  public state = {
    greeting: myGreetings[0],
    greetingIntervalId: 0,
    hovering: false
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

  public handleMouseOver = () => {
    this.setState(() => ({
      hovering: true
    }));
  };

  public handleClick = () => {
    this.setState(() => ({
      hovering: false
    }));
  };

  public render() {
    const { greeting, hovering } = this.state;
    const { classes } = this.props;
    return (
      <div className="profile__description">
        <div className="profile__photo circle animateFromTop">
          <Tooltip
            title={greeting}
            placement="right-start"
            classes={{ tooltip: classes.customTip }}
          >
            <div className="image circle">
              <img
                onMouseOver={this.handleMouseOver}
                onClick={this.handleClick}
                className="image circle"
                src={myPhoto}
                alt="My Photo"
              />
            </div>
          </Tooltip>
          {hovering ? (
            <React.Fragment>
              <Grow
                in={hovering}
                style={{
                  transform: "rotate(300deg) translate(12rem) rotate(-300deg)",
                  transformOrigin: "0 0 0"
                }}
                {...(hovering ? { timeout: 1000 } : {})}
              >
                <Fab
                  color="primary"
                  aria-label="test"
                  size="small"
                  className={classes.positionAbsolute}
                >
                  <AddIcon />
                </Fab>
              </Grow>
              <Grow
                in={hovering}
                style={{
                  transform: "rotate(0deg) translate(12rem) rotate(-0deg)",
                  transformOrigin: "0 0 0"
                }}
                {...(hovering ? { timeout: 1000 } : {})}
              >
                <Fab
                  color="primary"
                  aria-label="test"
                  size="small"
                  className={classes.positionAbsolute}
                >
                  <AddIcon />
                </Fab>
              </Grow>
              <Grow
                in={hovering}
                style={{
                  transform: "rotate(60deg) translate(12rem) rotate(-60deg)",
                  transformOrigin: "0 0 0"
                }}
                {...(hovering ? { timeout: 1000 } : {})}
              >
                <Fab
                  color="primary"
                  aria-label="test"
                  size="small"
                  className={classes.positionAbsolute}
                >
                  <AddIcon />
                </Fab>
              </Grow>
            </React.Fragment>
          ) : null}
        </div>
        <Typography className="profile__text animateFromBottom">
          I'm a developer from Charlotte, North Carlolina. I'm passionate about
          the web technologies that connects us all.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileCard);

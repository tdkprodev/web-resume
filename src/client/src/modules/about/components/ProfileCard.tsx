import ArrowTooltip from "@components/ArrowTooltip";
import SocialLink from "@components/SocialLinks";
import craftingSkillPhoto from "@images/icons/Crafting_Skill.png";
import energyPhoto from "@images/icons/Energy.png";
import fortidudePhoto from "@images/icons/Fortitude.png";
import healthPhoto from "@images/icons/Health.png";
import meleeDamagePhoto from "@images/icons/Melee_Damage.png";
import movementSpeedPhoto from "@images/icons/Movement_Speed.png";
import myPhoto from "@images/propho.jpg";
import {
  Avatar,
  createStyles,
  Divider,
  Fab,
  Grow,
  Theme,
  Tooltip,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import * as React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const myGreetings = [
  "Hey, what's up?",
  "Thanks for viewing.",
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
    },
    skillsPointAttribute: {
      display: "flex"
    }
  });

interface IState {
  greeting: string;
  leaveOpen: boolean;
  hovering: boolean;
  greetingIntervalId: number;
  leaveOpenInterval: number;
}

interface IProps extends WithStyles<typeof styles> {}

interface IAttributeProps extends WithStyles<typeof styles> {
  hovering: boolean;
  timeout: number;
  ariaLabel?: string;
  imgSrc: string;
  angle: number;
  distance?: number;
  title?: string;
  points?: number;
}

interface ISkillsPointProps extends WithStyles<typeof styles> {
  title?: string;
  points?: number;
}

const SkillsPoint = withStyles(styles)((props: ISkillsPointProps) => {
  const { classes, points = 100, title = "placeholder" } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" align="center">
        {title}
      </Typography>
      <Divider variant="middle" />
      <div className={classes.skillsPointAttribute}>
        <Typography variant="overline">Skill point: </Typography>
        <Typography variant="overline">{points}</Typography>
      </div>
    </React.Fragment>
  );
});

const Attribute = withStyles(styles)((props: IAttributeProps) => {
  const {
    angle,
    distance = 10,
    hovering,
    timeout,
    ariaLabel = "",
    imgSrc,
    title = "placeholder",
    points = 100
  } = props;

  return (
    <Grow
      in={hovering}
      style={{
        transform: `rotate(${angle}deg) translate(${distance}rem) rotate(-${angle}deg)`,
        transformOrigin: "0 0 0"
      }}
      {...(hovering ? { timeout } : {})}
    >
      <Fab
        aria-label={ariaLabel}
        size="small"
        className={props.classes.positionAbsolute}
      >
        <ArrowTooltip
          title={<SkillsPoint title={title} points={points} />}
          placement="right-start"
        >
          <Avatar src={imgSrc} />
        </ArrowTooltip>
      </Fab>
    </Grow>
  );
});

class ProfileCard extends React.Component<IProps, IState> {
  public state = {
    greeting: myGreetings[0],
    greetingIntervalId: 0,
    hovering: false,
    leaveOpen: false,
    leaveOpenInterval: 0
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
    window.clearTimeout(this.state.leaveOpenInterval);
    this.setState(() => ({
      hovering: true,
      leaveOpen: true
    }));
  };

  public handleMouseLeave = () => {
    this.setState(() => ({
      leaveOpenInterval: window.setTimeout(() => {
        this.setState(() => ({
          leaveOpen: false
        }));
      }, 7000)
    }));
  };

  public handleClick = () => {
    this.setState(() => ({
      hovering: false
    }));
  };

  public renderAttributes = (hovering: boolean) => (
    <React.Fragment>
      <Attribute
        angle={240}
        hovering={hovering}
        timeout={3500}
        imgSrc={craftingSkillPhoto}
        title="Crafting Skill"
      />
      <Attribute
        angle={210}
        hovering={hovering}
        timeout={3000}
        imgSrc={energyPhoto}
        title="Energy"
      />
      <Attribute
        angle={180}
        hovering={hovering}
        timeout={2500}
        imgSrc={fortidudePhoto}
        title="Fortitude"
      />
      <Attribute
        angle={150}
        hovering={hovering}
        timeout={2000}
        imgSrc={healthPhoto}
        title="Health"
      />
      <Attribute
        angle={120}
        hovering={hovering}
        timeout={1500}
        imgSrc={meleeDamagePhoto}
        title="Melee"
      />
      <Attribute
        angle={90}
        hovering={hovering}
        timeout={1000}
        imgSrc={movementSpeedPhoto}
        title="Agility"
      />
    </React.Fragment>
  );

  public render() {
    const { greeting, hovering, leaveOpen } = this.state;
    const { classes } = this.props;
    return (
      <div className="profile__description">
        <div className="profile__photo circle animateFromTop">
          <Tooltip
            open={leaveOpen}
            title={greeting}
            placement="right-start"
            classes={{ tooltip: classes.customTip }}
          >
            <div className="image circle">
              <img
                onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseLeave}
                onClick={this.handleClick}
                className="image circle"
                src={myPhoto}
                alt="My Photo"
              />
            </div>
          </Tooltip>
          {hovering ? this.renderAttributes(hovering) : null}
        </div>
        <Typography align="center" variant="h4">
          Thomas Kay
        </Typography>
        <Typography align="center" variant="caption">
          Web Developer
        </Typography>
        <Typography align="center" variant="overline">
          <FaMapMarkerAlt />
          Charlotte, NC
        </Typography>
        <Divider variant="middle" />
        <SocialLink />
        <Typography className="profile__text animateFromBottom">
          I'm a developer from Charlotte, North Carlolina. I'm passionate about
          the web technologies that connects us all.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileCard);

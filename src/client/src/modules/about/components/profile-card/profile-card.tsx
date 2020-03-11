import { SocialLinks } from '../../../../components/social-links';
import craftingSkillPhoto from '../../../../images/icons/crafting-skill.png';
import energyPhoto from '../../../../images/icons/energy.png';
import fortidudePhoto from '../../../../images/icons/fortitude.png';
import healthPhoto from '../../../../images/icons/health.png';
import meleeDamagePhoto from '../../../../images/icons/melee-damage.png';
import movementSpeedPhoto from '../../../../images/icons/movement-speed.png';
/* import myPhoto from '../../../../images/propho.jpg'; */
import {
  createStyles,
  Divider,
  Tooltip,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { AgeDisplay } from './components/age-display';
import { Attribute } from './components/attribute';
import * as React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const myGreetings = [
  `Hey, what's up?`,
  'Thanks for viewing.',
  'Did you know birds fly south?',
];

const styles = () =>
  createStyles({
    customTip: {
      alignItems: 'center',
      display: 'flex',
      minHeight: 50,
    },
  });

interface IState {
  greeting: string;
  leaveOpen: boolean;
  hovering: boolean;
  greetingIntervalId: number;
  leaveOpenInterval: number;
}

type IProps = WithStyles<typeof styles>;

class ProfileCard extends React.Component<IProps, IState> {
  public state = {
    greeting: myGreetings[0],
    greetingIntervalId: 0,
    hovering: false,
    leaveOpen: false,
    leaveOpenInterval: 0,
  };

  public async componentDidMount(): Promise<void> {
    const rand = Math.floor(Math.random() * myGreetings.length);
    this.setState({
      greeting: myGreetings[rand],
    });

    const greetingIntervalId = window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * myGreetings.length);
      this.setState({
        greeting: myGreetings[randomIndex],
      });
    }, 5000);

    this.setState(() => ({
      greetingIntervalId,
    }));
  }

  public componentWillUnmount() {
    window.clearInterval(this.state.greetingIntervalId);
  }

  public handleMouseOver = () => {
    window.clearTimeout(this.state.leaveOpenInterval);
    this.setState(() => ({
      hovering: true,
      leaveOpen: true,
    }));
  };

  public handleMouseLeave = () => {
    this.setState(() => ({
      leaveOpenInterval: window.setTimeout(() => {
        this.setState(() => ({
          leaveOpen: false,
        }));
      }, 7000),
    }));
  };

  public handleClick = () => {
    this.setState(() => ({
      hovering: false,
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
        points={87}
        data={[
          ['Guitar', 'Novice'],
          ['Computer', 'Intermediate'],
        ]}
      />
      <Attribute
        angle={210}
        hovering={hovering}
        timeout={3000}
        imgSrc={energyPhoto}
        points={90}
        title="Energy"
      />
      <Attribute
        angle={180}
        hovering={hovering}
        timeout={2500}
        imgSrc={fortidudePhoto}
        points={85}
        title="Fortitude"
      />
      <Attribute
        angle={150}
        hovering={hovering}
        timeout={2000}
        imgSrc={healthPhoto}
        title="Health"
        points={92}
        data={[['Age', <AgeDisplay key="age" />]]}
      />
      <Attribute
        angle={120}
        hovering={hovering}
        timeout={1500}
        imgSrc={meleeDamagePhoto}
        points={85}
        title="Melee"
      />
      <Attribute
        angle={90}
        hovering={hovering}
        timeout={1000}
        imgSrc={movementSpeedPhoto}
        points={88}
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
                src={''}
                alt="My Avatar"
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
        <SocialLinks />
        <Typography className="profile__text animateFromBottom">
          {`I'm a developer from Charlotte, North Carlolina. I'm passionate about
          the web technologies that connects us all.`}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ProfileCard);

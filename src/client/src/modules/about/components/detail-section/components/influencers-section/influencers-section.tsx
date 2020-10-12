// import { Tooltip } from '../../../../../../components/arrow-tooltip';
import * as React from 'react';
import { AvatarLabel } from '../../../../../../components/avatar-label';
import { Theme, Typography } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import torvaldsPhoto from '../../../../../../images/influencers/torvalds2.jpeg';
import hotzPhoto from '../../../../../../images/influencers/hotz.jpg';
import jobPhoto from '../../../../../../images/influencers/job.jpg';
import kipchogePhoto from '../../../../../../images/influencers/kipchoge3.jpg';
import teslaPhoto from '../../../../../../images/influencers/tesla.jpeg';
import penaPhoto from '../../../../../../images/influencers/pena.jpg';
import gogginsPhoto from '../../../../../../images/influencers/goggins.jpg';
import kobePhoto from '../../../../../../images/influencers/kobe.jpg';

const styles = (theme: Theme) =>
  createStyles({
    arrow: {
      '&::before': {
        borderStyle: 'solid',
        content: '""',
        display: 'block',
        height: 0,
        margin: 'auto',
        width: 0,
      },
      fontSize: 6,
      height: '3em',
      position: 'absolute',

      width: '3em',
    },
    influencersContainer: {
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '5rem',
    },
    subHeading: {
      fontWeight: 600,
      margin: 10,
    },
  });

type IProps = WithStyles<typeof styles>;

class InfluencersSection extends React.Component<IProps> {
  public state = {
    expanded: 'detail-panel',
  };

  public render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography
          className={classes.subHeading}
          gutterBottom={true}
          variant="h4"
          align="center"
        >
          Influencers
        </Typography>
        <div className={classes.influencersContainer}>
          <Tooltip
            title={
              'Intelligence is the ability to avoid doing work, yet getting the work done.'
            }
            interactive={true}
            placement="top"
          >
            <div>
              <AvatarLabel
                alt="Linus Torvalds"
                src={torvaldsPhoto}
                label="Linus Torvalds"
                large={true}
                circle={true}
              />
            </div>
          </Tooltip>
          <Tooltip
            title={
              "I don't hack because of some ideology. I hack because I'm bored."
            }
            interactive={true}
            placement="top"
          >
            <div>
              <AvatarLabel
                alt="George Hotz"
                src={hotzPhoto}
                label="George Hotz"
                large={true}
                circle={true}
              />
            </div>
          </Tooltip>
          <Tooltip
            title={'Think different.'}
            interactive={true}
            placement="top"
          >
            <div>
              <AvatarLabel
                alt="Steve Jobs"
                src={jobPhoto}
                label="Steve Jobs"
                large={true}
                circle={true}
              />
            </div>
          </Tooltip>
          <Tooltip
            title={
              "Don't be the fastest runner in the world. Be the fastest runner in history."
            }
            interactive={true}
            placement="top"
          >
            <div>
              <AvatarLabel
                alt="Eliude Kipchoge"
                src={kipchogePhoto}
                label="Eliude Kipchoge"
                large={true}
                circle={true}
              />
            </div>
          </Tooltip>
          <Tooltip
            title={
              'Great things come from hard work and perseverance. No excuses.'
            }
            interactive={true}
            placement="top"
          >
            <div>
              <AvatarLabel
                alt="Kobe Bryant"
                src={kobePhoto}
                label="Kobe Bryant"
                large={true}
                circle={true}
              />
            </div>
          </Tooltip>
          <Tooltip
            title={
              'Life is and will ever remain an equation incapable of solution, but it contains certain known factors.'
            }
            interactive={true}
            placement="top"
          >
            <div>
              <AvatarLabel
                alt="Nicola Tesla"
                src={teslaPhoto}
                label="Nicola Tesla"
                large={true}
                circle={true}
              />
            </div>
          </Tooltip>
          <Tooltip
            title={'If you choose to do something, attack it.'}
            interactive={true}
            placement="top"
          >
            <div>
              <AvatarLabel
                alt="David Goggins"
                src={gogginsPhoto}
                label="David Goggins"
                large={true}
                circle={true}
              />
            </div>
          </Tooltip>
          <Tooltip
            title={'Just fucking do it!'}
            interactive={true}
            placement="top"
          >
            <div>
              <AvatarLabel
                alt="Dan Pena"
                src={penaPhoto}
                label="Dan Pena"
                large={true}
                circle={true}
              />
            </div>
          </Tooltip>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InfluencersSection);

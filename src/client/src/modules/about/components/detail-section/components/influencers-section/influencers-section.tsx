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
import williamsPhoto from '../../../../../../images/influencers/williams.jpg';

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
              'The man who can drive himself further once the effort gets painful is the man who will win.'
            }
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Linus Torvalds"
              src={torvaldsPhoto}
              label="Linus Torvalds"
              large={true}
              circle={true}
            />
          </Tooltip>
          <Tooltip
            title={
              "I don't hack because of some ideology. I hack because I'm bored."
            }
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="George Hotz"
              src={hotzPhoto}
              label="George Hotz"
              large={true}
              circle={true}
            />
          </Tooltip>
          <Tooltip
            title={'Think different.'}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Steve Job"
              src={jobPhoto}
              label="Steve Job"
              large={true}
              circle={true}
            />
          </Tooltip>
          <Tooltip
            title={
              "Don't be the fastest runner in the world. Be the fastest runner in history."
            }
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Eliude Kipchoge"
              src={kipchogePhoto}
              label="Eliude Kipchoge"
              large={true}
              circle={true}
            />
          </Tooltip>
          <Tooltip
            title={'Don’t hire the most qualified, hire the craziest.'}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Nicola Tesla"
              src={teslaPhoto}
              label="Nicola tesla"
              large={true}
              circle={true}
            />
          </Tooltip>
          <Tooltip title={'Do it!'} interactive={true} placement="top">
            <AvatarLabel
              alt="Art Williams"
              src={williamsPhoto}
              label="Art Williams"
              large={true}
              circle={true}
            />
          </Tooltip>
          <Tooltip
            title={'Just fucking do it!'}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Dan Pena"
              src={penaPhoto}
              label="Dan Pena"
              large={true}
              circle={true}
            />
          </Tooltip>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InfluencersSection);

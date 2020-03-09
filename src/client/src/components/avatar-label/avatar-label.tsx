import { Avatar, Grow, Typography } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { default as classnames } from 'classnames';
import * as React from 'react';

const styles = () =>
  createStyles({
    avatar: {
      height: 100,
      marginBottom: 10,
      padding: 10,
      width: 100,

      '&:hover': {
        backgroundColor: '#f7f6f6',
        transform: 'scale(1.1)',
      },
      '@media (max-width: 1200px)': {
        height: 95,
        width: 95,
      },
      '@media (max-width: 960px)': {
        height: 85,
        width: 85,
      },
    },
    avatarLabelContainer: {
      marginRight: 20,

      '&:hover': {},
    },
    bigAvatar: {
      height: 120,
      marginBottom: 10,
      padding: 10,
      width: 120,

      '&:hover': {
        backgroundColor: '#f7f6f6',
        transform: 'scale(1.1) !important',
      },
      '@media (max-width: 1200px)': {
        height: 110,
        width: 110,
      },
      '@media (max-width: 960px)': {
        height: 100,
        width: 100,
      },
    },
    img: {
      transform: 'scale(.9)',
    },
    imgCircle: {
      borderRadius: '50%',
    },
    larger: {
      height: 150,
      width: 150,
    },
  });

interface IProps extends WithStyles<typeof styles> {
  src: string;
  alt?: string;
  label: string;
  sublabel?: string;
  circle?: boolean;
  large?: boolean;
  larger?: boolean;
}

class AvatarLabel extends React.Component<IProps> {
  public render() {
    const {
      classes,
      src,
      alt = '',
      label = '',
      sublabel = '',
      circle = false,
      large = false,
      larger = false,
    } = this.props;
    return (
      <div className={classes.avatarLabelContainer}>
        <Grow in={true}>
          <Avatar
            classes={{ img: circle ? classes.imgCircle : classes.img }}
            className={classnames(classes.avatar, {
              [classes.bigAvatar]: large,
              [classes.larger]: larger,
            })}
            alt={alt}
            src={src}
          />
        </Grow>
        <Typography variant="h6" align="center">
          {label}
        </Typography>
        <Typography variant="overline" align="center">
          {sublabel}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(AvatarLabel);

import { Avatar, Grow, Theme, Typography } from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      height: 90,
      marginBottom: 10,
      padding: 10,
      width: 90,

      "&:hover": {
        backgroundColor: "#f7f6f6",
        transform: "scale(1.1)"
      },
      "@media (max-width: 1200px)": {
        height: 80,
        width: 80
      },
      "@media (max-width: 960px)": {
        height: 70,
        width: 70
      }
    },
    avatarLabelContainer: {
      marginRight: 20,

      "&:hover": {}
    },
    bigAvatar: {
      height: 120,
      marginBottom: 10,
      padding: 10,
      width: 120,

      "&:hover": {
        backgroundColor: "#f7f6f6",
        transform: "scale(1.1) !important"
      },
      "@media (max-width: 1200px)": {
        height: 110,
        width: 110
      },
      "@media (max-width: 960px)": {
        height: 100,
        width: 100
      }
    },
    img: {
      transform: "scale(.9)"
    },
    imgCircle: {
      borderRadius: "50%"
    }
  });

interface IProps extends WithStyles<typeof styles> {
  src: string;
  alt?: string;
  label: string;
  large?: boolean;
}

class AvatarLabel extends React.Component<IProps> {
  public render() {
    const { classes, src, alt = "", label, large = false } = this.props;
    return (
      <div className={classes.avatarLabelContainer}>
        <Grow in={true}>
          <Avatar
            classes={{ img: large ? classes.imgCircle : classes.img }}
            className={large ? classes.bigAvatar : classes.avatar}
            alt={alt}
            src={src}
          />
        </Grow>
        <Typography variant="h6" align="center">
          {label}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(AvatarLabel);

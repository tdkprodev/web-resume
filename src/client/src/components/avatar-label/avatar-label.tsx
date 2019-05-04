import { Avatar, Grow, Theme, Typography } from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      height: 100,
      marginBottom: 10,
      padding: 10,
      width: 100,

      "&:hover": {
        backgroundColor: "#f7f6f6",
        transform: "scale(1.1)"
      },
      "@media (max-width: 1200px)": {
        height: 85,
        width: 85
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
    img: {
      transform: "scale(.9)"
    }
  });

interface IProps extends WithStyles<typeof styles> {
  src: string;
  alt?: string;
  label: string;
}

class AvatarLabel extends React.Component<IProps> {
  public render() {
    const { classes, src, alt = "", label } = this.props;
    return (
      <div className={classes.avatarLabelContainer}>
        <Grow in={true}>
          <Avatar
            classes={{ img: classes.img }}
            className={classes.avatar}
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

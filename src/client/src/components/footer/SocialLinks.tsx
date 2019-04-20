import * as React from "react";

import { Avatar, Grid, Tooltip } from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const styles = createStyles({
  github: {
    backgroundColor: "white",
    color: "#6cc644",
    margin: 10
  },
  linkedin: {
    backgroundColor: "white",
    color: "#0077b5",
    margin: 10
  }
});

interface IProps extends WithStyles<typeof styles> {}

const SocialLinks = (props: IProps) => {
  const { classes } = props;

  return (
    <Grid container={true} justify="flex-end" alignItems="center">
      <Tooltip title="GitHub">
        <Avatar alt="GitHub" className={classes.github}>
          <FaGithub size={50} />
        </Avatar>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <Avatar alt="LinkedIn" className={classes.linkedin}>
          <FaLinkedin size={50} />
        </Avatar>
      </Tooltip>
    </Grid>
  );
};

export default withStyles(styles)(SocialLinks);

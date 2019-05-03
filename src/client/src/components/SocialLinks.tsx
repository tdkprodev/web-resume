import ArrowTooltip from "@components/ArrowTooltip";
import { Avatar, Grid, Link } from "@material-ui/core";
import { GridItemsAlignment, GridJustification } from "@material-ui/core/Grid";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
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

interface IProps extends WithStyles<typeof styles> {
  alignItems?: GridItemsAlignment;
  justify?: GridJustification;
}

const SocialLinks = (props: IProps) => {
  const { classes, alignItems = "center", justify = "center" } = props;
  const gitHubLink = "https://www.github.com/tdkprodev";
  const linkedInLink = "https://www.linkedin.com/in/thomasdkay/";

  return (
    <Grid container={true} justify={justify} alignItems={alignItems}>
      <ArrowTooltip title="GitHub" placement="bottom">
        <Link href={gitHubLink} target="__blank" rel="noreferrer">
          <Avatar alt="GitHub" className={classes.github}>
            <FaGithub size={50} />
          </Avatar>
        </Link>
      </ArrowTooltip>
      <ArrowTooltip title="LinkedIn" placement="bottom">
        <Link href={linkedInLink} target="__blank" rel="noreferrer">
          <Avatar alt="LinkedIn" className={classes.linkedin}>
            <FaLinkedin size={50} />
          </Avatar>
        </Link>
      </ArrowTooltip>
    </Grid>
  );
};

export default withStyles(styles)(SocialLinks);

import {
  createStyles,
  Divider,
  Theme,
  Typography,
  withStyles,
  WithStyles
} from "@material-ui/core";
// import { AgeDisplay } from "@modules/about/components/profile-card/components/age-display";

import * as React from "react";

interface ISkillsPointProps extends WithStyles<typeof styles> {
  title?: string;
  points?: number;
}

const styles = (theme: Theme) =>
  createStyles({
    skillsPointAttribute: {
      display: "flex"
    }
  });

class SkillPoint extends React.Component<ISkillsPointProps> {
  public render() {
    const { classes, points = 100, title = "placeholder" } = this.props;
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
        <div>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SkillPoint);

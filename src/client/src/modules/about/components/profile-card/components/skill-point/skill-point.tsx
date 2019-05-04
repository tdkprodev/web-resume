import {
  createStyles,
  Divider,
  Theme,
  Typography,
  withStyles,
  WithStyles
} from "@material-ui/core";

import * as React from "react";

interface ISkillsPointProps extends WithStyles<typeof styles> {
  title?: string;
  points?: number;
  data?: Array<[string, any]>;
}

const styles = (theme: Theme) =>
  createStyles({
    dataKey: {
      fontWeight: 900
    },
    dataLabel: {
      alignItems: "center"
    },
    dataValue: {
      marginLeft: 25
    },
    rightMargin: {
      rightMargin: 10
    },
    skillsPointAttribute: {
      display: "flex"
    }
  });

class SkillPoint extends React.Component<ISkillsPointProps> {
  public renderData = () => {
    const { data, classes } = this.props;

    if (data && data.length) {
      return data.map(([key, value], index) => (
        <div key={index} className={classes.dataLabel}>
          <Typography className={classes.dataKey} variant="overline">
            {key}
          </Typography>
          <Typography className={classes.dataValue}>{value}</Typography>
        </div>
      ));
    }

    return null;
  };

  public render() {
    const { classes, points = 100, title = "placeholder" } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" align="center">
          {title}
        </Typography>
        <Divider variant="middle" />
        <div className={classes.skillsPointAttribute}>
          <Typography className={classes.rightMargin} variant="overline">
            Skill point:
          </Typography>
          <Typography variant="overline">{points}</Typography>
        </div>
        <div>{this.renderData()}</div>
        <div>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SkillPoint);

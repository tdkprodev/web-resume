import { ArrowTooltip } from "../../../../../../components/arrow-tooltip";
import { AvatarLabel } from "../../../../../../components/avatar-label";

import { Theme, Typography } from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import banisterPhoto from "../../../../../.././images/influencers/banister.jpg";
import hotzPhoto from "../../../../../.././images/influencers/hotz.jpg";
import jobPhoto from "../../../../../.././images/influencers/job.jpg";
import kipchogePhoto from "../../../../../.././images/influencers/kipchoge.jpg";
import maPhoto from "../../../../../.././images/influencers/ma.jpg";
import penaPhoto from "../../../../../.././images/influencers/pena.jpg";
import williamsPhoto from "../../../../../.././images/influencers/williams.jpg";

const styles = (theme: Theme) =>
  createStyles({
    arrow: {
      fontSize: 6,
      height: "3em",
      position: "absolute",
      width: "3em",

      "&::before": {
        borderStyle: "solid",
        content: '""',
        display: "block",
        height: 0,
        margin: "auto",
        width: 0
      }
    },
    influencersContainer: {
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: "5rem"
    },
    subHeading: {
      fontWeight: 600,
      margin: 10
    }
  });

interface IProps extends WithStyles<typeof styles> {}

class InfluencersSection extends React.Component<IProps> {
  public state = {
    expanded: "detail-panel"
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
          <ArrowTooltip title={"Sub 4 mile"} interactive={true} placement="top">
            <AvatarLabel
              alt="Roger Banister"
              src={banisterPhoto}
              label="Roger Banister"
              large={true}
            />
          </ArrowTooltip>
          <ArrowTooltip
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
            />
          </ArrowTooltip>
          <ArrowTooltip
            title={"Think different."}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Steve Job"
              src={jobPhoto}
              label="Steve Job"
              large={true}
            />
          </ArrowTooltip>
          <ArrowTooltip
            title={"Sub 2 marathon"}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Eliude Kipchoge"
              src={kipchogePhoto}
              label="Eliude Kipchoge"
              large={true}
            />
          </ArrowTooltip>
          <ArrowTooltip
            title={"Don’t hire the most qualified, hire the craziest."}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Jack Ma"
              src={maPhoto}
              label="Jack Ma"
              large={true}
            />
          </ArrowTooltip>
          <ArrowTooltip title={"Do it!"} interactive={true} placement="top">
            <AvatarLabel
              alt="Art Williams"
              src={williamsPhoto}
              label="Art Williams"
              large={true}
            />
          </ArrowTooltip>
          <ArrowTooltip
            title={"Just fucking do it!"}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Dan Pena"
              src={penaPhoto}
              label="Dan Pena"
              large={true}
            />
          </ArrowTooltip>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InfluencersSection);

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
      justifyContent: "center"
    },
    subHeading: {
      fontWeight: 600,
      margin: 10
    }
  });

interface IProps extends WithStyles<typeof styles> {}

class PassionSection extends React.Component<IProps> {
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
          What I Like
        </Typography>
        <div className={classes.influencersContainer}>
          <ArrowTooltip
            title={"placeholder"}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Roger Banister"
              src={banisterPhoto}
              label="Roger Banister"
            />
          </ArrowTooltip>
          <ArrowTooltip
            title={"placeholder"}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="George Hotz"
              src={hotzPhoto}
              label="George Hotz"
            />
          </ArrowTooltip>
          <ArrowTooltip
            title={"placeholder"}
            interactive={true}
            placement="top"
          >
            <AvatarLabel alt="Steve Job" src={jobPhoto} label="Steve Job" />
          </ArrowTooltip>
          <ArrowTooltip
            title={"placeholder"}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Eliude Kipchoge"
              src={kipchogePhoto}
              label="Eliude Kipchoge"
            />
          </ArrowTooltip>
          <ArrowTooltip
            title={"placeholder"}
            interactive={true}
            placement="top"
          >
            <AvatarLabel alt="Jack Ma" src={maPhoto} label="Jack Ma" />
          </ArrowTooltip>
          <ArrowTooltip
            title={"placeholder"}
            interactive={true}
            placement="top"
          >
            <AvatarLabel alt="Dan Pena" src={penaPhoto} label="Dan Pena" />
          </ArrowTooltip>
          <ArrowTooltip
            title={"placeholder"}
            interactive={true}
            placement="top"
          >
            <AvatarLabel
              alt="Art Williams"
              src={williamsPhoto}
              label="Art Williams"
            />
          </ArrowTooltip>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PassionSection);

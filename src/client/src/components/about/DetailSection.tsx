import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Theme,
  Typography
} from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import { FaChevronDown } from "react-icons/fa";
import Module from "./Module";

const styles = (theme: Theme) =>
  createStyles({
    heading: {
      flexBasis: "33.33%",
      flexShrink: 0
      // fontSize: theme.typography.pxToRem(25)
    },
    root: {
      width: "100%"
    }
  });

interface IProps extends WithStyles<typeof styles> {}

class DetailSection extends React.Component<IProps> {
  public state = {
    expanded: null
  };

  public handleChange = (panel: "detail-panel") => (
    event: React.MouseEvent,
    expanded: boolean
  ) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  public render() {
    const { expanded } = this.state;
    const { classes } = this.props;

    return (
      <ExpansionPanel
        expanded={expanded === "detail-panel"}
        onChange={this.handleChange("detail-panel")}
      >
        <ExpansionPanelSummary expandIcon={<FaChevronDown />}>
          <Typography variant="h4" className={classes.heading}>
            Details
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="more-info">
            <Module
              caption="Who am I?"
              height="20rem"
              body={
                <p>
                  My name is <span className="highlight">Thomas Kay</span> and
                  I'm a web developer from Charlotte, North Carolina. I'm a{" "}
                  <span className="highlight">web enthusiast</span> with an
                  ambition in collaborating, creating and bettering modern web
                  technologies.
                </p>
              }
            />
            <Module
              caption="What I do"
              height="35rem"
              body={
                <p>
                  I'm collectively honing my skills{" "}
                  <span className="highlight">seeking oportunities</span> to
                  contribute to the community of developers and web consumers.{" "}
                  <br /> When I'm not developing websites, I'm
                  <span className="highlight">
                    accelerating ways to improve
                  </span>{" "}
                  and keep my knowledge up to date with relevant technologies.
                  I'm
                  <span className="highlight">networking</span> with a few of my
                  peers, building a web app focusing on the attractions of the
                  Queen city. <br /> Offers for collaboration are welcomed.
                </p>
              }
            />
            <Module
              caption="More about me"
              height="28rem"
              body={
                <p>
                  I <span className="highlight">enjoy</span> gathering at{" "}
                  <span className="highlight">local meetups</span> and meeting
                  peers with similar interests. I love and live a healthy
                  lifestyle that prioritizes practical fitness, even as I'm
                  aspiring a career that champions more intellectual than
                  physical attributes. Naturally, I'm a{" "}
                  <span className="highlight">driven person</span>. I'm very
                  passionate of the things I pursue. I love reading short
                  articles of new innovations to keep me motivated.
                </p>
              }
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(DetailSection);

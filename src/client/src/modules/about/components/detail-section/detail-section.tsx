import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Theme,
  // Tooltip,
  Typography
} from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { CollaboratorsSection } from "@modules/about/components/detail-section/components/collaborators-section";
import { DevToolsSection } from "@modules/about/components/detail-section/components/dev-tools-section";
import { InfluencersSection } from "@modules/about/components/detail-section/components/influencers-section";
import { PassionSection } from "@modules/about/components/detail-section/components/passion-section";
import * as React from "react";
import {
  FaChevronDown
  // FaHeart,
  // FaRegHeart,
  // FaHammer,
  // FaTools,
  // FaRaspberryPi,
  // FaLinux,
  // FaHiking,
} from "react-icons/fa";

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
    border: {
      border: "solid pink 3px"
    },
    buildTools: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      margin: "0 5rem",
      marginBottom: "5rem",

      "@media (max-width: 1200px)": {
        margin: "0 3rem",
        marginBottom: "5rem"
      },
      "@media (max-width: 600px)": {
        justifyContent: "space-around"
      }
    },
    devTools: {
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    devToolsContainer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    },
    heading: {
      flexBasis: "33.33%",
      flexShrink: 0
      // fontSize: theme.typography.pxToRem(25)
    },
    paper: {
      padding: "3rem 0"
    },
    root: {
      display: "block",
      padding: "0 5rem",
      width: "100%"
    },
    subHeading: {
      fontWeight: 600,
      margin: 10
    },
    toolsContainer: {
      "@media (max-width: 600px)": {
        width: "100%"
      }
    }
  });

interface IProps extends WithStyles<typeof styles> {}

class DetailSection extends React.Component<IProps> {
  public state = {
    expanded: "detail-panel"
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
          <Typography variant="h4">More About Me</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails classes={{ root: classes.root }}>
          <DevToolsSection />
          {/* <PassionSection /> */}
          <InfluencersSection />
          <CollaboratorsSection />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(DetailSection);

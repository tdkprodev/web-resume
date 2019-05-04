import { ArrowTooltip } from "@components/arrow-tooltip";
import { AvatarLabel } from "@components/avatar-label";
import nodeLogo from "@images/icons/node.png";
import reactLogo from "@images/icons/react.png";
import tsLogo from "@images/icons/ts.png";
import typeormLogo from "@images/icons/typeorm.png";
import vimLogo from "@images/icons/vim.png";
import vscodeLogo from "@images/icons/vscode.png";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Theme,
  // Tooltip,
  Typography
} from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import {
  NodeHoverDetail,
  ReactHoverDetail,
  TypeOrmHoverDetail,
  TypeScriptHoverDetail,
  VimHoverDetail,
  VsCodeHoverDetail
} from "@modules/about/components/detail-section/components/hover-details";
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

  public renderDevToolsSection = () => {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography
          className={classes.subHeading}
          gutterBottom={true}
          variant="h4"
          align="center"
        >
          Dev Tools
        </Typography>
        <div className={classes.devToolsContainer}>
          <div className={classes.devTools}>
            <div className={classes.toolsContainer}>
              <Typography
                className={classes.subHeading}
                gutterBottom={true}
                align="center"
                variant="h5"
              >
                Editor
              </Typography>
              <div className={classes.buildTools}>
                <ArrowTooltip
                  title={<VsCodeHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel alt="VsCode" src={vscodeLogo} label="VsCode" />
                </ArrowTooltip>
                <ArrowTooltip
                  title={<VimHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel alt="Vim" src={vimLogo} label="Vim" />
                </ArrowTooltip>
              </div>
            </div>
            <div className={classes.toolsContainer}>
              <Typography
                className={classes.subHeading}
                gutterBottom={true}
                align="center"
                variant="h5"
              >
                Client
              </Typography>
              <div className={classes.buildTools}>
                <ArrowTooltip
                  title={<TypeScriptHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel
                    alt="TypeScript"
                    src={tsLogo}
                    label="TypeScript"
                  />
                </ArrowTooltip>
                <ArrowTooltip
                  title={<ReactHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel alt="React" src={reactLogo} label="React" />
                </ArrowTooltip>
              </div>
            </div>
            <div className={classes.toolsContainer}>
              <Typography
                className={classes.subHeading}
                gutterBottom={true}
                align="center"
                variant="h5"
              >
                Server
              </Typography>
              <div className={classes.buildTools}>
                <ArrowTooltip
                  title={<NodeHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel alt="Node" src={nodeLogo} label="Node" />
                </ArrowTooltip>
                <ArrowTooltip
                  title={<TypeOrmHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel
                    alt="TypeORM"
                    src={typeormLogo}
                    label="TypeORM"
                  />
                </ArrowTooltip>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  public renderPassionSection = () => {
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
        <div>placeholder</div>
      </React.Fragment>
    );
  };

  public renderInfluencersSection = () => {
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
        <div>placeholder</div>
      </React.Fragment>
    );
  };

  public renderCollaboratorsSection = () => {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography
          className={classes.subHeading}
          gutterBottom={true}
          variant="h4"
          align="center"
        >
          Collaborators
        </Typography>
        <div>placeholder</div>
      </React.Fragment>
    );
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
          {this.renderDevToolsSection()}
          {this.renderPassionSection()}
          {this.renderInfluencersSection()}
          {this.renderCollaboratorsSection()}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(DetailSection);

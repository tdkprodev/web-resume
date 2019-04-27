import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Theme,
  // Tooltip,
  Typography
} from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import { FaChevronDown } from "react-icons/fa";
import ArrowTooltip from "../projects/ArrowTooltip";
import AvatarLabel from "./AvatarLabel";

import nodeLogo from "../../images/devtools-logos/node.png";
import reactLogo from "../../images/devtools-logos/react.png";
import tsLogo from "../../images/devtools-logos/ts.png";
import typeormLogo from "../../images/devtools-logos/typeorm.png";
import vimLogo from "../../images/devtools-logos/vim.png";
import vscodeLogo from "../../images/devtools-logos/vscode.png";

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

      "@media (max-width: 600px)": {
        justifyContent: "space-between"
      }
    },
    devTools: {
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
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

  public renderVsCodeContent = () => (
    <React.Fragment>
      <Typography color="inherit">Tooltip with HTML</Typography>
      <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
      {"It's very engaging. Right?"}
      <a href="https://google.com">google</a>
      <span className={this.props.classes.arrow} />
    </React.Fragment>
  );

  public renderVimContent = () => (
    <React.Fragment>
      <Typography color="inherit">Tooltip with HTML</Typography>
      <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
      {"It's very engaging. Right?"}
      <span className={this.props.classes.arrow} />
    </React.Fragment>
  );

  public renderTypeScriptContent = () => (
    <React.Fragment>
      <Typography color="inherit">Tooltip with HTML</Typography>
      <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
      {"It's very engaging. Right?"}
      <span className={this.props.classes.arrow} />
    </React.Fragment>
  );

  public renderReactContent = () => (
    <React.Fragment>
      <Typography color="inherit">Tooltip with HTML</Typography>
      <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
      {"It's very engaging. Right?"}
      <span className={this.props.classes.arrow} />
    </React.Fragment>
  );

  public renderNodeContent = () => (
    <React.Fragment>
      <Typography color="inherit">Tooltip with HTML</Typography>
      <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
      {"It's very engaging. Right?"}
      <span className={this.props.classes.arrow} />
    </React.Fragment>
  );

  public renderTypeOrmContent = () => (
    <React.Fragment>
      <Typography color="inherit">Tooltip with HTML</Typography>
      <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
      {"It's very engaging. Right?"}
      <span className={this.props.classes.arrow} />
    </React.Fragment>
  );

  public renderHoverContent = (field: string) => {
    let htmlContent = <React.Fragment />;

    switch (field) {
      case "vim":
        htmlContent = this.renderVimContent();
        break;
      case "vscode":
        htmlContent = this.renderVsCodeContent();
        break;
      case "typescript":
        htmlContent = this.renderTypeScriptContent();
        break;
      case "react":
        htmlContent = this.renderReactContent();
        break;
      case "node":
        htmlContent = this.renderNodeContent();
        break;
      case "typeorm":
        htmlContent = this.renderTypeOrmContent();
        break;
      default:
        break;
    }

    return htmlContent;
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
          <Typography
            className={classes.subHeading}
            gutterBottom={true}
            variant="h4"
          >
            Dev Tools
          </Typography>
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
                  title={this.renderVsCodeContent()}
                  interactive={true}
                  placement="bottom"
                >
                  <AvatarLabel alt="VsCode" src={vscodeLogo} label="VsCode" />
                </ArrowTooltip>
                <ArrowTooltip
                  title={this.renderHoverContent("vim")}
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
                  title={this.renderTypeScriptContent()}
                  interactive={true}
                  placement="bottom"
                >
                  <AvatarLabel
                    alt="TypeScript"
                    src={tsLogo}
                    label="TypeScript"
                  />
                </ArrowTooltip>
                <ArrowTooltip
                  title={this.renderReactContent()}
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
                  title={this.renderNodeContent()}
                  interactive={true}
                  placement="bottom"
                >
                  <AvatarLabel alt="Node" src={nodeLogo} label="Node" />
                </ArrowTooltip>
                <ArrowTooltip
                  title={this.renderTypeOrmContent()}
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(DetailSection);

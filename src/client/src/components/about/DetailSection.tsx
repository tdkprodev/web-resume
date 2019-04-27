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
import AvatarLabel from "./AvatarLabel";

import nodeLogo from "../../images/devtools-logos/node.png";
import reactLogo from "../../images/devtools-logos/react.png";
import tsLogo from "../../images/devtools-logos/ts.png";
import typeormLogo from "../../images/devtools-logos/typeorm.png";
import vimLogo from "../../images/devtools-logos/vim.png";
import vscodeLogo from "../../images/devtools-logos/vscode.png";

const styles = (theme: Theme) =>
  createStyles({
    border: {
      border: "solid pink 3px"
    },
    buildTools: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      margin: "0 5rem",
      marginBottom: "5rem"
    },
    devTools: {
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
    }
  });

interface IProps extends WithStyles<typeof styles> {}

class DetailSection extends React.Component<IProps> {
  public state = {
    // expanded: null
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
          <Typography
            className={classes.subHeading}
            gutterBottom={true}
            variant="h4"
          >
            Dev Tools
          </Typography>
          <div className={classes.devTools}>
            <div className="dev-tools">
              <Typography
                className={classes.subHeading}
                gutterBottom={true}
                align="center"
                variant="h5"
              >
                Editor
              </Typography>
              <div className={classes.buildTools}>
                <AvatarLabel alt="VsCode" src={vscodeLogo} label="VsCode" />
                <AvatarLabel alt="Vim" src={vimLogo} label="Vim" />
              </div>
            </div>
            <div className="client-tools">
              <Typography
                className={classes.subHeading}
                gutterBottom={true}
                align="center"
                variant="h5"
              >
                Client
              </Typography>
              <div className={classes.buildTools}>
                <AvatarLabel alt="TypeScript" src={tsLogo} label="TypeScript" />
                <AvatarLabel alt="React" src={reactLogo} label="React" />
              </div>
            </div>
            <div className="server-tools">
              <Typography
                className={classes.subHeading}
                gutterBottom={true}
                align="center"
                variant="h5"
              >
                Server
              </Typography>
              <div className={classes.buildTools}>
                <AvatarLabel alt="Node" src={nodeLogo} label="Node" />
                <AvatarLabel alt="TypeORM" src={typeormLogo} label="TypeORM" />
              </div>
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(DetailSection);

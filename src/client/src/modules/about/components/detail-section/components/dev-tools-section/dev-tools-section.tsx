import { ArrowTooltip } from "../../../../../../components/arrow-tooltip";
import { AvatarLabel } from "../../../../../../components/avatar-label";

import { Theme, Typography } from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import nodeLogo from "../../../../../.././images/icons/node.png";
import reactLogo from "../../../../../.././images/icons/react.png";
import tsLogo from "../../../../../.././images/icons/ts.png";
import typeormLogo from "../../../../../.././images/icons/typeorm.png";
import vimLogo from "../../../../../.././images/icons/vim.png";
import vscodeLogo from "../../../../../.././images/icons/vscode.png";
import {
  NodeHoverDetail,
  ReactHoverDetail,
  TypeOrmHoverDetail,
  TypeScriptHoverDetail,
  VimHoverDetail,
  VsCodeHoverDetail
} from "../../../../../../modules/about/components/detail-section/components/hover-details";

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
      // marginBottom: "5rem",

      "@media (max-width: 1200px)": {
        margin: "0 3rem"
        // marginBottom: "5rem"
      },
      "@media (max-width: 600px)": {
        justifyContent: "space-around"
      }
    },
    devTools: {
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      marginBottom: "5rem",
      width: "100%"
    },
    devToolsContainer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    },
    heading: {
      flexBasis: "33.33%",
      flexShrink: 0
    },
    influencersContainer: {
      display: "flex"
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

class DevToolsSection extends React.Component<IProps> {
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
  }
}

export default withStyles(styles)(DevToolsSection);

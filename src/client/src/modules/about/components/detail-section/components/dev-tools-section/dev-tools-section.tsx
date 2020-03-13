import * as React from 'react';
import { AvatarLabel } from '../../../../../../components/avatar-label';
import {
  NodeHoverDetail,
  ReactHoverDetail,
  TypeOrmHoverDetail,
  TypeScriptHoverDetail,
  VimHoverDetail,
  VsCodeHoverDetail,
} from '../../../../../../modules/about/components/detail-section/components/hover-details';
import { Theme, Typography } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import nodeLogo from '../../../../../../images/icons/node.png';
import reactLogo from '../../../../../../images/icons/react.png';
import tsLogo from '../../../../../../images/icons/ts.png';
import typeormLogo from '../../../../../../images/icons/typeorm.png';
import vimLogo from '../../../../../../images/icons/vim.png';
import vscodeLogo from '../../../../../../images/icons/vscode.png';

const styles = (theme: Theme) =>
  createStyles({
    arrow: {
      '&::before': {
        borderStyle: 'solid',
        content: '""',
        display: 'block',
        height: 0,
        margin: 'auto',
        width: 0,
      },
      fontSize: 6,
      height: '3em',
      position: 'absolute',

      width: '3em',
    },
    border: {
      border: 'solid pink 3px',
    },
    buildTools: {
      '@media (max-width: 1200px)': {
        margin: '0 3rem',
        // marginBottom: "5rem"
      },
      '@media (max-width: 600px)': {
        justifyContent: 'space-around',
      },
      alignItems: 'center',
      display: 'flex',
      // marginBottom: "5rem",

      justifyContent: 'center',
      margin: '0 5rem',
    },
    devTools: {
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: '5rem',
      width: '100%',
    },
    devToolsContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
    heading: {
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    influencersContainer: {
      display: 'flex',
    },
    paper: {
      padding: '3rem 0',
    },
    root: {
      display: 'block',
      padding: '0 5rem',
      width: '100%',
    },
    subHeading: {
      fontWeight: 600,
      margin: 10,
    },
    toolsContainer: {
      '@media (max-width: 600px)': {
        width: '100%',
      },
    },
  });

type IProps = WithStyles<typeof styles>;

class DevToolsSection extends React.Component<IProps> {
  public state = {
    expanded: 'detail-panel',
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
                <Tooltip
                  title={<VsCodeHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel alt="VsCode" src={vscodeLogo} label="VsCode" />
                </Tooltip>
                <Tooltip
                  title={<VimHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel alt="Vim" src={vimLogo} label="Vim" />
                </Tooltip>
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
                <Tooltip
                  title={<TypeScriptHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel
                    alt="TypeScript"
                    src={tsLogo}
                    label="TypeScript"
                  />
                </Tooltip>
                <Tooltip
                  title={<ReactHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel alt="React" src={reactLogo} label="React" />
                </Tooltip>
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
                <Tooltip
                  title={<NodeHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel alt="Node" src={nodeLogo} label="Node" />
                </Tooltip>
                <Tooltip
                  title={<TypeOrmHoverDetail classes={classes} />}
                  interactive={true}
                  placement="top"
                >
                  <AvatarLabel
                    alt="TypeORM"
                    src={typeormLogo}
                    label="TypeORM"
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DevToolsSection);

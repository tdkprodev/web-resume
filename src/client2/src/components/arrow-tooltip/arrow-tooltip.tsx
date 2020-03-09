import { Tooltip } from '@material-ui/core';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import * as React from 'react';

function arrowGenerator(color: string) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      '&::before': {
        borderColor: `transparent transparent ${color} transparent`,
        borderWidth: '0 1em 1em 1em',
      },
      height: '1em',
      left: 0,
      marginTop: '-0.95em',
      top: 0,
      width: '3em',
    },
    '&[x-placement*="left"] $arrow': {
      '&::before': {
        height: '3em',
        marginRight: '-0.95em',
        right: 0,
        width: '1em',
      },
      borderColor: `transparent transparent transparent ${color}`,
      borderWidth: '1em 0 1em 1em',
    },
    '&[x-placement*="right"] $arrow': {
      '&::before': {
        borderColor: `transparent ${color} transparent transparent`,
        borderWidth: '1em 1em 1em 0',
      },
      height: '3em',
      left: 0,
      marginLeft: '-0.95em',
      width: '1em',
    },
    '&[x-placement*="top"] $arrow': {
      '&::before': {
        borderColor: `${color} transparent transparent transparent`,
        borderWidth: '1em 1em 0 1em',
      },
      bottom: 0,
      height: '1em',
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
    },
  };
}

const styles = (theme: Theme) =>
  createStyles({
    accentBackground: {
      backgroundColor: 'pink',
    },
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
    arrowPopper: arrowGenerator('pink'),
    bootstrapPlacementBottom: {
      margin: '8px 0',
    },
    bootstrapPlacementLeft: {
      margin: '0 8px',
    },
    bootstrapPlacementRight: {
      margin: '0 8px',
    },
    bootstrapPlacementTop: {
      margin: '8px 0',
    },
    bootstrapPopper: arrowGenerator(theme.palette.common.black),
    bootstrapTooltip: {
      backgroundColor: theme.palette.common.black,
    },
    button: {
      margin: theme.spacing(2),
    },
    htmlPopper: arrowGenerator('#dadde9'),
    htmlTooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      // tslint:disable-next-line:object-literal-sort-keys
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      '& b': {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    lightTooltip: {
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: 11,
      zIndex: 9000,
    },
  });

interface IState {
  arrowRef: any;
}

interface IProps extends WithStyles<typeof styles> {
  title: any;
  interactive?: boolean;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
}

class CustomizedTooltips extends React.Component<IProps, IState> {
  public state = {
    arrowRef: null,
  };

  public handleArrowRef = (node: any) => {
    this.setState({
      arrowRef: node,
    });
  };

  public render() {
    const {
      classes,
      title,
      placement = 'bottom',
      interactive = false,
    } = this.props;

    return (
      <Tooltip
        title={
          <React.Fragment>
            {title}
            <span className={classes.arrow} ref={this.handleArrowRef} />
          </React.Fragment>
        }
        placement={placement}
        classes={{ popper: classes.arrowPopper, tooltip: classes.lightTooltip }}
        interactive={interactive}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                element: this.state.arrowRef,
                enabled: Boolean(this.state.arrowRef),
              },
            },
          },
        }}
      >
        <div>{this.props.children}</div>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(CustomizedTooltips);

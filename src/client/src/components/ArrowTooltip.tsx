import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import * as React from "react";

function arrowGenerator(color: string) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      left: 0,
      marginTop: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        // tslint:disable-next-line:object-literal-sort-keys
        borderColor: `transparent transparent ${color} transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      height: "1em",
      left: 0,
      marginBottom: "-0.95em",
      width: "3em",
      // tslint:disable-next-line:object-literal-sort-keys
      "&::before": {
        borderColor: `${color} transparent transparent transparent`,
        borderWidth: "1em 1em 0 1em"
      }
    },
    // tslint:disable-next-line:object-literal-sort-keys
    '&[x-placement*="right"] $arrow': {
      height: "3em",
      left: 0,
      marginLeft: "-0.95em",
      width: "1em",
      // tslint:disable-next-line:object-literal-sort-keys
      "&::before": {
        borderColor: `transparent ${color} transparent transparent`,
        borderWidth: "1em 1em 1em 0"
      }
    },
    '&[x-placement*="left"] $arrow': {
      height: "3em",
      marginRight: "-0.95em",
      right: 0,
      width: "1em",
      // tslint:disable-next-line:object-literal-sort-keys
      "&::before": {
        borderColor: `transparent transparent transparent ${color}`,
        borderWidth: "1em 0 1em 1em"
      }
    }
  };
}

const styles = (theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing.unit
    },
    // tslint:disable-next-line:object-literal-sort-keys
    accentBackground: {
      backgroundColor: "pink"
    },
    lightTooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      // tslint:disable-next-line:object-literal-sort-keys
      boxShadow: theme.shadows[1],
      fontSize: 11
    },
    // tslint:disable-next-line:object-literal-sort-keys
    // arrowPopper: arrowGenerator(theme.palette.grey[500]),
    arrowPopper: arrowGenerator("pink"),
    arrow: {
      position: "absolute",
      // tslint:disable-next-line:object-literal-sort-keys
      fontSize: 6,
      width: "3em",
      height: "3em",
      "&::before": {
        content: '""',
        margin: "auto",
        // tslint:disable-next-line:object-literal-sort-keys
        display: "block",
        width: 0,
        height: 0,
        borderStyle: "solid"
      }
    },
    bootstrapPopper: arrowGenerator(theme.palette.common.black),
    bootstrapTooltip: {
      backgroundColor: theme.palette.common.black
    },
    bootstrapPlacementLeft: {
      margin: "0 8px"
    },
    bootstrapPlacementRight: {
      margin: "0 8px"
    },
    bootstrapPlacementTop: {
      margin: "8px 0"
    },
    bootstrapPlacementBottom: {
      margin: "8px 0"
    },
    htmlPopper: arrowGenerator("#dadde9"),
    htmlTooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      // tslint:disable-next-line:object-literal-sort-keys
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
      "& b": {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  });

interface IState {
  arrowRef: any;
}

interface IProps extends WithStyles<typeof styles> {
  title: any;
  interactive?: boolean;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}

class CustomizedTooltips extends React.Component<IProps, IState> {
  public state = {
    arrowRef: null
  };

  public handleArrowRef = (node: any) => {
    this.setState({
      arrowRef: node
    });
  };

  public render() {
    const {
      classes,
      title,
      placement = "bottom",
      interactive = false
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
        style={{ zIndex: 9000 }}
        interactive={interactive}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(this.state.arrowRef),
                // tslint:disable-next-line:object-literal-sort-keys
                element: this.state.arrowRef
              }
            }
          }
        }}
      >
        <div>{this.props.children}</div>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(CustomizedTooltips);

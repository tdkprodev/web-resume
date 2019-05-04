import { ArrowTooltip } from "@client/src/components/arrow-tooltip";
import {
  Avatar,
  createStyles,
  Fab,
  Grow,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core";
import { SkillPoint } from "@modules/about/components/profile-card/components/skill-point";

import * as React from "react";

const styles = (theme: Theme) =>
  createStyles({
    customTip: {
      alignItems: "center",
      display: "flex",
      minHeight: 50
    },
    margin: {
      margin: theme.spacing.unit
    },
    positionAbsolute: {
      position: "absolute"
    },
    skillsPointAttribute: {
      display: "flex"
    }
  });

interface IAttributeProps extends WithStyles<typeof styles> {
  hovering: boolean;
  timeout: number;
  ariaLabel?: string;
  imgSrc: string;
  angle: number;
  distance?: number;
  title?: string;
  points?: number;
}

class Attribute extends React.Component<IAttributeProps> {
  public render() {
    const {
      angle,
      distance = 10,
      hovering,
      timeout,
      ariaLabel = "",
      imgSrc,
      title = "placeholder",
      points = 100,
      classes,
      children
    } = this.props;

    return (
      <Grow
        in={hovering}
        style={{
          transform: `rotate(${angle}deg) translate(${distance}rem) rotate(-${angle}deg)`,
          transformOrigin: "0 0 0"
        }}
        {...(hovering ? { timeout } : {})}
      >
        <Fab
          aria-label={ariaLabel}
          size="small"
          className={classes.positionAbsolute}
        >
          <ArrowTooltip
            title={
              <SkillPoint title={title} points={points}>
                {children}
              </SkillPoint>
            }
            placement="right-start"
          >
            <Avatar src={imgSrc} />
          </ArrowTooltip>
        </Fab>
      </Grow>
    );
  }
}

export default withStyles(styles)(Attribute);

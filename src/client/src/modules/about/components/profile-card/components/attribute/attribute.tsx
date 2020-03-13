import {
  Avatar,
  Fab,
  Grow,
  Theme,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';
import { SkillPoint } from '../../components/skill-point';
import { Tooltip } from '@material-ui/core';

import * as React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    positionAbsolute: {
      position: 'absolute',
    },
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
  data?: Array<[string, any]>;
}

class Attribute extends React.Component<IAttributeProps> {
  public render() {
    const {
      angle,
      distance = 10,
      hovering,
      timeout,
      ariaLabel = '',
      imgSrc,
      title = 'placeholder',
      points = 100,
      classes,
      children,
      data,
    } = this.props;

    return (
      <Grow
        in={hovering}
        style={{
          transform: `rotate(${angle}deg) translate(${distance}rem) rotate(-${angle}deg)`,
          transformOrigin: '0 0 0',
        }}
        {...(hovering ? { timeout } : {})}
      >
        <Fab
          aria-label={ariaLabel}
          size="small"
          className={classes.positionAbsolute}
        >
          <Tooltip
            title={
              <SkillPoint title={title} points={points} data={data}>
                {children}
              </SkillPoint>
            }
            placement="right-start"
          >
            <Avatar src={imgSrc} />
          </Tooltip>
        </Fab>
      </Grow>
    );
  }
}

export default withStyles(styles)(Attribute);

import * as React from 'react';
import {
  Avatar,
  Grid,
  Grow,
  Link,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GridItemsAlignment, GridJustification } from '@material-ui/core/Grid';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';

const styles = createStyles({
  github: {
    backgroundColor: 'white',
    color: '#6cc644',
    margin: 10,
  },
  linkedin: {
    backgroundColor: 'white',
    color: '#0077b5',
    margin: 10,
  },
});

interface IProps extends WithStyles<typeof styles> {
  alignItems?: GridItemsAlignment;
  justify?: GridJustification;
}

const SocialLinks = (props: IProps) => {
  const { classes, alignItems = 'center', justify = 'center' } = props;
  const gitHubLink = 'https://www.github.com/tomxkay';
  const linkedInLink = 'https://www.linkedin.com/in/tomxkay/';

  return (
    <Grid container={true} justify={justify} alignItems={alignItems}>
      <Grow in={true}>
        <Tooltip title="GitHub" placement="bottom">
          <Link href={gitHubLink} target="__blank" rel="noreferrer">
            <Avatar alt="GitHub" className={classes.github}>
              <FaGithub size={50} />
            </Avatar>
          </Link>
        </Tooltip>
      </Grow>
      <Grow in={true}>
        <Tooltip title="LinkedIn" placement="bottom">
          <Link href={linkedInLink} target="__blank" rel="noreferrer">
            <Avatar alt="LinkedIn" className={classes.linkedin}>
              <FaLinkedin size={50} />
            </Avatar>
          </Link>
        </Tooltip>
      </Grow>
    </Grid>
  );
};

export default withStyles(styles)(SocialLinks);

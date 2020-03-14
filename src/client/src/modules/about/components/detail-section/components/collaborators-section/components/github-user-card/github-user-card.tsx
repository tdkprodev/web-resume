import * as React from 'react';
import { AvatarLabel } from '../../../../../../../../components/avatar-label';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { FaGithub, FaHome } from 'react-icons/fa';
import {
  Theme,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import { default as classnames } from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';

const defaultAvatarUrl = '';

const styles = (theme: Theme) =>
  createStyles({
    actions: {
      display: 'flex',
    },
    avatarContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
    blue: {
      color: '#0054ff',
    },
    card: {
      margin: '1rem',
      minHeight: 350,
      width: 300,
    },
    defaultContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100%',
    },
    expand: {
      marginLeft: 'auto',
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    githubGreen: {
      color: '#6cc644',
    },
  });

interface IProps extends WithStyles<typeof styles> {
  avatarUrl?: string;
  bio?: string;
  blog?: string;
  company?: string;
  url?: string;
  location?: string;
  name?: string;
  login?: string;
  followers?: number;
  following?: number;
  gistsCount?: number;
  reposCount?: number;
}

interface IState {
  expand: boolean;
}

class GitHubUserCard extends React.Component<IProps, IState> {
  public state = {
    expand: false,
  };

  public handleExpandClick = () => {
    this.setState(() => ({ expand: !this.state.expand }));
  };

  public render() {
    const {
      avatarUrl = defaultAvatarUrl,
      bio,
      blog,
      followers,
      following,
      gistsCount,
      reposCount,
      company,
      url,
      location,
      name = 'Anonymous',
      login,
      classes,
    } = this.props;

    const { expand } = this.state;

    return (
      <Card className={classes.card}>
        <div className={classes.defaultContent}>
          <div>
            <CardHeader
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={login || '<Alias>'}
              subheader={company || '<Company>'}
            />
            <Tooltip
              title={bio && bio.trim() ? bio : '...'}
              interactive={true}
              placement="top"
            >
              <div className={classes.avatarContainer}>
                <AvatarLabel
                  alt={name}
                  src={avatarUrl}
                  label={name}
                  sublabel={location}
                  larger={true}
                  circle={true}
                />
              </div>
            </Tooltip>
            <CardContent>
              <Typography component="p">{bio}</Typography>
            </CardContent>
          </div>
          <div>
            <CardActions className={classes.actions}>
              <Tooltip
                title={`${name}'s Github`}
                interactive={true}
                placement="top"
              >
                <Link href={url} target="__blank" rel="noreferrer">
                  <IconButton aria-label="Github">
                    <FaGithub className={classes.githubGreen} />
                  </IconButton>
                </Link>
              </Tooltip>
              <Link href={blog} target="__blank" rel="noreferrer">
                <Tooltip
                  title={`${name}'s Blog.`}
                  interactive={true}
                  placement="top"
                >
                  <IconButton aria-label="Home">
                    <FaHome className={classes.blue} />
                  </IconButton>
                </Tooltip>
              </Link>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expand,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expand}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expand} timeout="auto" unmountOnExit={true}>
              <CardContent>
                <Typography>Followers: {followers}</Typography>
                <Typography>Following: {following}</Typography>
                <Typography>Repos: {reposCount}</Typography>
                <Typography>Gists: {gistsCount}</Typography>
              </CardContent>
            </Collapse>
          </div>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(GitHubUserCard);

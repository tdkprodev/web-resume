import { ArrowTooltip } from "@client/src/components/arrow-tooltip";
import { AvatarLabel } from "@client/src/components/avatar-label";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { default as classnames } from "classnames";
import * as React from "react";
import { FaGithub, FaHome } from "react-icons/fa";

const defaultAvatarUrl = "";

const styles = (theme: Theme) =>
  createStyles({
    actions: {
      display: "flex"
    },
    avatarContainer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    },
    card: {
      margin: "1rem",
      minHeight: 350,
      width: 300
    },
    expand: {
      marginLeft: "auto",
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
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

class CollaboratorCard extends React.Component<IProps, IState> {
  public state = {
    expand: false
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
      name = "Anonymous",
      login,
      classes
    } = this.props;

    const { expand } = this.state;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={login || "<Alias>"}
          subheader={company || "<Company>"}
        />
        <div className={classes.avatarContainer}>
          <ArrowTooltip title={bio} interactive={true} placement="top">
            <AvatarLabel
              alt={name}
              src={avatarUrl}
              label={name}
              sublabel={location}
              larger={true}
            />
          </ArrowTooltip>
        </div>
        <CardContent>
          <Typography component="p">{bio}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing={true}>
          <Link href={url} target="__blank" rel="noreferrer">
            <IconButton aria-label="Github">
              <FaGithub />
            </IconButton>
          </Link>
          <Link href={blog} target="__blank" rel="noreferrer">
            <IconButton aria-label="LinkedIn">
              <FaHome />
            </IconButton>
          </Link>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expand
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
      </Card>
    );
  }
}

export default withStyles(styles)(CollaboratorCard);

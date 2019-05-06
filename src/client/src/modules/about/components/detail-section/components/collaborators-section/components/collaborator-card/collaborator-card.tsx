import { ArrowTooltip } from "@client/src/components/arrow-tooltip";
import { AvatarLabel } from "@client/src/components/avatar-label";
import * as React from "react";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";

const defaultAvatarUrl = "";

const styles = (theme: Theme) =>
  createStyles({
    avatarContainer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    },
    card: {
      height: 350,
      margin: "1rem",
      minHeight: 300,
      overflow: "auto",
      width: 300
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
}

class CollaboratorCard extends React.Component<IProps> {
  public render() {
    const {
      avatarUrl = defaultAvatarUrl,
      bio,
      blog,
      company,
      url,
      location,
      name = "Anonymous",
      login,
      classes
    } = this.props;

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
            <AvatarLabel alt={name} src={avatarUrl} label={name} large={true} />
          </ArrowTooltip>
        </div>
        <CardContent>
          <Typography component="p">{bio}</Typography>
        </CardContent>
        <Collapse in={true} timeout="auto" unmountOnExit={true}>
          <CardContent>
            <Typography>Method:</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(CollaboratorCard);

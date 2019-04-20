import * as React from "react";

import { Tooltip, Typography } from "@material-ui/core";
import myPhoto from "../../images/prophoto.png";

class ProfileCard extends React.Component<{}> {
  public render() {
    return (
      <div className="profile__description">
        <div className="profile__photo circle animateFromTop">
          <Tooltip title="Hello there!" placement="right-start">
            <img className="image circle" src={myPhoto} alt="My Photo" />
          </Tooltip>
        </div>
        <Typography className="profile__text animateFromBottom">
          I'm a web developer from Charlotte, NC. I'm passionate about the web
          technologies that connect us all.
        </Typography>
      </div>
    );
  }
}

export default ProfileCard;

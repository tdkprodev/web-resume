import * as React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { Link, Tooltip, Typography } from '@material-ui/core';
import { SocialLinks } from '../../components/social-links';

class Footer extends React.Component<{}> {
  public render() {
    return (
      <footer className="footer">
        <div className="container">
          <Tooltip title="Return to top" placement="bottom">
            <Link className="return-to-top animateFadeIn">
              <FaChevronUp />
            </Link>
          </Tooltip>
          <SocialLinks justify="flex-end" />
          <Typography variant="h6" className="copyright animateFromBottom">
            &copy; {new Date().getFullYear()} Thomas Kay
            <br /> All rights reserved
          </Typography>
        </div>
      </footer>
    );
  }
}

export default Footer;

const myiFunc = () => {};

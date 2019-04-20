import { Link, Tooltip, Typography } from "@material-ui/core";
import * as $ from "jquery";
import * as React from "react";
import { FaChevronUp } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

class Footer extends React.Component<{}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    // jQuery implementationS
    $(".return-to-top").click(() => {
      const body: JQuery<HTMLElement> = $("body") || {};

      if (body !== undefined) {
        $("html,body").animate(
          {
            scrollTop: 0
          },
          "medium"
        );
      }
    });
  }
  public render() {
    return (
      <footer className="footer">
        <div className="container">
          <Tooltip title="Return to top">
            <Link className="return-to-top animateFadeIn">
              <FaChevronUp />
            </Link>
          </Tooltip>
          <SocialLinks />
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

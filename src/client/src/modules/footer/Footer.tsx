import { ArrowTooltip } from "@components/arrow-tooltip";
import { SocialLinks } from "@components/social-links";
import { Link, Typography } from "@material-ui/core";
import * as $ from "jquery";
import * as React from "react";
import { FaChevronUp } from "react-icons/fa";

export class Footer extends React.Component<{}> {
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
          <ArrowTooltip title="Return to top" placement="bottom">
            <Link className="return-to-top animateFadeIn">
              <FaChevronUp />
            </Link>
          </ArrowTooltip>
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

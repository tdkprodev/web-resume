import * as $ from 'jquery';
import * as React from "react";

// import SocialLinks from "./SocialLinks";
import { FaChevronUp } from "react-icons/fa";

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
          "medium",
        );
      }
    });

    // // // JS implementation
    // const returnToTop = document.querySelector(".return-to-top");

    // returnToTop!.addEventListener("click", () => {
    //   const body = document.body;
    //   const html = document.querySelector("html");

    //   setTimeout(() => {
    //     body.scrollTop = 0;
    //     html!.scrollTop = 0;
    //   }, 500);
    // });
  }
  public render() {
    return (
      <footer className="footer">
        <div className="container">
          <a className="return-to-top animateFadeIn">
            <FaChevronUp />
          </a>
          <h3 className="copyright animateFromBottom">&copy; {new Date().getFullYear()} Thomas Kay.<br /> All rights reserved.</h3>
        </div>
      </footer>
    )
  }
}

export default Footer;

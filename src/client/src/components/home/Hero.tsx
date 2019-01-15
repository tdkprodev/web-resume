import * as React from "react";

// import FaSortDesc from "react-icons/lib/fa/sort-desc";
// import FaChevronRight from "react-icons/lib/fa/chevron-right";
// import FaChevronDown from "react-icons/lib/fa/chevron-down";

class Hero extends React.Component<{}> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  public componentDidMount() {
    const flyInText = document.querySelector(".fly-in-text");
    const viewProjectsBtn = document.querySelector(".view-projects");

    setTimeout(() => {
      flyInText!.classList.remove("hidden");
    }, 500);

    function scrollToProjects() {
      const projectsSection: any = document.querySelector("#projects");
      window.scrollTo(0, projectsSection!.offsetTop - 20);
    }

    viewProjectsBtn!.addEventListener("click", scrollToProjects);
  }

  public render() {
    return (
      <header className="hero" id="home">
        <div className="hero__logo parallelogram">TDK</div>

        <div className="greeting">
          <h1 className="greeting__text heading-title">
            <ul className="fly-in-text hidden">
              <li>T</li>
              <li>H</li>
              <li>O</li>
              <li>M</li>
              <li>A</li>
              <li>S</li>
              <li>{}</li>
              <li>K</li>
              <li>A</li>
              <li>Y</li>
            </ul>
          </h1>
          <h2 className="greeting__text heading-secondary animateFadeIn">
            <span className="greeting__text--verbose">Full-Stack</span>
            <span className="greeting__text--accent">
              <p className="greeting__text--accent-text">Web Developer</p>
            </span>
          </h2>
          <div className="btn btn--animated view-projects">
            View my work
            <span className="btn--chevron">{/* <FaChevronDown /> */}</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Hero;

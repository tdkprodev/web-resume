import * as React from 'react';
import $ from 'jquery';
import { Tooltip } from '@material-ui/core';

class Hero extends React.Component<{}> {
  public componentDidMount() {
    const flyInText = document.querySelector('.fly-in-text');

    setTimeout(() => {
      flyInText!.classList.remove('hidden');
    }, 500);
  }

  public scrollToProjects = () => {
    const projectsSection = $('#projects');
    // window.scrollTo(0, projectsSection!.offsetTop - 20);

    $('html,body').animate(
      {
        scrollTop: projectsSection.offset()!.top,
      },
      'slow',
      'swing',
      () => {
        const compositionPhotos = document.querySelectorAll(
          '.composition__photo',
        );
        Array.prototype.slice
          .call(compositionPhotos)
          .forEach((photo: HTMLElement) => photo.classList.add('show'));
      },
    );
  };

  public render() {
    return (
      <header className="hero" id="home">
        <div className="hero__logo parallelogram">THMS</div>

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
          <Tooltip title="Scroll down">
            <div
              className="btn btn--animated view-projects"
              onClick={this.scrollToProjects}
            >
              View my work
            </div>
          </Tooltip>
        </div>
      </header>
    );
  }
}

export default Hero;

import * as React from "react";

import myPhoto from "../../images/prophoto.png";
import Module from "./Module";

import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

// interface IProps {}

class About extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <section className="about" id="about">
        <div className="container">
          <h1 className="heading-secondary">About</h1>

          <div className="profile-wrapper">
            <div className="profile animateFromLeft">
              <div className="profile__description">
                <div className="profile__photo circle animateFromTop">
                  <img className="image circle" src={myPhoto} alt="My Photo" />
                </div>
                <p className="profile__text animateFromBottom">
                  I'm a web developer from Charlotte, NC. I'm passionate about
                  the web technologies that connect us all.
                </p>
              </div>

              <div className="tech">
                <div className="graph-container">
                  <h3 className="heading-small heading-small--align-left heading-small--tech animateFromTop">
                    Technologies
                  </h3>
                  <div className="bar bar--html">
                    <FaHtml5 /> HTML
                  </div>
                  <div className="bar bar--css">
                    <FaCss3 /> CSS 
                  </div>
                  <div className="bar bar--js">JavaScript</div>
                  <div className="bar bar--react">React</div>
                  <div className="bar bar--node">Node</div>
                </div>
              </div>
            </div>
            <div className="more-info">
              <Module
                caption="Who am I?"
                height="20rem"
                body={
                  <p>
                    My name is <span className="highlight">Thomas Kay</span> and
                    I'm a web developer from Charlotte, North Carolina. I'm a{" "}
                    <span className="highlight">web enthusiast</span> with an ambition
                    in collaborating, creating and bettering modern web
                    technologies.
                  </p>
                }
              />
              <Module
                caption="What I do"
                height="35rem"
                body={
                  <p>
                    I'm collectively honing my skills{" "}
                    <span className="highlight">
                      seeking oportunities
                    </span>{" "}
                    to contribute to the community of developers and web
                    consumers. <br /> When I'm not developing websites, I'm
                    <span className="highlight">
                      accelerating ways to improve
                    </span>{" "}
                    and keep my knowledge up to date with relevant technologies.
                    I'm
                    <span className="highlight">networking</span> with a few of
                    my peers, building a web app focusing on the attractions of
                    the Queen city. <br /> Offers for collaboration are
                    welcomed.
                  </p>
                }
              />
              <Module
                caption="More about me"
                height="28rem"
                body={
                  <p>
                    I <span className="highlight">enjoy</span> gathering at{" "}
                    <span className="highlight">local meetups</span> and meeting
                    peers with similar interests. I love and live a healthy lifestyle
                    that prioritizes practical fitness, even as I'm aspiring a
                    career that champions more intellectual than physical
                    attributes. Naturally, I'm a{" "}
                    <span className="highlight">driven person</span>. I'm very passionate of the things I pursue. I love
                    reading short articles of new innovations to keep me
                    motivated.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;




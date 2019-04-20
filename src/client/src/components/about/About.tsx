import * as React from "react";

import DetailSection from "./DetailSection";
import ProfileCard from "./ProfileCard";
import SkillCard from "./Skill";

class About extends React.Component<{}> {
  public render() {
    return (
      <section className="about" id="about">
        <div className="container">
          <h1 className="heading-secondary">About</h1>

          <div className="profile-wrapper">
            <article className="profile animateFromLeft">
              <ProfileCard />
              <SkillCard />
            </article>
            <DetailSection />
          </div>
        </div>
      </section>
    );
  }
}

export default About;

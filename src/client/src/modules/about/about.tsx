import * as React from "react";
import { DetailSection } from "../../modules/about/components/detail-section";
import { ProfileCard } from "../../modules/about/components/profile-card";
import { SkillCard } from "../../modules/about/components/skill";
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
            <article className="animateFromRight">
              <DetailSection />
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

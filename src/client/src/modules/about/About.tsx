import * as React from "react";

import DetailSection from "./components/DetailSection";
import ProfileCard from "./components/ProfileCard";
import SkillCard from "./components/Skill";

export class About extends React.Component<{}> {
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

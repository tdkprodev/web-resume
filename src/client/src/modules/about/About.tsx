import * as React from "react";

import DetailSection from "@modules/about/components/DetailSection";
import ProfileCard from "@modules/about/components/ProfileCard";
import SkillCard from "@modules/about/components/Skill";

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

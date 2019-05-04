import MaterialTextField from "@components/material-text-field";
// import { Typography } from "@material-ui/core";
import * as React from "react";

interface IState {
  filterText: string;
}

export class RecentWork extends React.Component<{}, IState> {
  public state = {
    filterText: ""
  };

  public handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    this.setState(
      () => ({
        filterText: value
      }),
      () => {
        const compositionPhotos = document.querySelectorAll(
          ".composition__photo"
        );

        Array.prototype.slice
          .call(compositionPhotos)
          .forEach((photo: HTMLElement) => {
            photo.classList.remove("show");
            photo.classList.remove("slide-in");
            photo.classList.add("show");
            photo.classList.add("slide-in");
          });
      }
    );
  };

  public render() {
    return (
      <section className="projects" id="recent-work">
        <div className="container">
          <h1 className="heading-secondary">Recent Work</h1>
          <div className="projects__filter">
            <MaterialTextField
              label="Search recent work"
              placeholder="Search recent work"
              variant="outlined"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

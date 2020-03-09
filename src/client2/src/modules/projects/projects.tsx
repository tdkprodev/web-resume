import { MaterialTextField } from '../../components/material-text-field';
import { IPreview } from '../../../../shared/interface/preview';
import { Typography } from '@material-ui/core';
import { previews } from './assets/previews';
import { Preview } from './components/preview';
import * as React from 'react';

interface IState {
  filterText: string;
}

class Projects extends React.Component<{}, IState> {
  public state = {
    filterText: '',
  };

  public componentDidMount() {
    // execute func intermittently with specified interval
    function debounce(func: any, wait = 20, immediate = true) {
      let timeout: ReturnType<typeof setTimeout> | any;
      return (...args: any[]) => {
        const later = () => {
          timeout = null;
          if (!immediate) {
            func(args);
          }
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) {
          func(args);
        }
      };
    }

    const sliderCompositions = document.querySelectorAll('.slide-in');

    function checkSlide(e: Event) {
      Array.prototype.slice
        .call(sliderCompositions)
        .forEach((sliderComposition: any) => {
          const slideInAt =
            window.scrollY + window.innerHeight - sliderComposition.height / 2; // get pixel offset at where the composition is visible half way

          const compositionBottom =
            sliderComposition.offsetTop + sliderComposition.height; // get offset at bottom of composition.
          const isHalfShown = slideInAt > sliderComposition.offsetTop;
          const isNotScrollPast = window.scrollY > compositionBottom;

          if (isHalfShown && isNotScrollPast) {
            sliderComposition.classList.add('show');
          } else {
            sliderComposition.classList.remove('show');
          }
        });
    }

    window.addEventListener('scroll', debounce(checkSlide));
    window.addEventListener('load', debounce(checkSlide));
  }

  public renderEmptyPreviews = () => (
    <Typography align="center" variant="h5">
      No projects found from filter.
    </Typography>
  );

  public renderPreviews = () => {
    let filteredPreviews = previews;
    const filterText = this.state.filterText.toLowerCase().trim();

    if (filterText) {
      filteredPreviews = previews.filter((preview: IPreview) =>
        preview.title
          .toLowerCase()
          .trim()
          .includes(filterText),
      );
    }

    return filteredPreviews.map((preview: IPreview) => {
      const { title, src, alt, href, description } = preview;
      return (
        <Preview
          key={title}
          title={title}
          src={src}
          alt={alt}
          href={href}
          description={description}
        />
      );
    });
  };

  public handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    this.setState(
      () => ({
        filterText: value,
      }),
      () => {
        const compositionPhotos = document.querySelectorAll(
          '.composition__photo',
        );

        Array.prototype.slice
          .call(compositionPhotos)
          .forEach((photo: HTMLElement) => {
            photo.classList.remove('show');
            photo.classList.remove('slide-in');
            photo.classList.add('show');
            photo.classList.add('slide-in');
          });
      },
    );
  };

  public render() {
    const projectPreviews = this.renderPreviews();
    return (
      <section className="projects" id="projects">
        <div className="container">
          <h1 className="heading-secondary">Recent Work</h1>
          <div className="projects__filter">
            <MaterialTextField
              label="Search projects"
              placeholder="Search projects"
              variant="outlined"
              onChange={this.handleChange}
            />
          </div>
          <div className="projects__cards">
            {projectPreviews.length ? projectPreviews : null}
          </div>
          {!projectPreviews.length ? this.renderEmptyPreviews() : null}
        </div>
      </section>
    );
  }
}

export default Projects;

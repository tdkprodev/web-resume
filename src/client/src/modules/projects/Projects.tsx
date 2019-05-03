import MaterialTextField from "@components/MaterialTextField";
import thumbnailBlogsome from "@images/thumbnails/blogsome.png";
import thumbnailChat from "@images/thumbnails/chat.png";
import thumbnailExpensify from "@images/thumbnails/expensify.png";
import thumbnailNatours from "@images/thumbnails/natours.png";
import thumbnailNexter from "@images/thumbnails/nexter.png";
import thumbnailTrillo from "@images/thumbnails/trillo.png";
import thumbnailYouTube from "@images/thumbnails/yt.png";
import { Typography } from "@material-ui/core";
import Preview from "@modules/projects/components/Preview";
import * as React from "react";

interface IPreview {
  title: string;
  src: any;
  alt: string;
  dataTip?: string;
  href: string;
  description: string;
}
const previews: IPreview[] = [
  {
    alt: "Chat app thumbnail",
    description: "A public chat app",
    href: "https://tdkchatapp.herokuapp.com",
    src: thumbnailChat,
    title: "Chat App"
  },
  {
    alt: "Blogsome app thumbnail",
    description: "A private blogging app w/ Google OAuth",
    href: "https://blogsome.herokuapp.com",
    src: thumbnailBlogsome,
    title: "Blogsome"
  },
  {
    alt: "Expensify app thumbnail",
    description: "An app to tally expenses w/ Google OAuth",
    href: "https://expensifyapp0101.herokuapp.com",
    src: thumbnailExpensify,
    title: "Expensify"
  },
  {
    alt: "YouTube app thumbnail",
    description: "A simplified mock of a youtube search app",
    href: "https://tdkyoutubeapp.herokuapp.com",
    src: thumbnailYouTube,
    title: "YouTube Mock"
  },
  {
    alt: "Nexter app thumbnail",
    description: "A static web page of a made up realtor company",
    href: "https://tdknexter.herokuapp.com",
    src: thumbnailNexter,
    title: "Nexter"
  },
  {
    alt: "Trillo app thumbnail",
    description: "A static web page of a made up hotel service company",
    href: "https://tdktrillo.herokuapp.com",
    src: thumbnailTrillo,
    title: "Trillo"
  },
  {
    alt: "Natours app thumbnail",
    description: "A static web page of a touring service company",
    href: "https://tdknatours.herokuapp.com",
    src: thumbnailNatours,
    title: "Natours"
  }
];

interface IState {
  filterText: string;
}

export class Projects extends React.Component<{}, IState> {
  public state = {
    filterText: ""
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

    const sliderCompositions = document.querySelectorAll(".slide-in");

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
            sliderComposition.classList.add("show");
          } else {
            sliderComposition.classList.remove("show");
          }
        });
    }

    window.addEventListener("scroll", debounce(checkSlide));
    window.addEventListener("load", debounce(checkSlide));
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
          .includes(filterText)
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
    const projectPreviews = this.renderPreviews();
    return (
      <section className="projects" id="projects">
        <div className="container">
          <h1 className="heading-secondary">Projects</h1>
          <div className="projects__filter">
            <MaterialTextField
              label="Search"
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

import * as React from "react";
import thumbnailBlogsome from "../../images/blogsome.png";
import thumbnailChat from "../../images/chat.png";
import thumbnailExpensify from "../../images/expensify.png";
import thumbnailNatours from "../../images/natours.png";
import thumbnailNexter from "../../images/nexter.png";
import thumbnailTrillo from "../../images/trillo.png";
import thumbnailYouTube from "../../images/yt.png";
import Preview from "./Preview";

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

class Projects extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

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

  public renderPreviews = () => {
    return previews.map((preview: IPreview) => {
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

  public render() {
    return (
      <section className="projects" id="projects">
        <div className="container">
          <h1 className="heading-secondary">Projects</h1>
          <div className="projects__cards">{this.renderPreviews()}</div>
        </div>
      </section>
    );
  }
}

export default Projects;

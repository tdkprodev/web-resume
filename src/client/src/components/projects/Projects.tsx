import * as React from "react";

import thumbnailBlogsome from "../../images/blogsome.png";
import thumbnailChat from "../../images/chat.png";
import thumbnailExpensify from "../../images/expensify.png";
import thumbnailYouTube from "../../images/yt.png";

import thumbnailNatours from "../../images/natours.png";
import thumbnailNexter from "../../images/nexter.png";
import thumbnailTrillo from "../../images/trillo.png";

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
            func(args)
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
      Array.prototype.slice.call(sliderCompositions).forEach((sliderComposition: any) => {
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
  public render() {
    return (
      <section className="projects" id="projects">
        <div className="container">
          <h1 className="heading-secondary">Projects</h1>
          <div className="projects__cards">
            <div className="composition">
            <div className="composition__title">Chat App</div>
              <img
                className="composition__photo slide-in"
                src={thumbnailChat}
                alt="Chat app thumbnail"
              />
              <div className="overlay">
                <a className="btn btn--white" href="https://tdkchatapp.herokuapp.com" target="_blank"> view</a>

                <h3 className="heading-small">Chat App</h3>
                <p className="overlay__description">A public chat app</p>
              </div>
            </div>

            <div className="composition">
            <div className="composition__title">Blogsome</div>
              <img
                className="composition__photo slide-in"
                src={thumbnailBlogsome}
                alt="Blogsome app thumbnail"
              />

              <div className="overlay">
                <a className="btn btn--white" href="https://blogsome.herokuapp.com" target="_blank">
                  view
                </a>
                <h3 className="heading-small">Blogsome</h3>
                <p className="overlay__description">A private blogging app w/ Google OAuth</p>

              </div>
            </div>
            <div className="composition">
            <div className="composition__title">Expensify</div>
              <img
                className="composition__photo slide-in"
                src={thumbnailExpensify}
                alt="Expensify app thumbnail"
              />

              <div className="overlay">
                <a className="btn btn--white" href="https://expensifyapp0101.herokuapp.com" target="_blank">
                  view
                </a>
                <h3 className="heading-small">Expensify</h3>
                <p className="overlay__description">An app to tally expenses w/ Google OAuth</p>

              </div>
            </div>
            <div className="composition">
            <div className="composition__title">YouTube Mock</div>
              <img
                className="composition__photo slide-in"
                src={thumbnailYouTube}
                alt="YouTube app thumbnail"
              />

              <div className="overlay">
                <a className="btn btn--white" href="http://tdkyoutubeapp.herokuapp.com" target="_blank">
                  view
                </a>
                <h3 className="heading-small">YouTube Mock</h3>
                <p className="overlay__description">A simplified mock of a youtube search app</p>

              </div>
            </div>
            <div className="composition">
            <div className="composition__title">Nexter</div>
              <img
                className="composition__photo slide-in"
                src={thumbnailNexter}
                alt="YouTube app thumbnail"
              />

              <div className="overlay">
                <a className="btn btn--white" href="https://tdknexter.herokuapp.com/" target="_blank">
                  view
                </a>
                <h3 className="heading-small">Nexter</h3>
                <p className="overlay__description">A static webpage of a made up realtor company</p>

              </div>
            </div>
            <div className="composition">
            <div className="composition__title">Trillo</div>
              <img
                className="composition__photo slide-in"
                src={thumbnailTrillo}
                alt="YouTube app thumbnail"
              />

              <div className="overlay">
                <a className="btn btn--white" href="https://tdktrillo.herokuapp.com/" target="_blank">
                  view
                </a>

                <h3 className="heading-small">Trillo</h3>
                <p className="overlay__description">A static webpage of a made up hotel service company</p>

              </div>
            </div>
            <div className="composition">
              <div className="composition__title">Natours</div>
              <img
                className="composition__photo slide-in"
                src={thumbnailNatours}
                alt="YouTube app thumbnail"
              />

              <div className="overlay">
                <a className="btn btn--white" href="https://tdknatours.herokuapp.com/" target="_blank">
                  view
                </a>

                <h3 className="heading-small">Natours</h3>
                <p className="overlay__description">A static webpage of a touring service company</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;

import * as React from 'react';

class Nav extends React.Component {
  public componentDidMount() {
    const nav = document.querySelector('#main-nav') as HTMLElement;
    const topOfNav = nav!.offsetTop;

    function fixNav() {
      if (topOfNav) {
        if (window.scrollY >= topOfNav) {
          document.body.style.paddingTop = nav.offsetHeight + 'px'; // compensates for the pixels lost due to the nav bar becoming off flow -- to fix the jerking affect.
          document.body.classList.add('fixed-nav');
        } else {
          document.body.style.paddingTop = '0';
          document.body.classList.remove('fixed-nav');
        }
      }
    }

    function linkHighlight() {
      const home = document.getElementById('home');
      const about = document.getElementById('about');
      const projects = document.getElementById('projects');
      const contact = document.getElementById('contact');

      const pos = window.pageYOffset;
      const pos2 = pos + nav.clientHeight; // adjust when to fix the nav to the top.

      const scrollBottom = pos + window.innerHeight;

      if (home && pos2 > home.offsetTop) {
        highlightLink('home');
      }
      if (about && pos2 > about.offsetTop) {
        highlightLink('about');
      }
      if (projects && pos2 > projects.offsetTop) {
        highlightLink('projects');
      }

      if (
        (contact && pos2 > contact.offsetTop) ||
        pos + scrollBottom === document.body.clientHeight
      ) {
        highlightLink('contact');
      }
    }

    function highlightLink(anchor: string) {
      const navs = document.querySelectorAll('.nav__link.active');
      const focusLink = document.querySelector(`[data-anchor=${anchor}]`);

      Array.prototype.slice
        .call(navs)
        .forEach((el: Element) => el.classList.remove('active'));
      focusLink!.classList.add('active');
    }

    function toggleHoverLock() {
      let lockTimer;

      clearTimeout(lockTimer);
      if (!document.body.classList.contains('disable-hover')) {
        document.body.classList.add('disable-hover');
      }

      lockTimer = setTimeout(() => {
        document.body.classList.remove('disable-hover');
      }, 400);
    }

    // function traverseAnchor(e) {
    //   const target = e.target;
    //   const anchor = document.getElementById(`${target.dataset.anchor}`);

    //   window.scrollTo(0, anchor.offsetTop - 20);
    // }

    window.addEventListener('scroll', fixNav);
    window.addEventListener('scroll', linkHighlight);
    window.addEventListener('scroll', toggleHoverLock);
    // nav.addEventListener('click', traverseAnchor);

    // jQuery for dynamic scroll traversal.

    //   $(".nav__link").click(function() {
    //     const anchor = this.dataset.anchor;
    //     $("html,body").animate(
    //       {
    //         scrollTop: $(`#${anchor}`).offset()!.top
    //       },
    //       "slow",
    //       "swing",
    //       () => {
    //         if (anchor === "projects") {
    //           const compositionPhotos = document.querySelectorAll(
    //             ".composition__photo"
    //           );
    //           Array.prototype.slice
    //             .call(compositionPhotos)
    //             .forEach((photo: HTMLElement) => photo.classList.add("show"));
    //         }
    //       }
    //     );
    //   });
  }

  public render() {
    return (
      <nav className="nav" id="main-nav">
        <div className="container container--nav">
          <ul className="nav__list">
            <li className="logo parallelogram">THMS</li>
            <li className="nav__link active" data-anchor="home">
              Home
            </li>
            <li className="nav__link" data-anchor="about">
              About
            </li>
            <li className="nav__link" data-anchor="projects">
              Projects
            </li>
            <li className="nav__link" data-anchor="contact">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;

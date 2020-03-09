import * as React from 'react';

class Contact extends React.Component<{}> {
  public render() {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <h1 className="heading-secondary">Contact</h1>

          <form
            name="contact"
            className="form animateFromBottom"
            action="https://formspree.io/t2uan.k@gmail.com"
            method="POST"
            /*onSubmit={e => e.preventDefault()} */
          >
            <div className="form__info">
              <div className="form__group">
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <input
                  type="text"
                  name="user_name"
                  className="form__input"
                  placeholder="Name"
                />
              </div>
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  className="form__input"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="form__group">
              <textarea
                name="message"
                className="form__textarea"
                placeholder="Your message"
              />
            </div>
            <div className="form__group">
              <input
                name="submitbtn"
                type="submit"
                value="Send"
                className="btn btn--white"
              />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;

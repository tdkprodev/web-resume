import * as React from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

interface IProps {
  readonly height: string;
  caption: string;
  body: any;
}

interface IState {
  height: string;
  opacity: string | any;
  padding: string;
  showingLess: boolean;
}

const styles: React.CSSProperties = {
  transition: "all 1s ease-out"
};

class Module extends React.Component<IProps, IState> {
  private myRef = React.createRef<HTMLDivElement>();

  constructor(props: IProps) {
    super(props);

    this.state = {
      height: "0",
      opacity: "0",
      padding: "0",
      showingLess: true
    };
  }

  public toggleVisibility = () => {
    this.setState(() => ({
      height: this.state.height === "0" ? this.props.height : "0",
      opacity: this.state.opacity === "1" ? "0" : "1",
      padding: this.state.padding === "0" ? "1rem" : "0",
      showingLess: !this.state.showingLess
    }));
  };

  public render() {
    return (
      <div className="module animateFadeIn">
        <div className="module__caption" onClick={this.toggleVisibility}>
          <h2 className="module__caption--title">{this.props.caption}</h2>
          <span
            className="module__caption--icon"
            onClick={this.toggleVisibility}
          >
            {this.state.showingLess ? <FaPlus /> : <FaMinus />}
          </span>
        </div>
        <div
          className="module__body"
          style={{
            ...styles,
            height: this.state.height,
            opacity: this.state.opacity,
            padding: this.state.padding
          }}
          ref={this.myRef}
        >
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default Module;

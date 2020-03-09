import { ArrowTooltip } from '../../../../components/arrow-tooltip';
import * as React from 'react';

interface IProp {
  title: string;
  src: any;
  alt: string;
  dataTip?: string;
  href: string;
  description: string;
}

class Preview extends React.Component<IProp> {
  public render() {
    const {
      title,
      src,
      alt,
      dataTip = 'View in new tab',
      href,
      description,
    } = this.props;

    return (
      <div className="composition">
        <div className="composition__title">{title}</div>
        <img className="composition__photo slide-in" src={src} alt={alt} />

        <div className="overlay">
          <ArrowTooltip title={dataTip} placement="top">
            <a className="btn btn--white" href={href} target="_blank">
              view
            </a>
          </ArrowTooltip>
          <h3 className="heading-small">{title}</h3>
          <p className="overlay__description">{description}</p>
        </div>
      </div>
    );
  }
}

export default Preview;

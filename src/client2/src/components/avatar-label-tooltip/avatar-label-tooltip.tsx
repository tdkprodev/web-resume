import { ArrowTooltip } from '../../components/arrow-tooltip';
import { AvatarLabel } from '../../components/avatar-label';
import * as React from 'react';

interface IProps {
  alt: string;
  src: string;
  label: string;
  title: any;
  interactive: boolean;
  placement: any;
}

class AvatarLabelTooltip extends React.Component<IProps> {
  public render() {
    const {
      alt,
      src,
      label,
      title = 'placeholder',
      interactive = false,
      placement = 'top',
    } = this.props;
    return (
      <ArrowTooltip
        title={title}
        interactive={interactive}
        placement={placement}
      >
        <AvatarLabel alt={alt} src={src} label={label} />
      </ArrowTooltip>
    );
  }
}

export default AvatarLabelTooltip;

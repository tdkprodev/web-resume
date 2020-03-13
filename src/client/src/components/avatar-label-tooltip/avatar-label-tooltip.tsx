import * as React from 'react';
import { AvatarLabel } from '../../components/avatar-label';
import { Tooltip } from '@material-ui/core';

interface IProps {
  alt: string;
  src: string;
  label: string;
  title: string;
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
      <Tooltip title={title} interactive={interactive} placement={placement}>
        <AvatarLabel alt={alt} src={src} label={label} />
      </Tooltip>
    );
  }
}

export default AvatarLabelTooltip;

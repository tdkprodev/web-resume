import * as React from 'react';
import { TextField } from '@material-ui/core';
import {
  Theme,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    dense: {
      marginTop: 16,
    },
    fullWidth: {
      width: '100%',
    },
    menu: {
      width: 200,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  });

interface IProps extends WithStyles<typeof styles> {
  label: string;
  placeholder?: string;
  variant?: any;
  onChange(event: React.ChangeEvent<HTMLInputElement>, value: string): void;
}

class MaterialTextField extends React.Component<IProps> {
  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.props.onChange(event, value);
  };

  public render() {
    const {
      classes,
      label,
      placeholder = '',
      variant = 'outlined',
    } = this.props;

    return (
      <TextField
        label={label}
        placeholder={placeholder}
        className={classes.textField}
        margin="normal"
        fullWidth={true}
        onChange={this.handleChange}
        variant={variant}
      />
    );
  }
}

export default withStyles(styles)(MaterialTextField);

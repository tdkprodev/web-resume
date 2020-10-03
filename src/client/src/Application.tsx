import * as React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Portfolio } from './modules/portfolio';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  withStyles,
} from '@material-ui/core/styles';
import './sass/main.css';

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {},
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '1.5rem',
      },
    },
  },
  palette: {
    type: 'light',
  },
});

const styles = {};

const Application = () => {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Portfolio />
    </ThemeProvider>
  );
};

export default withStyles(styles)(Application);

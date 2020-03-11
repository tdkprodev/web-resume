import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { Portfolio } from './modules/portfolio';
import { CssBaseline } from '@material-ui/core';
import * as React from 'react';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#f44336',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        margin: '500px',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '1.5rem',
      },
    },
  },
});

const styles = {};

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Portfolio />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

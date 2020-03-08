import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { Portfolio } from '@modules/portfolio';
import * as React from 'react';
import './sass/main.css';

const theme = createMuiTheme({
  overrides: {
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
      <MuiThemeProvider theme={theme}>
        <Portfolio />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

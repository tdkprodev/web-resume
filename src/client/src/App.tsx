import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import { Portfolio } from "@modules/portfolio/portfolio";
import * as React from "react";
import "./sass/main.css";

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1.5rem"
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

const styles = {};

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Portfolio />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

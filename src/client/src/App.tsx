import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { Portfolio } from './modules/portfolio';
import * as React from 'react';

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
      <ThemeProvider theme={theme}>
        <Portfolio />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React asdfd dfdlsfjklfj
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

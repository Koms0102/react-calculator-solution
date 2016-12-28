import {
  deepPurple500,
  deepPurple700,
  grey500,
  grey800
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  flatButton: {
    buttonFilterColor: deepPurple700,
    textColor: 'white'
  },

  palette: {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700,
    primary3Color: grey500,
    textColor: grey800
  },

  raisedButton: {
    color: deepPurple500,
    textColor: 'white'
  },

  svgIcon: {
    color: deepPurple500
  }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('app')
);

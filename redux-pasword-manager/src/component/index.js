import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import{BrowserRouter as Router} from 'react-router-dom';

import Header from './header'
import Form from './Form'
import Container from './container'

class MainComponent extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Router>
          <div className="App">
            <Header/>
            <Form/>
            <Container/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default MainComponent;

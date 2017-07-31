import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import store from './stores'
import Home from './components/Home'
import index from './components/index'
import AddPassword from './components/AddPassword'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={index}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/home/add-new-password" component={AddPassword}/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

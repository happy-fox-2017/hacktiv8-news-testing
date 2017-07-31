import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Form from './components/Form'
import List from './components/List'

import 'bulma/css/bulma.css'
import './App.css'

import logo from './logo.svg'
import store from './stores'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className='App'>
              <div className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <h2>Welcome to React Redux Password Manager</h2>
                <div className='container'>
                  <div className='tabs is-centered'>
                    <ul>
                      <li className='is-active'>
                        <Link to='/'>Form</Link>
                      </li>
                      <li>
                        <Link to='/list'>List</Link>
                      </li>
                    </ul>
                  </div>
                  <Route exact path='/' component={Form} />
                </div>
              </div>
            </div>
            <Route exact path='/list' component={List} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

import React from 'react'
import {
  Link
} from 'react-router-dom'
import kittens from '../kittens.jpg';

const index = () => {
  return (
    <div>
      <div className="App-header">
        <h2>Welcome to Password Manager</h2>
        <img src={kittens} className="logo" alt="logo" />
      </div>
      <p className="App-intro">
        this app build with reactjs, tap getting started to go to the main page
      </p>
      <div className="btn-group">
        <Link to="/home">
          <button className="btn btn-default btn-lg" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            GET STARTED
          </button>
        </Link>
      </div>
    </div>
  )
}

export default index

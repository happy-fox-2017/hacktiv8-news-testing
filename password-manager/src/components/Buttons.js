import React from 'react'
import {
  Link
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/Button.css'

const Buttons = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Link to="/home/add-new-password">
            <button className="btn btn-success"><span className="glyphicon glyphicon-plus-sign"></span>
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Buttons

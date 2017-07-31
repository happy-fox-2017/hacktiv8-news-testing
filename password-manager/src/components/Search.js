import React from 'react'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/Search.css'
// import loading from '../loading.png'

import { getSearchByURL } from '../actions'

const Search = (props) => {
  return (
    <div className="row">
      <form action="" className="search-form">
        <div className="form-group has-feedback">
    		<label className="sr-only">Search</label>
          <input onChange={(e) => props.getSearchByURL(e.target.value)} type="text" className="form-control" name="search" id="search" placeholder="search" />
      		<span className="glyphicon glyphicon-search form-control-feedback"></span>
      	</div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('my state in search: ', state.getStorePassword);
  return {
    dataPass: state.getStorePassword.StorePassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchByURL: (SearchByName) => dispatch(getSearchByURL(SearchByName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

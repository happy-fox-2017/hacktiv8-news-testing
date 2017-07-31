import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getPassListAsyncHanlder} from '../actions/passList.js'

class List extends Component {

  componentWillMount () {
    this.props.getPassListAsyncHanlder()
  }

  render () {
    return (
      <div>
        {this.props.passListReducer.map((pass) => {
          return <tr>
            <td>{pass.url}</td>
            <td>{pass.username}</td>
            <td>{pass.password}</td>
            <td>{pass.createdAt}</td>
            <td>{pass.UpdatedAt}</td>
          </tr>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    passListReducer: state.passListReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPassListAsyncHanlder: () => {
      dispatch(getPassListAsyncHanlder())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPassListAsyncHanlder} from '../actions/passList.js'
import axios from 'axios'

class List extends Component {
  constructor () {
    super()
    this.deletePass = this.deletePass.bind(this)
  }

  componentWillMount () {
    this.props.getPassListAsyncHanlder()
  }

  render () {
    return (
      <div className='container columns tabel'>
        <div className='column is-10 is-offset-1'>
          <table className='table'>
            <thead>
              <tr>
                <th>URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.passListReducer.map((pass, idx) => {
                return <tr key={idx}>
                  <td>{pass.URL}</td>
                  <td>{pass.username}</td>
                  <td>{pass.password}</td>
                  <td>{pass.createdAt.split('').splice(0, 24).join('')}</td>
                  <td>{pass.UpdatedAt}</td>
                  <td><button className='button'>Update</button><button className='button' onClick={() => {
                    this.deletePass(pass.id)
                  }}>Delete</button></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  deletePass (passId) {
    axios.delete(`http://localhost:3000/pass/${passId}`)
    .then((resp) => {
      this.props.getPassListAsyncHanlder()
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

const mapStateToProps = (state) => {
  return {
    passListReducer: state.passListReducer.passList
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

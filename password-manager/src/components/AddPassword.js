import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux'
import '../stylesheets/AddPassword.css'
import { fetchPasswordAsync, PasswordGetter, getListPasswordById, EditListPassword } from '../actions'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import store from '../stores'
import Home from '../components/Home'

class AddPassword extends Component {
  constructor() {
    super()
    this.state = {
      editListPassword: {
        url: '',
        username: '',
        password: ''
      }
    }
  }

  // componentDidMount () {
  //   this.props.PasswordGetter()
  // }

  componentWillReceiveProps(nextProps) {
    console.log('np: ', nextProps);
    this.setState({editListPassword: nextProps.currentPassword})
    // this.setState({
    //   url: nextProps.currentPassword.url,
    //   username: nextProps.currentPassword.username,
    //   password: nextProps.currentPassword.password
    //
    // })
  }

  input (event) {
    const password = this.state.editListPassword

    password[event.target.name] = event.target.value
    this.setState({
      editListPassword: password
    })
  }

  render() {
    const { editListPassword } = this.state
    const password = editListPassword

    return (
      <div className="container">
      	<div className="row">
    	    <div className="col-md-6 col-md-offset-3">
            {
              <div>
          		<h1>Create post</h1>
        		    <div className="form-group has-error">
        		        <label>URL <span className="require">*</span></label>
        		        <input onChange={(e) => this.input(e)} value={password.url} type="text" className="form-control" name="url" />
        		    </div>

        		    <div className="form-group">
        		        <label>Username <span className="require">*</span></label>
        		        <input onChange={(e) => this.input(e)} value={password.username} type="text" className="form-control" name="username" />
        		    </div>

        		    <div className="form-group">
        		        <label>Password <span className="require">*</span></label>
        		        <input onChange={(e) => this.input(e)} value={password.password} type="password" className="form-control" name="password" />
        		    </div>

        		    <div className="form-group">
        		        <p><span className="require">*</span> - required fields</p>
        		    </div>

        		    <div className="form-group">
                  {
                    this.props.Action === "EDIT"
                    ?
                    <Link to="/home">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => this.props.EditListPassword(password.id, this.state.editListPassword)}
                      >
                          Update
                      </button>
                    </Link>
                    :
                    <Link to="/home">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => this.props.tambahListPassword(this.state.editListPassword)}
                      >
                          Create
                      </button>
                    </Link>
                  }

                  <Link to="/home">
        		        <button
                      onClick={(e) => this.props.PasswordGetter()}
                      type="submit"
                      className="btn btn-primary"
                    >
        		            Back
        		        </button>
                  </Link>
        		    </div>
              </div>
            }
      		</div>
      	</div>
      </div>
    )
  }

  // formChange (e) {
  //   let newState = {}
  //   switch (e.target.name) {
  //     case 'url':
  //       newState = {...this.state.newListPassword, url: e.target.value}
  //       this.setState({newListPassword: newState})
  //       break
  //     case 'username':
  //       newState = {...this.state.newListPassword, username: e.target.value}
  //       this.setState({newListPassword: newState})
  //       break
  //     case 'password':
  //       newState = {...this.state.newListPassword, password: e.target.value}
  //       this.setState({newListPassword: newState})
  //       break
  //     default:
  //       console.log('Event target miss')
  //   }
  // }
}

// store = store.getState()

const mapDispatchToProps = (dispatch) => {
  return {
    tambahListPassword: (newPassword) => dispatch(fetchPasswordAsync(newPassword)),
    EditListPassword: (id, editPassword) => dispatch(EditListPassword(id, editPassword)),
    getListPasswordById: () => dispatch(getListPasswordById()),
    PasswordGetter: () => dispatch(PasswordGetter())
  }
}

const mapStateToProps = (state) => {
  console.log('ini state pas di hal create post', state.getStorePassword.StorePassword);
  return  {
    currentPassword: state.getStorePassword.StorePassword,
    Action: state.getStorePassword.actions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPassword)

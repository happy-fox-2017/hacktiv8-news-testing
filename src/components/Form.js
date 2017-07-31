import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPassAsyncHanlder, getPassListAsyncHanlder} from '../actions/passList.js'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      form: {
        URL: '',
        username: '',
        password: '',
        createdAt: '',
        updatedAt: ''
      }
    }
    this.formChange = this.formChange.bind(this)
    this.passwordVer = this.passwordVer.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
  }

  componentWillMount () {
    this.props.getPassListAsyncHanlder()
  }

  render () {
    return (
      <div className='columns'>
        <div className='column is-6 is-offset-3'>
          <div className='card'>
            <header className='card-header'>
              <p className='card-header-title'>
                Password Form
              </p>
            </header>
            <div className='card-content'>
              <div className='field'>
                <label className='label'>
                  URL
                </label>
                <input className='input' type='text' placeholder='Input website url here...' value={this.state.form.url} onChange={this.formChange} name='url' />
              </div>
              <div className='field'>
                <label className='label'>
                  Username
                </label>
                <input className='input' type='text' placeholder='Input username here...' value={this.state.form.username} onChange={this.formChange} name='username' />
              </div>
              <div className='field'>
                <label className='label'>
                  Password
                </label>
                <input className='input' type='password' placeholder='Input password here...' value={this.state.form.password} onChange={this.passwordChange} name='password' />
              </div>
              <label className='checkbox' disabled>
                <input type='checkbox' disabled checked='' />
              Password harus memiliki setidaknya satu karakter huruf besar (upper-case)
              </label>
              <label className='checkbox' disabled>
                <input type='checkbox' disabled checked='' />
              Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)
              </label>
              <label className='checkbox' disabled>
                <input type='checkbox' disabled checked='' />
              Password harus memiliki setidaknya satu karakter spesial (#$@!&..)
              </label>
              <label className='checkbox' disabled>
                <input type='checkbox' disabled checked='' />
              Password harus memiliki setidaknya satu angka
              </label><label className='checkbox' disabled>
                <input id='charLength' type='checkbox' disabled checked='' />
              Password harus memiliki panjang lebih dari 5 karakter
              </label>
              <footer className='card-footer'>
                <button className='button is-primary card-footer-item' onClick={() => {
                  this.props.addPassAsyncHanlder(this.state.form)
                }}> Submit </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
  }

  passwordChange (event) {
    this.formChange(event)
    this.passwordVer(event)
  }

  passwordVer (event) {
    const lowCase = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
    if (event.target.value.length > 5) {
      console.log('Length > 5')
    } else if (lowCase.test(event.target.value)) {
      console.log('contain atleast 1 lower case')
    }
  }

  formChange (event) {
    const oldState = this.state.form
    let newState = {}
    switch (event.target.name) {
      case 'url':
        newState = {...oldState, URL: event.target.value}
        this.setState({form: newState})
        break
      case 'username':
        newState = {...oldState, username: event.target.value}
        this.setState({form: newState})
        break
      case 'password':
        newState = {...oldState, password: event.target.value}
        this.setState({form: newState})
        break
      default:
        console.log('Event target miss')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    passListReducer: state.passListReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPassAsyncHanlder: (form) => {
      dispatch(addPassAsyncHanlder(form))
    },
    getPassListAsyncHanlder: () => {
      dispatch(getPassListAsyncHanlder())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

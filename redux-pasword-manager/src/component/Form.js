import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import PasswordField from 'material-ui-password-field';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { addPassword,setUrl,setUsername,setPassword,setId,reset,updatePassword } from '../actions'
import '../style/css/form.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      valid1:false,
      valid2:false,
      valid3:false,
      valid4:false,
      valid5:false,
      confirmPassword:'',
      validUrl:'',
      validUsername:'',
      validPassword:'',
      open: false
     }
  }

  handleClose=()=>{
       this.setState({open: false })
 };
 validation=()=>{
      this.setState({
           validUrl:'',
           validUsername:'',
           validPassword:''
      })
      if(this.props.url ==='') {
           this.setState({
                validUrl:'required url'
           })
      } else if(this.props.username === '') {
           this.setState({
                validUsername: 'required username'
           })
      } else if(this.props.password === '') {
           this.setState({
                validPassword: 'required password'
           })
      } else if(this.props.password === this.state.confirmPassword) {
           if(this.state.valid1 && this.state.valid2 && this.state.valid3 && this.state.valid4 && this.state.valid5) {
                return true
           } else {
                this.setState({
                     validPassword: 'Check Format Password'
                })
                return false
           }
      } else {
           this.setState({
                validPassword: 'Not Match'
           })
           return false
      }
   }

   handleButtonsave = () =>{
        if(this.validation()) {
             let obj = {}
             obj.url = this.props.username;
             obj.username = this.props.username;
             obj.password =this.props.password;
             this.props.addPassword(obj);
             this.setState({
                  confirmPassword: ''
             })
             this.password.reset();
        }
   }

   handleButtonupdate = () =>{
        if(this.validation()) {
             if(this.props.id) {
                  let obj = {}
                  obj.id = this.props.id;
                  obj.url = this.props.url;
                  obj.username = this.props.username;
                  obj.password = this.props.password;
                  obj.index = this.props.index;
                  obj.createdAt = this.props.createdAt;
                  this.props.updatePassword(obj);
                  this.setState({
                       confirmPassword:''
                  })
                  this.props.reset();
             } else {
                  this.setState({open: true })
             }
        }
   }

   handleUrl = (event, value) =>{
        this.props.setUrl(value)
   }

   handleUsername = (event, value )=>{
        this.props.setUsername(value)
   }

   handleConfirmPassword = (event, value) =>{
        this.setState({
             confirmPassword: value
        })
   }

   handlePassword = (event,value) => {
    let pattern='';
    pattern = /[a-z]/;
    if(pattern.test(value)) {
      this.setState({
        valid1:true
      });
    }else {
      this.setState({
        valid1:false
      });
    }
    pattern = /[A-Z]/;
    if(pattern.test(value)) {
      this.setState({
        valid2:true
      });
    }else {
      this.setState({
        valid2:false
      });
    }
    pattern = /[0-9]/;
    if(pattern.test(value)) {
      this.setState({
        valid3:true
      });
    }else {
      this.setState({
        valid3:false
      });
    }
    pattern = /[#?!@$%^&*-]/;
    if(pattern.test(value)) {
      this.setState({
        valid4:true
      });
    }else {
      this.setState({
        valid4:false
      });
    }
    if(value.length>5) {
      this.setState({
        valid5:true
      });
    }else {
      this.setState({
        valid5:false
      });
    }
    this.props.setPassword(value);
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        backgroundColor='#00BCD4' hoverColor='#80DEEA' labelStyle={{color:'#ffffff'}}
      />
    ];
    return (
         <div className="col-3 menu" >
            <div style={{marginLeft:'10%'}}>
              <TextField
               floatingLabelText="Url"
               errorText={this.state.validUrl}
               floatingLabelStyle={{color:'#00BCD4'}}
               inputStyle={{color:'#757575'}}
               value={this.props.url}
               onChange={this.handleUrl}
              />
              <TextField
               floatingLabelText="Username"
               errorText={this.state.validUsername}
               floatingLabelStyle={{color:'#00BCD4'}}
               inputStyle={{color:'#757575'}}
               value={this.props.username}
               onChange={this.handleUsername}
              />
              <PasswordField
               type='password'
               floatingLabelText="Password"
               errorText={this.state.validPassword}
               floatingLabelStyle={{color:'#00BCD4'}}
               inputStyle={{color:'#757575'}}
               value={this.props.password}
               onChange={this.handlePassword}
              />
              <PasswordField
               type='password'
               floatingLabelText="Confrim Password"
               errorText={this.state.validPassword}
               floatingLabelStyle={{color:'#00BCD4'}}
               inputStyle={{color:'#757575'}}
               value={this.state.confrimPassword}
               onChange={this.handleConfirmpassword}
              />
              <br/>
              <br/>
              <RaisedButton label="Save" onTouchTap={this.handleButtonsave} backgroundColor='#ff5722'  labelColor='#ffffff' />
              <RaisedButton label="Update" onTouchTap={this.handleButtonupdate} backgroundColor='#ff5722' labelColor='#ffffff' style={{marginLeft:10}}  />
              <Toggle
                label="At least one lowercase"
                labelStyle={{color:'#00BCD4'}}
                style={{marginBottom: 16,marginTop:20}}
                checked={this.state.valid1}
              />
              <Toggle
                label="At least one uppercase"
                labelStyle={{color:'#00BCD4'}}
                style={{marginBottom: 16}}
                checked={this.state.valid2}
              />
              <Toggle
                label="At least one number"
                labelStyle={{color:'#00BCD4'}}
                style={{marginBottom: 16}}
                checked={this.state.valid3}
              />
              <Toggle
                label="At least special character!"
                labelStyle={{color:'#00BCD4'}}
                style={{marginBottom: 16}}
                checked={this.state.valid4}
              />
              <Toggle
                label="At least length > 5 !"
                labelStyle={{color:'#00BCD4'}}
                style={{marginBottom: 16}}
                checked={this.state.valid5}
              />
              <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              >
              <div style={{color:'#00ACC1'}}>Select Table First!</div>
              </Dialog>
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) =>{
     return {
          list_password: state.list_password,
          id: state.id,
          url: state.url,
          username: state.username,
          password: state.password,
          createdAt: state.createdAt,
          index: state.index
     }
}

const mapDispatchToProps = (dispatch) =>{
     return {
          updatePassword: (data) =>{dispatch(updatePassword(data))},
          addPassword: (data) =>{dispatch(addPassword(data))},
          setUrl: (data) =>{dispatch(setUrl(data))},
          setUsername: (data) =>{dispatch(setUsername(data))},
          setPassword: (data) =>{dispatch(setPassword(data))},
          setId: (data) =>{dispatch(setId(data))},
          reset:() =>{dispatch(reset())}
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);

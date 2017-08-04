import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux'
import tgl from 'tgl'
import FlatButton from 'material-ui/FlatButton';

import { reset,seedPassword,addPassword,deletePassword,setUrl,setUsername,setPassword,setId,setIndex,setCreated } from '../actions'

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      obj:{}
    };
  }

  componentDidMount() {
       this.props.seedPassword()
 }

 handleOpen = (e ,id) =>{
      let obj = {}
      obj.id = e;
      obj.index = id
      this.setState({open: true, obj })
}
  handleClose1 = () =>{
       this.setState({open: false })
 }

 handleClose2 = () =>{
      this.props.deletePassword(this.state.obj)
      this.setState({open: false})
}

  handleselect = (event ) =>{
       if(event.length > 0) {
            this.props.setId(this.props.list_password[event[0]].id)
            this.props.setUrl(this.props.list_password[event[0]].url)
            this.props
       }
 }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose1}
        backgroundColor='#ff5722' hoverColor='#80DEEA' labelStyle={{color:'#ffffff'}}
        style={{marginRight:5}}
      />,
      <FlatButton
        label="Delete"
        onTouchTap={this.handleClose2}
        backgroundColor='#ff5722' hoverColor='#80DEEA' labelStyle={{color:'#ffffff'}}
      />,
    ];
    return (
         <div style={{border:'2px solid #00BCD4'}}>
        <Table fixedHeader={true} height='430'  multiSelectable={false} onRowSelection={this.handleselect}  >
          <TableHeader adjustForCheckbox={false} enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{color:'#00BCD4'}} >URL</TableHeaderColumn>
              <TableHeaderColumn style={{color:'#00BCD4'}}>Username</TableHeaderColumn>
              <TableHeaderColumn style={{color:'#00BCD4'}}>Password</TableHeaderColumn>
              <TableHeaderColumn style={{color:'#00BCD4'}}>CreatedAt</TableHeaderColumn>
              <TableHeaderColumn style={{color:'#00BCD4'}}>UpdateAt</TableHeaderColumn>
              <TableHeaderColumn style={{color:'#00BCD4'}}>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false} style={{overflow:'visible'}} >
          {
            this.props.list_password.map((password,index) =>{
              return(
            <TableRow key={password.id} >
              <TableRowColumn style={{color:'#757575'}}>{password.url}</TableRowColumn>
              <TableRowColumn style={{color:'#757575'}}>{password.username}</TableRowColumn>
              <TableRowColumn style={{color:'#757575'}}>{password.password}</TableRowColumn>
              <TableRowColumn style={{color:'#757575'}}>{tgl.kapan(new Date(password.createdAt))}</TableRowColumn>
              <TableRowColumn style={{color:'#757575'}}>{password.updatedAt ? tgl.kapan(new Date(password.updatedAt)) : '-'}</TableRowColumn>
              <TableRowColumn><FlatButton label="Delete" backgroundColor='#00BCD4' hoverColor='#80DEEA' labelStyle={{color:'#ffffff'}} onTouchTap={this.handleOpen.bind(this,password.id,index)}/></TableRowColumn>
          </TableRow>
              )
            })
          }
          </TableBody>
        </Table>
        <Dialog
          title="DELETE!" titleStyle={{color:'#00838F'}} actions={actions}  modal={false} open={this.state.open} onRequestClose={this.handleClose} bodyStyle={{color:'#ffffff'}} >
          <div style={{color:'#00ACC1'}}>Delete this Password?</div>
        </Dialog>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
     return {
          list_password: state.list_password
     }
}

const mapDispatchToProps = (dispatch) =>{
     return {
          seedPassword : () => {dispatch(seedPassword())},
          setIndex: (data) => {dispatch(setIndex(data))},
          addPassword: (data) => {dispatch(addPassword(data))},
          setUrl: (data) => {dispatch(setUrl(data))},
          setUsername: (data) => {dispatch(setUsername(data))},
          setPassword: (data) => {dispatch(setPassword(data))},
          setCreated: (data) => {dispatch(setCreated(data))},
          setId: (data) => {dispatch(setId(data))},
          deletePassword: (data) => {dispatch(deletePassword())},
          reset: (data) => {dispatch(reset())}
     }
}


export default connect(mapStateToProps,mapDispatchToProps)(List);

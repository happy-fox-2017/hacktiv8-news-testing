import axios from 'axios'
import _ from 'lodash'

export const getPassList = (passList) => {
  return {
    type: 'GET_PASS_LIST',
    payload: {
      passList: passList
    }
  }
}

export const getPassListAsyncHanlder = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/pass')
    .then((resp) => {
      dispatch(getPassList(resp.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export const addPass = (form) => {
  return {
    type: 'ADD_PASS',
    payload: {
      form: form
    }
  }
}

export const addPassAsyncHanlder = (form) => {
  return (dispatch, getState) => {
    console.log(getState().passListReducer, 'passListReducer')
    let newPass = {...form, id: _.last(getState().passListReducer).id + 1, createdAt: new Date().toString(), updatedAt: new Date().toString()}
    axios.post('http://localhost:3000/pass', newPass)
    .then((resp) => {
      dispatch(addPass(resp.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

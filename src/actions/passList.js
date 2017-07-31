import axios from 'axios'

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

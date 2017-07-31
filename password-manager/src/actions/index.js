import Axios from 'axios'
import chance from 'chance'

export const PasswordGetter = () => {
  console.log(new Date());
  return {
    type: 'getPassword',
    payload: Axios.get('http://localhost:3000/password')
  }
}

// export const PasswordGetter = () => {
//   return (dispatch) => {
//     const apiUrl = 'http://localhost:3000/password'
//     Axios.get(apiUrl)
//       .then((resp) => {
//         return {
//           type: 'getPassword_FULFILLED',
//           payload: {
//             data: resp.data
//           }
//         }
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
// }

function date_converter () {
  var d = new Date();
  var m_names = new Array("January", "February", "March",
  "April", "May", "June", "July", "Augustus", "Sepetember",
  "October", "November", "December");
  var date = d.getDate();
  var month = m_names[d.getMonth()];
  var year = d.getFullYear();
  return `${date} ${month} ${year}`;
}

export const fetchPassword = (newListPassword) => {
  return {
    type: 'fetchPassword',
    payload: {
      passwordData: newListPassword
    }
  }
}

export const fetchPasswordAsync = (newPassword) => {
  return (dispatch, getState) => {
    const apiUrl = 'http://localhost:3000/password'
    Axios.post(apiUrl, {...newPassword, id: chance().guid(), created: date_converter(), updated: date_converter()})
      .then((resp) => {
        dispatch(PasswordGetter())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


export const DeleteListPassword = (id) => {
  return (dispatch, getState) => {
    const apiUrl = 'http://localhost:3000/password/'
    Axios.delete(apiUrl + id)
      .then((resp) => {
        console.log('sukses delete one listPassword');
        dispatch(PasswordGetter())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


export const getSearchByURL = (name) => {
  return(dispatch, getState) => {
    const apiUrl = 'http://localhost:3000/password?url='
    Axios.get(apiUrl + name)
      .then((resp) => {
        dispatch(fetchPassword(resp.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const editPassword = (editPassword) => {
  return {
    type: 'EDIT_PASSWORD',
    payload: {
      editPassword: editPassword
    }
  }
}

export const EditListPassword = (id, data) => {
  console.log('ini data', data)
  return (dispatch) => {
    const apiUrl = 'http://localhost:3000/password/'
    Axios.put(apiUrl + id, {...data, updated: date_converter(new Date())})
      .then((resp) => {
        dispatch(editPassword())
        // console.log('hasil', PasswordGetter());
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const getPasswordById = (data_detail) => {
  return {
    type: 'IS_EDIT',
    payload: {
      detail_passwordData: data_detail
    }
  }
}

export const getListPasswordById = (id) => {
  return (dispatch) => {
    const apiUrl = 'http://localhost:3000/password/'
    Axios.get(apiUrl + id)
    .then((resp) => {
      console.log('data setelah di klik button edit: ',resp.data);
      dispatch(getPasswordById(resp.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

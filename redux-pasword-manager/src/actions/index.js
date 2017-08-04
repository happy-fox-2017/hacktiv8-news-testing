import axios from 'axios'

export const SEED_PASSWORD = 'SEED_PASSWORD'
export const ADD_PASSWORD = 'ADD_PASSWORD'
export const REMOVE_PASSWORD = 'REMOVE_PASSWORD'
export const  UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const SEARCH_PASSWORD = 'SEARCH_PASSWORD'
export const SET_URL = 'SET_URL'
export const SET_USERNAME = 'SET_USERNAME'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_ID = 'SET_ID'
export const RESET = ' RESET'
export const SET_INDEX = 'SET_INDEX'
export const SET_CREATED = 'SET_CREATED'

export function setCreated(value) {
     return {
          type: SET_CREATED,
          value
     }
}

export function setIndex(value) {
     return {
          type: SET_INDEX,
          value
     }
}

export function reset() {
     return {
          type: RESET
     }
}

export function setId(value) {
     return {
          type: SET_ID,
          value
     }
}

export function setPassword(value) {
     return {
          type: SET_PASSWORD,
          value
     }
}

export function setUsername (value) {
     return {
          type: SET_USERNAME,
          value
     }
}

export function setUrl (value) {
     return {
          type: SET_URL,
          value
     }
}

export function seedPasswordSuccess(value) {
     return {
          type: SEED_PASSWORD,
          value
     }
}

export function seedPassword () {
     return dispatch => {
          return axios.get('http://localhost:4000/password')
               .then(function(response) {
                    dispatch(seedPasswordSuccess(response.data))
               })
     }
}

export function addPasswordSuccess(value) {
     return {
          type: ADD_PASSWORD,
          value
     }
}

export function addPassword(data) {
     return dispatch => {
          return axios.post('http://localhost:4000/password', {
               url: data.url,
               username: data.username,
               password: data.password,
               createdAt: new Date(),
               updateAt: null
          })
          .then(function(response) {
               dispatch(addPasswordSuccess(response.data))
          })
          .catch((err) => {
               console.log(err)
          })
     }
}

export function deletePasswordSuccess(index) {
     return {
          type: REMOVE_PASSWORD,
          index
     }
}

export function deletePassword(data) {
     return dispatch => {
          return axios.delete('http://localhost:4000/password' + data.id)
          .then(function(response) {
               dispatch(deletePasswordSuccess(data.index))
          })
          .catch((err) => {
               console.log(err)
          })
     }
}

export function updatePasswordSuccess(data) {
     return {
          type: UPDATE_PASSWORD,
          password: data.password,
          index: data.index
     }
     }

export function updatePassword(data) {
     return dispatch => {
          return axios.put('http://localhost:4000/password' + data.id, {
               url: data.url,
               username: data.username,
               password: data.password,
               createdAt: data.createdAt,
               updateAt: new Date()
          })
          .then(function(response) {
               let tmp = {}
               tmp.password = response.password;
               tmp.index = response.index;
               dispatch(updatePasswordSuccess(tmp))
          })
     }
}

export function searchPasword(data) {
     return {
          type: SEARCH_PASSWORD,
          key: data.key,
          value: data.value
     }
}

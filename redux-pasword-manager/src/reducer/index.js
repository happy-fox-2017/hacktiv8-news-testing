import {
     SEED_PASSWORD,
     ADD_PASSWORD,
     UPDATE_PASSWORD,
     REMOVE_PASSWORD,
     SET_URL,
     SET_USERNAME,
     SEARCH_PASSWORD,
     SET_PASSWORD,
     SET_ID,
     RESET,
     SET_INDEX,
     SET_CREATED
} from '../actions'

const initialState = {
     id : null,
     url : '',
     username: '',
     password: '',
     createdAt: null,
     updatedAt: null,
     index: 0,
     list_password: []
}

function Password(state = initialState, action ) {
     switch (action.type) {
          case SEED_PASSWORD:
               return Object.assign({}, state , {list_password: action.value.reverse() })
          case ADD_PASSWORD:
               return { ...state, list_password: [action.value, ...state.list_password ]}
          case REMOVE_PASSWORD:
               return Object.assign({}, state, {list_password: [
                    ...state.list_password.slice(0, action.index),
                    ...state.list_password.slice(action.index + 1)
               ] })
          case UPDATE_PASSWORD:
               return Object.assign({}, state, {list_password: state.list_password.map((password, index) =>{
                    if(index !== action.index) {
                         return password
                    }
                    return {
                         ...action.password
                    }
               })})
          case SEARCH_PASSWORD:
          let filtering = new RegExp(`${action.value}.*`)
          let result = state.list_password.filter((password) => {
               return filtering.test(password[action.key].toLowerCase())
               })
               return Object.assign({}, state, {list_password: result} )


          case SET_URL:
               return Object.assign({}, state , { url : action.value })
          case SET_USERNAME:
               return Object.assign({}, state , { username : action.value })
          case SET_PASSWORD:
               return Object.assign({}, state , { password : action.value })
          case SET_ID:
               return Object.assign({}, state , { id : action.value })
          case RESET:
               return Object.assign({}, state , { id: null, url:'', username:'', password: '' })
          case SET_INDEX:
               return Object.assign({}, state , { index : action.value })
          case SET_CREATED:
               return Object.assign({}, state , { createdAt : action.value })
          default:
          return state

     }
}

export default Password

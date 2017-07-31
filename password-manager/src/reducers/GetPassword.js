const initialState = {
  StorePassword: [],
  StoreAddPassword: [],
  actions: []
}

export default (state= initialState, action) => {

  switch (action.type) {
    case 'getPassword_PENDING':
      return {StorePassword: "wait"}
    case 'getPassword_REJECTED':
      return {StorePassword: "Your Data is Rejected!"}
    case 'getPassword_FULFILLED':
      return {StorePassword: action.payload.data}
    case 'fetchPassword':
      return {...state, StorePassword: action.payload.passwordData}
    case 'IS_EDIT':
      return {...state, StorePassword: action.payload.detail_passwordData, actions: 'EDIT'}
    case 'getPassword':
      return {...state, StorePassword: action.payload.data}
    default:
      return state
  }
}

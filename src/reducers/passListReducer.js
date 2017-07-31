const initialState = {
  passList: []
}

const passListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PASS_LIST':
      return [
        ...state, ...action.payload.passList
      ]
    case 'ADD_PASS':
      return [
        ...state, action.payload.form
      ]
    default:
      return state
  }
}

export default passListReducer

import { combineReducers } from 'redux'
import dataPassword from './GetPassword'

export default combineReducers({
  getStorePassword: dataPassword
})

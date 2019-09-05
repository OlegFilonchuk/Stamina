import { combineReducers } from 'redux'
import lesson from './lesson'
import session from './session'

export default combineReducers({
	lesson,
	session
})
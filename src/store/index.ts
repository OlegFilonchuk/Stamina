import {combineReducers, createStore} from 'redux'
import {LessonState, lessonReducer} from "../reducers/lesson";
import {SessionState, sessionReducer} from "../reducers/session";

export interface StoreState {
	lessonState: LessonState;
	sessionState: SessionState;
}

const rootReducer = combineReducers({
	lessonState: lessonReducer,
	sessionState: sessionReducer
})

export default createStore(
	rootReducer,
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
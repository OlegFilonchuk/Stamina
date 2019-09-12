import { lessons } from '../../constants'
import { Action } from 'redux';

const LESSON_SELECTED = "LESSON_SELECTED";

interface SetSelectedLessonAction extends Action {
	lesson: string | undefined;
}

export const selectLessonAction = (lesson: string): SetSelectedLessonAction => {
	return {
		type: LESSON_SELECTED,
		lesson: lesson
	}
};

export interface LessonState {
	lesson: string | undefined;
}

const initialState: LessonState = {
	lesson: undefined
};

export const lessonReducer = (state = initialState, action: Action): LessonState => {
	const { type } = action

	switch (type) {
		case LESSON_SELECTED: {
			const {lesson} = action as SetSelectedLessonAction
			return {...state, lesson}
		}
		default:
			return state
	}
};

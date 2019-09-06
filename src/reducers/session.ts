import { Action } from 'redux';

const RESTART = "RESTART";
const TYPE = "TYPE";
const MISTAKE = "MISTAKE";

export const restartAction = (): Action => {
	return {
		type: RESTART
	}
}

export const typeAction = (): Action => {
	return {
		type: TYPE
	}
}

export const mistakeAction = (): Action => {
	return {
		type: MISTAKE
	}
}

export interface SessionState {
	pressedChars: number;
	mistakes: number;
	restarted: boolean;
}

const initialState: SessionState = {
	pressedChars: 0,
	mistakes: 0,
	restarted: true
};

export const sessionReducer =  (state= initialState, action: Action): SessionState => {
	const { type } = action

	switch (type) {
		case RESTART:
			return initialState

		case TYPE:
			return {
				...state,
				restarted: false, 
				pressedChars: state.pressedChars + 1
			}

		case MISTAKE:
			return {
				...state,
				mistakes: state.mistakes + 1
			}

		default:
			return state
	}
}
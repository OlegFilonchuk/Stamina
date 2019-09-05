import { text1 } from '../constants'

export default (state=text1, action) => {
	const { type, payload } = action

	switch (type) {
		case 'LESSON_SELECTION':
			return payload.lesson
			
		default:
			return state
	}
}
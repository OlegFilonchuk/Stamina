import { lessons } from '../constants'

export default (state=lessons[0], action) => {
	const { type, payload } = action

	switch (type) {
		case 'LESSON_SELECTION':
			return payload.lesson

		default:
			return state
	}
}

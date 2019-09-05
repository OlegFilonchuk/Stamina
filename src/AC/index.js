export const restart = () => {
	return {
		type: 'RESTART'
	}
}

export const selectLesson = lesson => {
	return {
		type: 'LESSON_SELECTION',
		payload: {
			lesson
		}
	}
}
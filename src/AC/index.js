export const restart = () => {
	return {
		type: 'RESTART'
	}
}

export const type = () => {
	return {
		type: 'TYPE',
	}
}

export const mistakes = () => {
	return
}

export const selectLesson = lesson => {
	return {
		type: 'LESSON_SELECTION',
		payload: {
			lesson
		}
	}
}
const getInitialState = () => ({
	pressedChars: 0,
	mistakes: 0,
	restarted: true
})

export default (state=getInitialState(), action) => {
	const { type } = action

	switch (type) {
		case 'RESTART':
			return getInitialState()

		case 'TYPE':
			return {
				...state,
				restarted: false, 
				pressedChars: state.pressedChars + 1
			}

		case 'MISTAKE': 
			return {
				...state,
				mistakes: state.mistakes + 1
			}

		default:
			return state
	}
}
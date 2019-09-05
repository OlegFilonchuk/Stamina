const getInitialState = () => ({
	pressedChars: 0,
	mistakes: 0,
	offset: 0
})

export default (state=getInitialState(), action) => {
	const { type } = action

	switch (type) {
		case 'RESTART':
			return getInitialState()
	
		default:
			break;
	}
}
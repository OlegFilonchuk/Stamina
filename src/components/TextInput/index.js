import React, { Component } from 'react'
import { connect } from 'react-redux'
import { type, mistake } from '../../AC'
import './index.css'

class TextInput extends Component {

	state = {
		pressedKey: null,
		offset: 0
	}

	inputRef = React.createRef()
	pressedKeyRef = React.createRef()

	handleKeyPress = ev => {
		const { lesson, session } = this.props
		const { pressedChars, mistakes } = session

		//check the end of text
		if (pressedChars === lesson.length) {
			return
		}

		this.pressedKeyRef.current.classList.toggle('inactive')
		setTimeout(() => this.pressedKeyRef.current.classList.toggle('inactive'), 250)

		//mistakes handling
		if (ev.key !== lesson[pressedChars]) {
			this.props.mistake()
			return
		}

		//calculating offset to move
		const charWidth = this.inputRef.current.scrollWidth / lesson.length
		const offset = (pressedChars + 1) * charWidth
		this.setState({pressedKey: ev.key, offset: offset})

		//move caret
		this.props.type()

		//check the end of text
		if (pressedChars === lesson.length-1) {
			console.log(`You made ${mistakes} mistakes`)
		}
	}

	componentDidMount() {
		this.inputRef.current.focus()
	}

	static getDerivedStateFromProps (nextProps) {
		return nextProps.session.pressedChars === 0 && {offset: 0}
	}

	restart = () => {
		this.inputRef.current.focus()
	}

	render() {
		const { pressedKey, offset } = this.state
		const { lesson } = this.props
		if (this.inputRef.current && this.props.session.restarted) {
			this.restart()
		}

		return (
			<div className="cont">
				<div className="text-input-container">
					<div className="text-input" onKeyPress={this.handleKeyPress} tabIndex="-1" ref={this.inputRef} style={{transform: `translateX(-${offset}px)`}}>
						{ lesson }
					</div>
					<div className="cover"/>
					<div className="separator"/>
				</div>

				<div className="pressed-key inactive" ref={this.pressedKeyRef}>
					{pressedKey}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ lesson, session }) => ({
	lesson,
	session
})

const mapDispatchToProps = {
	type,
	mistake,
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput)

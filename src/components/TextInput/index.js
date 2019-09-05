import React, { Component } from 'react'
import { connect } from 'react-redux'
import { type, mistake } from '../../AC'
import './index.css'

class TextInput extends Component {

	state = {
		pressedKey: null
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

		this.setState({pressedKey: ev.key})
		this.pressedKeyRef.current.classList.toggle('inactive')
		setTimeout(() => this.pressedKeyRef.current.classList.toggle('inactive'), 250)

		//calculating offset to move
		const charWidth = this.inputRef.current.scrollWidth / lesson.length
		const offset = (pressedChars + 1) * charWidth

		//mistakes handling
		if (ev.key !== lesson[pressedChars]) {
			this.props.mistake()
			return
		}

		//move caret
		ev.target.style.transform = `translateX(-${offset}px)`
		this.props.type()

		//check the end of text
		if (pressedChars === lesson.length-1) {
			console.log(`You made ${mistakes} mistakes`)
		}
	}

	componentDidMount() {
		this.inputRef.current.focus()
		// document.addEventListener('click', () => this.inputRef.current.focus())
	}

	restart = () => {
		this.inputRef.current.style.transform = 'translateX(0)'
		this.inputRef.current.focus()
	}

	render() {
		const { pressedKey } = this.state
		const { lesson } = this.props

		if (this.inputRef.current && this.props.session.restarted) {
			this.restart()
		}

		return (
			<div className="cont">
				<div className="text-input-container">
					<div className="text-input" onKeyPress={this.handleKeyPress} tabIndex="-1" ref={this.inputRef}>
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

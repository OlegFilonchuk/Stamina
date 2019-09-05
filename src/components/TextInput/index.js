import React, { Component } from 'react'
import { connect } from 'react-redux'
import { type, mistake, restart } from '../../AC'
import './index.css'

class TextInput extends Component {

	state = {
		pressedKey: null
	}

	inputRef = React.createRef()
	pressedKeyRef = React.createRef()

	handleKeyPress = ev => {
		const { lesson, session } = this.props
		const { pressedChars, mistakes} = session

		//check the end of text
		if (pressedChars === lesson.length) {
			return
		}

		this.setState({pressedKey: ev.key})
		this.pressedKeyRef.current.classList.toggle('inactive')
		setTimeout(() => this.pressedKeyRef.current.classList.toggle('inactive'), 250)

		const offset = (pressedChars + 1) * 12.5 //need to calculate 12.5 automatically
		
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
		// this.setState({chars: 0, mistakes: 0})
		this.props.restart()
		this.inputRef.current.style.transform = 'translateX(0)'
		this.inputRef.current.focus()
	}

	render() {
		const { pressedKey } = this.state
		const { lesson } = this.props  

		return (
			<div className="cont">
				<div className="text-input-container">
					<div className="text-input" onKeyPress={this.handleKeyPress} tabIndex="-1" ref={this.inputRef}>
						{ lesson }
					</div>
					<div className="cover"></div>
					<div className="separator"></div>
				</div>

				<button onClick={this.restart} className="restart-button">Restart</button>

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
	restart
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput)
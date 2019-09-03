import React, { Component } from 'react'
import {lesson1 as text} from '../../constants'
import './index.css'

export default class TextInput extends Component {

	state = {
		str: text,
		chars: 0,
		mistakes: 0,
		pressedKey: null
	}

	inputRef = React.createRef()
	pressedKeyRef = React.createRef()

	handleKeyPress = ev => {
		const { str, chars, mistakes } = this.state

		//check the end of text
		if (chars === str.length) {
			return
		}

		this.setState({pressedKey: ev.key})
		this.pressedKeyRef.current.classList.toggle('inactive')
		setTimeout(() => this.pressedKeyRef.current.classList.toggle('inactive'), 250)

		const offset = (chars + 1) * 12.5 //need to calculate 12.5 automatically
		
		//mistakes handling
		if (ev.key !== str[chars]) {
			this.setState((prevState) => ({
				errors: prevState.errors + 1
			}))
			console.log('wrong!')
			return
		} 

		//move caret
		ev.target.style.transform = `translateX(-${offset}px)`

		this.setState((prevState) => ({
			chars: prevState.chars + 1
		}))

		//check the end of text
		if (chars === str.length-1) {
			console.log(`You made ${mistakes} mistakes`)
		}
	}
	
	componentDidMount() {
		this.inputRef.current.focus()
		document.addEventListener('click', () => this.inputRef.current.focus())
	}

	restart = () => {
		this.setState({chars: 0, errors: 0})
		this.inputRef.current.style.transform = 'translateX(0)'
		this.inputRef.current.focus()
	}

	showPressedKey = () => {

	}

	render() {
		const {pressedKey, str} = this.state

		return (
			<div className="cont">
				<div className="text-input-container">
					<div className="text-input" onKeyPress={this.handleKeyPress} tabIndex="-1" ref={this.inputRef}>
						{str}
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

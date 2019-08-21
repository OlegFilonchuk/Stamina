import React, { Component } from 'react'
import {text1} from '../../constants'
import './index.css'

export default class TextInput extends Component {

	state = {
		str: text1,
		chars: 0,
		errors: 0
	}

	inputRef = React.createRef()

	handleKeyPress = ev => {
		const { str, chars, errors } = this.state

		if (chars === str.length) {
			return
		}

		const offset = (chars + 1) * 12.5
		
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

		//check end of text
		if (chars === str.length-1) {
			console.log(`You made ${errors} mistakes`)
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

	render() {
		return (
			<div className="cont">
				<div className="text-input-container">
					<div className="text-input" onKeyPress={this.handleKeyPress} tabIndex="-1" ref={this.inputRef}>
						{text1}
					</div>
					<div className="cover"></div>
					<div className="separator"></div>
				</div>
				<div className="navbar">
					<button onClick={this.restart} className="restart-button">Restart</button>
					
				</div>
			</div>
		)
	}
}

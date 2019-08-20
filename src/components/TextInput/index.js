import React, { Component } from 'react'
import {text1} from '../../constants'
import './index.css'

export default class TextInput extends Component {

	state = {
		str: text1,
		chars: 0,
	}

	inputRef = React.createRef()

	handleKeyPress = ev => {
		const { str, chars } = this.state

		if (chars === str.length) return

		const offset = (chars + 1) * 12.5
		const target = str[chars]
		if (ev.key !== target) return 

		ev.target.style.transform = `translateX(-${offset}px)`

		this.setState((prevState) => ({
			chars: prevState.chars + 1
		}))
	}

	componentDidMount() {
		this.inputRef.current.focus()
	}

	render() {
		return (
			<div className="text-input-container">
				<div className="text-input" onKeyPress={this.handleKeyPress} tabIndex="-1" ref={this.inputRef}>
					{text1}
				</div>
				<div className="cover"></div>
				<div className="separator"></div>
			</div>
		)
	}
}

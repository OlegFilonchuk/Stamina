import React, { Component } from 'react'
import {text1} from '../../constants'
import './index.css'

export default class TextInput extends Component {

	state = {
		str: text1,
		chars: 0
	}

	inputRef = React.createRef()

	handleKeyPress = (ev) => {
		const offset = this.state.chars * 12.5;
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
			<div className="text-input-container" ref={this.ref}>
				<div className="text-input" onKeyPress={this.handleKeyPress} tabIndex="-1" ref={this.inputRef}>
					{text1}
				</div>
			</div>
		)
	}
}

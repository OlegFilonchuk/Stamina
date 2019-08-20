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
		
		if (ev.key !== str[chars]) return 

		ev.target.style.transform = `translateX(-${offset}px)`

		this.setState((prevState) => ({
			chars: prevState.chars + 1
		}))
	}

	componentDidMount() {
		this.inputRef.current.focus()
	}

	restart = () => {
		console.log('restart')
		this.setState({chars: 0})
		this.inputRef.current.style.transform = 'translateX(0)'
		this.inputRef.current.focus()
	}

	render() {
		return (
			<div>
				<div className="text-input-container">
					<div className="text-input" onKeyPress={this.handleKeyPress} tabIndex="-1" ref={this.inputRef}>
						{text1}
					</div>
					<div className="cover"></div>
					<div className="separator"></div>
				</div>
				<button onClick={this.restart}>Restart</button>
			</div>
		)
	}
}

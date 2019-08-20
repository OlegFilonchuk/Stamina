import React, { Component } from 'react'
import {text1} from '../../constants'
import './index.css'

export default class TextInput extends Component {

	handleClick = (ev) => {
		ev.target.style.transform = `translateX(20px)`
	}

	render() {
		return (
			<div className="text-input-container" ref={this.ref}>
				<div className="text-input" onClick={this.handleClick}>
					{text1}
				</div>
			</div>
		)
	}
}

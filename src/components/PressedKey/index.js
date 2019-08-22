import React, { Component } from 'react'
import './index.css'

export default class PressedKey extends Component {
	render() {
		return (
			<div className="pressed-key">
				{this.props.pressedKey}
			</div>
		)
	}
}

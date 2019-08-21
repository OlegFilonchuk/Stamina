import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<button></button>
				<button onClick={this.restart} className="restart-button">Restart</button>
			</div>
		)
	}
}

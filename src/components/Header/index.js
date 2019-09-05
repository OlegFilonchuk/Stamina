import React, { Component } from 'react'
import LessonSelect from '../LessonSelect'
import './index.css'

export default class Header extends Component {

	render() {
		return (
			<div className="header">
				<button>Start</button>
				<LessonSelect />
			</div>
		)
	}
}

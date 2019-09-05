import React, { Component } from 'react'
import * as lessons from '../../constants'
import { connect } from 'react-redux'
import { selectLesson, restart } from '../../AC'

class LessonSelect extends Component {

	state = {
		value: lessons.text1
	}

	handleChange = ev => {
		const { restart, selectLesson } = this.props

		this.setState({
			value: ev.target.value
		})
		restart()
		selectLesson(ev.target.value)
	}

	render() {
		return (
			<div>
				<label>
					Select a lesson:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value={lessons.text1}>lesson 0</option>
						<option value={lessons.lesson1}>lesson 1</option>
					</select>
				</label>
			</div>
		)
	}
}

export default connect(null, {selectLesson, restart})(LessonSelect)
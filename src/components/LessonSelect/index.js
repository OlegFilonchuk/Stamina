import React, { Component } from 'react'
import * as lessons from '../../constants'
import { connect } from 'react-redux'
import { selectLesson } from '../../AC'

class LessonSelect extends Component {

	state = {
		value: lessons.text1
	}

	handleChange = ev => {
		this.setState({
			value: ev.target.value
		})
		this.props.selectLesson(ev.target.value)
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

export default connect(null, {selectLesson})(LessonSelect)
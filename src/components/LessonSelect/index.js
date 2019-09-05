import React, { Component } from 'react'
import { lessons } from '../../constants'
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

	getOptions = (lessons) => {
		return lessons.map((item, i) => <option value={item}>Lesson {i+1}</option>)
	}

	render() {
		return (
			<div>
				<label>
					Select a lesson:
					<select value={this.state.value} onChange={this.handleChange}>
						{this.getOptions(lessons)}
					</select>
				</label>
			</div>
		)
	}
}

export default connect(null, {selectLesson, restart})(LessonSelect)
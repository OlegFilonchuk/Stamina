import React, { Component } from 'react'
import { lessons } from '../../constants'
import { connect } from 'react-redux'
import { selectLesson, restart } from '../../AC'

class LessonSelect extends Component<{restart:any, selectLesson:any}> {

	state = {
		value: lessons[0]
	}

	handleChange = (ev:any) => {
		const { restart, selectLesson } = this.props

		this.setState({
			value: ev.target.value
		})
		restart()
		selectLesson(ev.target.value)
	}

	getOptions = (lessons:string[]) => {
		return lessons.map((item, i) => <option value={item} key={i}>Lesson {i+1}</option>)
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

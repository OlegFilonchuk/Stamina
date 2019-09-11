import React, { Component } from 'react'
import { lessons } from '../../constants'
import { connect } from 'react-redux'
import { Action, Dispatch, bindActionCreators } from 'redux'
import { selectLessonAction } from '@redux/reducers/lesson'
import { restartAction } from '@redux/reducers/session'
import { StyledLessonSelect } from './LessonSelectStyle';

interface DispatchProps {
	restart(): void;
	selectLesson(value: string): void;
}

interface IState {
	value: string;
}

class LessonSelect extends Component<DispatchProps, IState> {

	state: IState = {
		value: lessons[0]
	};

	handleChange = (ev:React.ChangeEvent<HTMLSelectElement>) => {
		const { restart, selectLesson } = this.props;

		this.setState({
			value: ev.target.value
		});
		restart();
		selectLesson(ev.target.value)
	};

	getOptions = (lessons:string[]) => {
		return lessons.map((item, i) => <option value={item} key={i}>Lesson {i+1}</option>)
	};

	render() {
		return (
			<StyledLessonSelect>
				<label>
					Select a lesson:
					<select value={this.state.value} onChange={this.handleChange}>
						{this.getOptions(lessons)}
					</select>
				</label>
			</StyledLessonSelect>
		)
	}
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => bindActionCreators(
	{
		selectLesson: selectLessonAction,
		restart: restartAction
	},
	dispatch
);

export default connect(null, mapDispatchToProps)(LessonSelect)

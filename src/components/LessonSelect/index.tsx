import React, { Component } from 'react';
import { lessons } from '../../constants';
import { connect } from 'react-redux';
import { Action, Dispatch, bindActionCreators } from 'redux';
import { selectLessonAction } from '@redux/reducers/lesson';
import { restartAction } from '@redux/reducers/session';
import { Select } from 'semantic-ui-react';
import { StyledLessonSelect } from './LessonSelectStyle';

interface DispatchProps {
	restart(): void;
	selectLesson(value: string): void;
}

interface Option {
	text: string;
	key: number;
	value: string
}

class LessonSelect extends Component<DispatchProps> {
	handleChange = (ev: React.SyntheticEvent<HTMLElement, Event>,data:any) => {
		const { restart, selectLesson } = this.props;

		restart();
		selectLesson((data.options.find((elem: Option) => elem.text === ev.target.innerText)).value)
	};

	options = lessons.map((item, i) => ({
		text: `Lesson ${i+1}`,
		key: i,
		value: item,
	}))

	render() {
		return (
			<StyledLessonSelect>
				<Select onChange={this.handleChange} placeholder='Select lesson' options={this.options} />
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

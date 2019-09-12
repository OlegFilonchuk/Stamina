import React, { Component } from 'react';
import { map, find, isEqual } from 'lodash';
import { lessons } from '../../constants';
import { connect } from 'react-redux';
import { Action, Dispatch, bindActionCreators } from 'redux';
import { selectLessonAction } from '@redux/reducers/lesson';
import { restartAction } from '@redux/reducers/session';
import { Select, DropdownProps } from 'semantic-ui-react';
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

	handleChange = (ev: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		const { restart, selectLesson } = this.props;
		restart();
		data.options && selectLesson((find(data.options, (elem: Option) => isEqual(elem.text, ev.currentTarget.innerText))).value)
	};

	options = map(lessons, (item: string, i: number) => ({
		text: `Lesson ${i+1}`,
		key: i,
		value: item,
	}));

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

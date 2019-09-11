import React, { Component } from 'react'
import LessonSelect from '@components/LessonSelect'
import { connect } from 'react-redux'
import { Dispatch, Action, bindActionCreators } from 'redux'
import {restartAction} from '@redux/reducers/session'
import { StyledHeader } from './HeaderStyle';

interface DispatchProps {
	restart(): void;
}

class Header extends Component<DispatchProps> {
	render() {
		return (
			<StyledHeader>
				<LessonSelect />
				<button onClick={this.props.restart}>Restart</button>
			</StyledHeader>
		)
	}
}

const mapDispatchToProps = (dispatch: Dispatch<Action>):DispatchProps  => bindActionCreators(
	{
		restart: restartAction
	},
	dispatch
);

export default connect(null, mapDispatchToProps)(Header)
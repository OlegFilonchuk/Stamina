import React, { Component } from 'react'
import LessonSelect from '../LessonSelect'
import { connect } from 'react-redux'
import { Dispatch, Action, bindActionCreators } from 'redux'
import './index.css'
import {restartAction} from "../../reducers/session";

interface DispatchProps {
	restart(): void;
}

class Header extends Component<DispatchProps> {

	render() {
		return (
			<div className="header">
				<LessonSelect />
				<button onClick={this.props.restart}>Restart</button>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch: Dispatch<Action>):DispatchProps  => bindActionCreators(
	{
		restart: () => restartAction()
	},
	dispatch
);

export default connect(null, mapDispatchToProps)(Header)
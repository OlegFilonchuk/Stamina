import React, { Component } from 'react'
import LessonSelect from '../LessonSelect'
import { connect } from 'react-redux'
import { restart } from '../../AC'
import './index.css'

class Header extends Component {

	render() {
		return (
			<div className="header">
				<LessonSelect />
				<button onClick={this.props.restart}>Restart</button>
			</div>
		)
	}
}

export default connect(null, {restart})(Header)
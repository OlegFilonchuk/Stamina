import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Action, bindActionCreators, Dispatch } from 'redux'
import { typeAction, mistakeAction, SessionState } from '@redux/reducers/session'
import { StoreState } from '@redux/Store'
import styled from 'styled-components';
// import './index.css'

const StyledCont = styled.div`
	width:80%;
	margin: 50px auto;

	.text-input-container {
		position: relative;
		background-color: rgb(149, 211, 252);
		font-size: 25px;
		overflow: hidden;
		border: 2px solid black;
		border-radius: 5px;
	}

	.text-input {
		position: relative;
		white-space: nowrap;
		font-family: 'Ubuntu mono', monospace;
		text-align: left;
		margin-left: 50%;
		user-select: none;
		transition: all .1s;
		z-index: 1;
	}

	.text-input:focus {
		outline: none;
	}

	.separator {
		position: absolute;
		top: 0;
		left: calc(50% - 1px);
		height: 100%;
		width: 1px;
		background-color: #000;
		z-index: 0;
	}

	.cover {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: calc(50% - 1px);
		z-index: 2;
		background: linear-gradient(90deg, rgb(197, 197, 197), rgba(197, 197, 197, .7));
	}

	.restart-button {
		outline: none;
		border: 1px solid grey;
		border-radius: 2px;
		background-color: #eee;
	}

	.restart-button:hover {
		cursor: pointer;
	}

	.pressed-key {
		background-color: #000;
		color: #eee;
		font-size: 35px;
		line-height: 100px;
		width: 100px;
		height: 100px;
		border-radius: 5px;
		margin: auto;
		transition: opacity .05s ease-in;
	}

	.active {
		opacity: 1;
	}

	.inactive {
		opacity: 0;
	}
`;

interface IState {
    pressedKey: string | undefined;
    offset: number;
}

interface ReduxProps {
	lesson: string;
	session: SessionState;
}

interface DispatchProps {
	mistake(): void;
	type(): void;
}

type Props = ReduxProps & DispatchProps;

class TextInput extends Component<Props, IState> {

	//TODO: try to search ref type
	private readonly inputRef: any;
	private readonly pressedKeyRef: any;

	constructor(props: Props) {
		super(props);
		this.state = {
			pressedKey: undefined,
			offset: 0
		};
		this.inputRef = createRef();
		this.pressedKeyRef = createRef();
	}

	handleKeyPress = (ev: React.KeyboardEvent) => {
		const { lesson, session } = this.props;
		const { pressedChars, mistakes } = session;

		//check the end of text
		if (pressedChars === lesson.length) {
			return
		}

		this.setState({ pressedKey: ev.key });

		this.pressedKeyRef.current && this.pressedKeyRef.current.classList.toggle('inactive');
		setTimeout(() => this.pressedKeyRef.current && this.pressedKeyRef.current.classList.toggle('inactive'), 250);

		//mistakes handling
		if (ev.key !== lesson[pressedChars]) {
			this.props.mistake();
			return
		}

		//calculating offset to move
		const charWidth = this.inputRef.current && this.inputRef.current.scrollWidth / lesson.length;
		const offset = charWidth && (pressedChars + 1) * charWidth;

		this.setState({ offset: offset });

		//move caret
		this.props.type();

		//check the end of text
		if (pressedChars === lesson.length-1) {
			console.log(`You made ${mistakes} mistakes`)
		}
	};

	componentDidMount() {
		this.restart()
	}

	static getDerivedStateFromProps (nextProps: Props, prevState: IState): IState | null {
		return nextProps.session.pressedChars === 0 ? {
			...prevState,
			offset: 0
		} : null
	}

	restart = () => {
		const node = this.inputRef.current;
		node && node.focus()
	};

	render() {
		const { pressedKey, offset } = this.state;
		const { lesson } = this.props;
		if (this.inputRef.current && this.props.session.restarted) {
			this.restart()
		}

		return (
			<StyledCont>
				<div className="text-input-container">
					<div className="text-input" onKeyPress={this.handleKeyPress} tabIndex={-1} ref={this.inputRef} style={{transform: `translateX(-${offset}px)`}}>
						{ lesson }
					</div>
					<div className="cover"/>
					<div className="separator"/>
				</div>

				<div className="pressed-key inactive" ref={this.pressedKeyRef}>
					{pressedKey}
				</div>
			</StyledCont>
		)
	}
}

const mapStateToProps = (state: StoreState): ReduxProps => {
	return {
		lesson: state.lessonState.lesson,
		session: state.sessionState
	}
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps =>  bindActionCreators(
	{
		type: () => typeAction(),
		mistake: () => mistakeAction()
	},
	dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(TextInput)

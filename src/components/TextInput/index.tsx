import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Action, bindActionCreators, Dispatch } from 'redux'
import { typeAction, mistakeAction, SessionState } from '@redux/reducers/session'
import { StoreState } from '@redux/Store'
import { StyledTextInput } from './StyledTextInput';


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

	componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<IState>, snapshot?: any): void {
		if(this.props.session.restarted && this.inputRef.current) {
			this.restart();
		}
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
		// if (this.inputRef.current && this.props.session.restarted) {
		// 	this.restart()
		// }

		return (
			<StyledTextInput>
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
			</StyledTextInput>
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
		type: typeAction,
		mistake: mistakeAction
	},
	dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(TextInput)

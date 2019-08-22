import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'

export default function PressedKey() {

	const [pressedKey, setPressedKey] = useState(false)

	const onClick = () => {
		setPressedKey(true)
		console.log(this.state.pressedKey)
	}

	return (
		<div>
			<button onClick={onClick}>press me</button>

			<CSSTransition
				in={this.state.pressedKey}
				timeout={500}
				classNames="pressed-key"
			>
				<div>
					{pressedKey}
				</div>
			</CSSTransition>
		</div>
	)
}

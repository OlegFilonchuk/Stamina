import React, { useState, createRef } from 'react'
import './index.css'

export default function PressedKey() {

	// const [pressedKey, setPressedKey] = useState(false)

	const ref = createRef()

	const onClick = () => {
		// setPressedKey(!pressedKey)
		ref.current.classList.toggle('inactive')
		setTimeout(() => ref.current.classList.toggle('inactive'), 300)
	}

	return (
		<div>
			<button onClick={onClick}>press me</button>

			<div className="pressed inactive" ref={ref}>
				{'pressedKey.toString()'}
			</div>
		</div>
	)
}

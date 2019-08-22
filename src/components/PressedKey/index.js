import React, { createRef } from 'react'
import './index.css'

export default function PressedKey() {

	const ref = createRef()

	const onClick = () => {
		ref.current.classList.toggle('inactive')
		setTimeout(() => ref.current.classList.toggle('inactive'), 150)
	}

	return (
		<div>
			{'k'}
		</div>
	)
}

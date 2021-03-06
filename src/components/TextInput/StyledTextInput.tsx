import styled from 'styled-components';

export const StyledTextInput = styled.div`

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
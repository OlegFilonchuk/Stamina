import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux'
import App from './App';
import Store from '@redux/Store'
import './index.css';

ReactDOM.render(
	<Provider store={Store} context={ReactReduxContext}>
		<App />
	</Provider>, document.getElementById('root')
	);

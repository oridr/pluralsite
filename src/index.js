'use strict';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import 'styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';

const store = configureStore();

store.subscribe(() => console.log(store.getState())); // eslint-disable-line no-console

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
	<Provider store={ store }>
		<Router history={ browserHistory } routes={ routes } />
	</Provider>,
	document.getElementById('app')
);

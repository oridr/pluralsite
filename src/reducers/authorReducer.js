import * as types from '../actions/actionTypes';
import initialState from './initialState';

const authorReducer = (state = initialState.authors, { type, payload }) => {
	switch(type) {
		case types.LOAD_AUTHORS_SUCCESS:
			return payload.authors;

		default:
			return state;
	}
};

export default authorReducer;

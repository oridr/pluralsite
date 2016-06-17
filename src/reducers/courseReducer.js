import * as types from '../actions/actionTypes';
import initialState from './initialState';

const courseReducer = (state = initialState.courses, { type, payload }) => {
	switch(type) {
		case types.LOAD_COURSES_SUCCESS:
			return payload.courses;

		default:
			return state;
	}
};

export default courseReducer;

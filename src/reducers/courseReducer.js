import * as types from '../actions/actionTypes';

const courseReducer = (state = [], { type, payload }) => {
	switch(type) {
		case types.LOAD_COURSES_SUCCESS:
			return payload.courses;

		default:
			return state;
	}
};

export default courseReducer;

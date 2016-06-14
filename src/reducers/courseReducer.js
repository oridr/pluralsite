import * as types from '../actions/actionTypes';

const courseReducer = (state = [], { type, payload }) => {
	switch(type) {
		case types.CREATE_COURSE:
			return [...state,
				{ ...payload.course }
			];

		default:
			return state;
	}
};

export default courseReducer;

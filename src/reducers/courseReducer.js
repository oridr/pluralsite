import * as types from '../actions/actionTypes';
import initialState from './initialState';

const courseReducer = (state = initialState.courses, { type, payload }) => {
	switch(type) {
		case types.LOAD_COURSES_SUCCESS:
			return payload.courses;

		case types.UPDATE_COURSE_SUCCESS:
			const courseIndex = state.findIndex((course) => course.id === payload.course.id);

			return [
				...state.slice(0, courseIndex),
				{ ...payload.course },
				...state.slice(courseIndex + 1)
			];

		case types.CREATE_COURSE_SUCCESS:
			return [
				...state,
				{ ...payload.course }
			];

		default:
			return state;
	}
};

export default courseReducer;

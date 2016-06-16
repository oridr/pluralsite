import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export const loadCoursesSuccess = (courses) => ({
	type: types.LOAD_COURSES_SUCCESS,
	payload: {
		courses
	}
});

export const loadCourses = () => (dispatch) => {
	return courseApi
		.getAllCourses()
		.then((courses) => dispatch(loadCoursesSuccess(courses)))
		.catch((error) => {
			throw(error);
		});
};

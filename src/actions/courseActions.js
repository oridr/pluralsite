import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export const loadCoursesSuccess = (courses) => ({
	type: types.LOAD_COURSES_SUCCESS,
	payload: {
		courses
	}
});

export const createCourseSuccess = (course) => ({
	type: types.CREATE_COURSE_SUCCESS,
	payload: {
		course
	}
});

export const updateCourseSuccess = (course) => ({
	type: types.UPDATE_COURSE_SUCCESS,
	payload: {
		course
	}
});

export const loadCourses = () => (dispatch) => courseApi
	.getAllCourses()
	.then((courses) => dispatch(loadCoursesSuccess(courses)))
	.catch((error) => {
		throw(error);
	});

export const saveCourse = (course) => (dispatch) => courseApi
	.saveCourse(course)
	.then((savedCourse) => dispatch(course.id !== undefined ? updateCourseSuccess(savedCourse) : createCourseSuccess(savedCourse)))
	.catch((error) => {
		throw(error);
	});

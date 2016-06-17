import * as types from './actionTypes';
import authorsApi from '../api/mockAuthor';

export const loadAuthorsSuccess = (authors) => ({
	type: types.LOAD_AUTHORS_SUCCESS,
	payload: {
		authors
	}
});

export const loadAuthors = () => (dispatch) => authorsApi
	.getAllAuthors()
	.then((authors) => dispatch(loadAuthorsSuccess(authors)))
	.catch((error) => {
		throw(error);
	});

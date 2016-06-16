import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CourseListRow = ({ watchHref, id, title, authorId, category, length }) => (
	<tr>
		<td>
			<a href={ watchHref } target="_blank">Watch</a>
		</td>
		<td>
			<Link to={ `/course/${id}` }>{ title }</Link>
		</td>
		<td>{ authorId }</td>
		<td>{ category }</td>
		<td>{ length }</td>
	</tr>
);

CourseListRow.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	watchHref: PropTypes.string.isRequired,
	authorId: PropTypes.string,
	category: PropTypes.string,
	length: PropTypes.string
};

export default CourseListRow;

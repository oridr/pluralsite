import React, { PropTypes } from 'react';

import CourseListRow from './CourseListRow';

const CourseList = ({ courses = [] }) => (
	<table class="table">
		<thead>
		<tr>
			<th />
			<th>Title</th>
			<th>Author</th>
			<th>Category</th>
			<th>Length</th>
		</tr>
		</thead>

		<tbody>
		{
			courses.map((course) => (
				<CourseListRow key={ course.id } { ...course } />
			))
		}
		</tbody>
	</table>
);

CourseList.propTypes = {
	courses: PropTypes.array.isRequired
};

export default CourseList;

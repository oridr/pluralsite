'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CourseList from './CourseList';

export class CoursePage extends Component {
	static propTypes = {
		courses: PropTypes.array.isRequired
	}

	constructor(props, context) {
		super(props, context);
	}

	render() {
		const { courses } = this.props;

		return (
			<div>
				<h1>Courses</h1>

				<Link to="course">Add Course</Link>

				<CourseList courses={ courses } />
			</div>
		);
	}
}

const mapStateToProps = ({ courses }) => ({
	courses
});

export default connect(mapStateToProps)(CoursePage);

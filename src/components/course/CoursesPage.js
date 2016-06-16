'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

export class CoursePage extends Component {
	static propTypes = {
		courses: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}

	constructor(props, context) {
		super(props, context);
	}

	componentWillMount() {
		this.props.actions.loadCourses();
	}

	render() {
		const { courses } = this.props;
		return (
			<div>
				<h1>Courses</h1>

				<CourseList courses={ courses } />
			</div>
		);
	}
}

const mapStateToProps = ({ courses }) => ({
	courses
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(courseActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);

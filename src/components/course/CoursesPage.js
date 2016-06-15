'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';

export class CoursePage extends Component {
	static propTypes = {
		courses: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}

	constructor(props, context) {
		super(props, context);
	}

	courseRow(course, index) {
		return (
			<li key={ index }>{ course.title }</li>
		);
	}

	render() {
		return (
			<div>
				<h1>Courses</h1>

				<ul>
					{
						this.props.courses.map(this.courseRow)
					}
				</ul>
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

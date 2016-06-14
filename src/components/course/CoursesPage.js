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

		this.state = {
			course: {
				title: ''
			}
		};

		this.onTitleChange = this.onTitleChange.bind(this);

		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({ course });
	}

	onClickSave() {
		this.props.actions.createCourse(this.state.course);
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

				<input type="text"
					onChange={ this.onTitleChange }
					value={ this.state.course.title }
				/>

				<input type="submit"
					onClick={ this.onClickSave }
				/>
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

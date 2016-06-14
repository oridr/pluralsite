'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { createCourse } from '../../actions/courseActions';

export class CoursePage extends Component {
	static propTypes = {
		onTitleChange: PropTypes.func.isRequired
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
		this.props.onTitleChange(this.state.course);
	}

	render() {
		return (
			<div>
				<h1>Courses</h1>

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
	onTitleChange: (course) => dispatch(createCourse(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';

import * as actions from '../../../actions/courseActions';

export class ManageCoursePage extends Component {
	static propTypes = {
		course: PropTypes.object,
		authors: PropTypes.array.isRequired
	};

	static contextTypes = {
		router: PropTypes.object
	};

	constructor(props, context) {
		super(props, context);

		console.log(props);

		this.state = {
			course: { ...this.props.course },
			errors: {}
		};

		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	updateCourseState(e) {
		const { name, value } = e.target;
		const course = {
			...this.state.course,
			[name]: value
		};

		return this.setState({ course });
	}

	saveCourse(e) {
		e.preventDefault();
		this.props.actions.saveCourse(this.state.course);
		this.context.router.push('/courses');
	}

	render() {
		const { course, authors } = this.props;

		return (
			<CourseForm
				allAuthors={ authors }
				course={ course }
				onChange={ this.updateCourseState }
				onSave={ this.saveCourse }
				errors={ this.state.errors }
			/>
		);
	}
}

const mapStateToProps = ({ courses, authors }, { params }) => ({
	course: courses.find((course) => course.id === params.id ) || {},
	authors: authors.map(({ id, firstName, lastName }) => ({
		value: id,
		text: `${firstName} ${lastName}`
	}))
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';

import * as actions from '../../../actions/courseActions';

export class ManageCoursePage extends Component {
	static propTypes = {
		course: PropTypes.object.isRequired,
		authors: PropTypes.array.isRequired
	};

	constructor(props, context) {
		super(props, context);
	}

	render() {
		const { course, authors } = this.props;

		return (
			<CourseForm
				allAuthors={ authors }
				course={ course }
				onChange={ () => {} }
				onSave={ () => {} }
				errors={ {} }
			/>
		);
	}
}

const mapStateToProps = ({ courses, authors }, { params }) => ({
	course: courses.find((course) => course.id = params.id ) || null,
	authors: authors.map(({ id, firstName, lastName }) => ({
		value: id,
		text: `${firstName} ${lastName}`
	}))
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

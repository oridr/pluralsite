import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';

import * as actions from '../../../actions/courseActions';

export class ManageCoursePage extends Component {
	static propTypes = {
	};

	constructor(props, context) {
		super(props, context);
	}

	render() {
		const { course } = this.props;

		return (
			<CourseForm
				allAuthors={ [] }
				course={ course }
				onChange={ () => {} }
				onSave={ () => {} }
				errors={ {} }
			/>
		);
	}
}

const mapStateToProps = ({ courses }, { params }) => ({
	course: courses.find((course) => course.id = params.id ) || null
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

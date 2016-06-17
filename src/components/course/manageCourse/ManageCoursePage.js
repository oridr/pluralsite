import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../../actions/courseActions';

export class ManageCoursePage extends Component {
	static propTypes = {};

    constructor(props, context) {
        super(props, context);
    }

    render() {
		const { params: { id } } = this.props;

        return (
			<h1>{ id }</h1>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

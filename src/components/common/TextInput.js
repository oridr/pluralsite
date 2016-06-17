import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => (
	<div>
		<label htmlFor={ name }>{ label }</label>
		<div className={ classNames({
			'form-group': true,
			'has-error': error && error.length > 0
		})}>
			<input
				id={ name }
				name={ name }
				className="form-control"
				placeholder={ placeholder }
				defaultValue={ value }
				onChange={ onChange }
				type="text"/>
			{ error &&
				<div className="alert alert-danger">{ error }</div>
			}
		</div>
	</div>
);

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string
};

export default TextInput;

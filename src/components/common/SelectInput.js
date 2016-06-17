import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const SelectInput = ({ name, label, onChange, defaultOption, placeholder, value, error, options }) => (
	<div className="form-group">
		<label htmlFor={ name }>{ label }</label>
		<div className="field">
			<select
				id={ name }
				name={ name }
				value={ value }
				onChange={ onChange }
				className="form-control">
				<option value="">{ defaultOption }</option>
				{
					options.map(({ value, text}) => (
						<option key={ value } value={ value }>{ text }</option>
					))
				}
			</select>
			{ error &&
			<div className="alert alert-danger">{ error }</div>
			}
		</div>
	</div>
);

SelectInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	defaultOption: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;

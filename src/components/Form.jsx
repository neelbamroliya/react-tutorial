import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ heading }) => {
	const [text, setText] = useState("Enter text here");

	const handleUppercaseClick = () => {
		setText(text.toUpperCase());
	};

	const handleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div>
			<div className='mb-3'>
				<h1>{heading}</h1>
				<label htmlFor='textBox' className='form-label'>
					text
				</label>
				<textarea
					className='form-control'
					value={text}
					onChange={handleChange}
					id='textBox'
					rows='8'
				></textarea>
			</div>
			<button className='btn btn-primary' onClick={handleUppercaseClick}>
				Convert to UPPERCASE
			</button>
		</div>
	);
};

Form.propTypes = {
	heading: PropTypes.string.isRequired,
};

export default Form;

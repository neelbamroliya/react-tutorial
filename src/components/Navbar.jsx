import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
	//getting props here
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				{/* setting props here */}
				<a className='navbar-brand' href='/'>
					{title}
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a
								className='nav-link active'
								aria-current='page'
								href='/'
							>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								About
							</a>
						</li>
					</ul>
					<form className='d-flex' role='search'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<button
							className='btn btn-outline-success'
							type='submit'
						>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

// proptypes validations
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

// default props setting
Navbar.defaultProps = {
	title: "Your App Name",
};

export default Navbar;

import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

const whitespace = ' ';
export default class CustomerAccountRegister extends Component {
	constructor(props) {
		super(props);
		this.state = { validated: false };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.setValidated(true);
	}
	setValidated(validated) {
		let state = this.state;
		state.validated = validated;
		this.setState(this.state);
	}
	render() {
		return (
			<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
				<fieldset>
					<legend>Customer Register</legend>
					<Form.Group>
						<label>Email:</label>
						<Form.Control name="email" type="email" placeholder="Enter your email" required defaultValue="email@example.com" />
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group>
						<label>Password:</label>
						<Form.Control name="password" type="password" placeholder="Enter your password" required />
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type="invalid">Please Enter Your Password!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group>
						<label>Confirm Password:</label>
						<Form.Control name="confirmPassword" type="password" placeholder="Enter your confirm password" required />
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type="invalid">Please Enter Your Confirm Password!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group>
						<Form.Check
							required
							label="Agree to terms and conditions"
							feedback="You must agree before submitting."
						/>
					</Form.Group>
					<Form.Group>
						<Button type="submit" color="primary">Register</Button> {whitespace}
						<a href="/customer/login">Login</a>
					</Form.Group>
				</fieldset>
			</Form>
		)
	}
}
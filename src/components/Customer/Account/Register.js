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
					{this.props.fields && this.props.fields.map((fieldSetting) => {
						return (
							<Form.Group key={fieldSetting.index}>
								<label>{fieldSetting.label}:</label>

								{this.createFormControl(fieldSetting)}

							</Form.Group>
						);
					})}
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

	createFormControl(fieldSetting) {
		return (
			<>
				{fieldSetting.type === 'select' ? (
					<Form.Control name={fieldSetting.index} as={fieldSetting.type} placeholder={"Enter your " + fieldSetting.label} required>
						<option value={''}>{fieldSetting.label}</option>
						{fieldSetting.options.map((option) => {
						return <option key={option.value} value={option.value}>{option.label}</option>;
						})}
					</Form.Control>
				) : (
						<Form.Control name={fieldSetting.index} type={fieldSetting.type} placeholder={"Enter your " + fieldSetting.label} required />
					)}

				<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				<Form.Control.Feedback type="invalid">Please Enter Your {fieldSetting.label}!</Form.Control.Feedback>
			</>
		);
	}
}
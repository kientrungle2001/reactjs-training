import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

const whitespace = ' ';
export default class CustomerAccountRegister extends Component {
	constructor(props) {
		super(props);
		this.state = { validated: false, fieldValues: {}, fieldValidation: {} };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	render() {
		let {fieldValues, fieldValidation} = this.state;
		return (
			<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
				<fieldset>
					<legend>Customer Register</legend>
					{this.props.fields && this.props.fields.map((fieldSetting) => {
						return (
							<Form.Group key={fieldSetting.index}>
								<label>{fieldSetting.label}:</label>

								{this.createFormControl(fieldSetting, fieldValues[fieldSetting.index] || '', fieldValidation[fieldSetting.index] || null)}

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

	handleSubmit(evt) {
		evt.preventDefault();
		this.setValidated(true);
		if(this.validate()) {
			if(this.props.onSubmit)
				this.props.onSubmit(this.state.fieldValues);
		}
	}
	validate() {
		let fieldValidation = {
			email: {
				valid: false,
				message: 'This field is required'
			}
		}
		this.updateFieldValidation(fieldValidation);
		return false;
	}
	setValidated(validated) {
		let state = this.state;
		state.validated = validated;
		this.setState(this.state);
	}

	updateFieldValue(field, value) {
		let { state } = this;
		state.fieldValues[field] = value;
		this.setState(state);
	}

	updateFieldValidation(fieldValidation) {
		let { state } = this;
		state.fieldValidation = fieldValidation;
		this.setState(state);
	}

	createFormControl(fieldSetting, value = null, validation = null) {
		return (
			<>
				{fieldSetting.type === 'select' ? (
					<Form.Control name={fieldSetting.index} as={fieldSetting.type} placeholder={"Enter your " + fieldSetting.label} value={value} onChange={(e) => { this.updateFieldValue(fieldSetting.index, e.target.value) }}>
						<option value={''}>{fieldSetting.label}</option>
						{fieldSetting.options.map((option) => {
							return <option key={option.value} value={option.value}>{option.label}</option>;
						})}
					</Form.Control>
				) : (
						<Form.Control name={fieldSetting.index} type={fieldSetting.type} placeholder={"Enter your " + fieldSetting.label} value={value} onChange={(e) => { this.updateFieldValue(fieldSetting.index, e.target.value) }} required={fieldSetting.required} />
					)}

				<Form.Control.Feedback type="invalid">{validation && validation.message}</Form.Control.Feedback>
			</>
		);
	}
}
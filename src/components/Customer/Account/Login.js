import React, { Component } from 'react';
import { Form, Button, Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import CustomerRepository from '../../../models/repositories/Customer';

const whitespace = ' ';
function validateEmail(mail) {
	if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}

class CustomerAccountLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: null, // 'validated'
			validation: {
				email: {
					valid: false,
					message: '* Email is required'
				},
				password: {
					valid: false,
					message: '* Password is required'
				}
			}
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.emailValue = 'example@gmail.com';
		this.passwordValue = '12345678';
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
	}
	handleSubmit(event) {
		event.preventDefault();
		this.validate(() => {
			let state = this.state;
			state.validated = 'validated';
			this.setState(state);
		}, () => {
			CustomerRepository.login(this.emailRef.current.value, this.passwordRef.current.value)
				.then((resp) => {
					console.log('response on submit');
					console.log(resp);
				})
				.catch((err) => {
					console.log('error on submit');
					console.log(err);
				});
		});
	}
	validate(onAfterValidate, onSuccess) {
		let { state } = this;
		let { validation } = state;
		let valid = true;
		if (!this.emailRef.current.value) {
			validation.email.valid = false;
			validation.email.message = '* This field is required!';
			valid = false;
		} else if (!validateEmail(this.emailRef.current.value)) {
			validation.email.valid = false;
			validation.email.message = '* Please enter a valid email!';
			valid = false;
		} else {
			validation.email.valid = true;
			validation.email.message = null;
		}
		if (!this.passwordRef.current.value) {
			validation.password.valid = false;
			validation.password.message = '* This field is required!';
			valid = false;
		} else if (this.passwordRef.current.value.length < 8) {
			validation.password.valid = false;
			validation.password.message = '* Password at least 8 characters!';
			valid = false;
		} else {
			validation.password.valid = true;
			validation.password.message = null;
		}
		this.setState(state);
		onAfterValidate();
		if (valid) {
			onSuccess();
		}
	}
	render() {
		let { validated, validation } = this.state;
		let { email, password } = validation;
		return (
			<Form noValidate validated={validated} onSubmit={this.handleSubmit}>
				<fieldset>
					<legend>Customer Login</legend>
					<FormGroup>
						<Label for="email">Email:</Label>
						<Input name="email" type="email" innerRef={this.emailRef} placeholder="Enter your email" required
							valid={null === validated ? null : email.valid}
							invalid={null === validated ? null : !email.valid} />
						{null !== validated ? (!email.valid ? <FormFeedback valid={email.valid}>{email.message}</FormFeedback> : '') : ''}
					</FormGroup>
					<FormGroup>
						<Label for="password">Password:</Label>
						<Input name="password" type="password" innerRef={this.passwordRef} placeholder="Enter your password" required
							valid={null === validated ? null : password.valid}
							invalid={null === validated ? null : !password.valid} />
						{null !== validated ? (!password.valid ? <FormFeedback valid={password.valid}>{password.message}</FormFeedback> : '') : ''}
					</FormGroup>
					<FormGroup>
						<Button type="submit" color="primary">Login</Button> {whitespace}
						<a href="/customer/register">Register</a>
					</FormGroup>
				</fieldset>
			</Form>
		)
	}
}

export default CustomerAccountLogin;
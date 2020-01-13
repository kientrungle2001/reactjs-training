export default {
	registerFields: [
		{
			label: 'Email',
			index: 'email',
			type: 'email',
			required: true,
			validation: {
				required: true,
				email: 'Please enter a valid email address'
			}
		},
		{
			label: 'Password',
			index: 'password',
			type: 'password',
			validation: {
				required: true,
				minlength: {
					length: 8,
					message: 'Please enter password more than {length} characters'
				}
			}
		},
		{
			label: 'Confirm Password',
			index: 'confirmPassword',
			type: 'password',
			validation: {
				required: true,
				minlength: {
					length: 8,
					message: 'Please enter password more than {length} characters'
				},
				match: {
					source: 'password',
					message: 'Please enter the same password again'
				}
			}
		},
		{
			label: 'Address',
			index: 'address',
			type: 'text'
		},
		{
			label: 'Birthdate',
			index: 'dob',
			type: 'date'
		},
		{
			label: 'Gender',
			index: 'gender',
			type: 'select',
			options: [
				{
					value: 'male',
					label: 'Male'
				},
				{
					value: 'female',
					label: 'Female'
				}
			]
		}
	]
}
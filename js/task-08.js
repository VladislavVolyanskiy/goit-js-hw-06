const loginFormRef = document.querySelector('.login-form');

const onFormSubmit = event => {
	event.preventDefault();

	const { email, password } = event.target.elements;
	const formValues = { email: email.value, password: password.value };

	if (email.value === '' || password.value === '') {
		return alert('Please fill both fields!');
	}

	console.table(formValues);
	event.currentTarget.reset();
};

loginFormRef.addEventListener('submit', onFormSubmit);

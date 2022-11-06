const passwordInput = document.getElementById('validation-input');

const onInputBlur = event => {
	if (event.currentTarget.value.length === 0) {
		onInputReset;
	} else if (
		event.currentTarget.value.length === Number(passwordInput.getAttribute('data-length'))
	) {
		passwordInput.classList.add('valid');
	} else {
		passwordInput.classList.add('invalid');
	}
};

const onInputReset = () => {
	passwordInput.classList.remove('valid');
	passwordInput.classList.remove('invalid');
};

passwordInput.addEventListener('focus', onInputReset);
passwordInput.addEventListener('blur', onInputBlur);

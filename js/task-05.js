const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const onInputChange = event => {
	if (inputRef.value.length !== 0) {
		outputRef.textContent = event.currentTarget.value;
	} else outputRef.textContent = 'Anonymous';
};

inputRef.addEventListener('input', onInputChange);

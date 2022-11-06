const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

const render = () => {
	valueRef.textContent = counterValue;
};

const decreaseCounter = () => {
	counterValue -= 1;
	render();
};

const increaseCounter = () => {
	counterValue += 1;
	render();
};

buttonDecrement.addEventListener('click', decreaseCounter);
buttonIncrement.addEventListener('click', increaseCounter);

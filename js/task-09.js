const btnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', onBndColorRandomize);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function onBndColorRandomize() {
	spanRef.textContent = getRandomHexColor();
	bodyRef.style.backgroundColor = getRandomHexColor();
}

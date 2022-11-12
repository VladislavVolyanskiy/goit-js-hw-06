const refs = {
	input: document.querySelector('input'),
	btnCreate: document.querySelector('[data-create]'),
	btnDestroy: document.querySelector('[data-destroy]'),
	wrapForBoxes: document.querySelector('#boxes'),
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
	const boxesArr = [];

	amount = refs.input.value;

	for (let i = 0; i < amount; i++) {
		const box = document.createElement('div');

		box.style.width = `${20 + i * 10}px`;
		box.style.height = `${20 + i * 10}px`;
		box.style.backgroundColor = getRandomHexColor();

		boxesArr.push(box);
	}
	// console.log(boxesArr);
	refs.wrapForBoxes.append(...boxesArr);
}

function destroyBoxes() {
	refs.wrapForBoxes.innerHTML = '';
	refs.input.value = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

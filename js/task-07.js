const controlRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

const onFontSizeControl = () => {
	// console.log(controlRef.value);
	// console.log(textRef.style.fontSize);

	textRef.style.fontSize = `${controlRef.value}px`;
};

controlRef.addEventListener('input', onFontSizeControl);

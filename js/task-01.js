const allCatItems = document.querySelectorAll('.item');

console.log('Number of categories:', allCatItems.length);

allCatItems.forEach(itemEl => {
	console.log('Category: ', itemEl.querySelector('h2').textContent);
	console.log('Elements: ', itemEl.querySelectorAll('li').length);
});

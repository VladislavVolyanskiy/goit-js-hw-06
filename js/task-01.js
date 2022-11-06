const allCatItems = document.querySelectorAll('.item');

console.log('Number of categories:', allCatItems.length);

// const allCatItems = document.querySelectorAll('#categories > .item');
// console.log(`Number of categories: ${allCategories.length}`);

allCatItems.forEach(itemEl => {
	console.log('Category: ', itemEl.querySelector('h2').textContent);
	console.log('Elements: ', itemEl.querySelectorAll('li').length);
});

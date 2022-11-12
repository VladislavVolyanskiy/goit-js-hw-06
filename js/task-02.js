const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListRef = document.querySelector('#ingredients');

const createItem = ingredient => {
	const itemRef = document.createElement('li');
	itemRef.textContent = ingredient;
	itemRef.classList.add('item');
	return itemRef;
};

const AllItems = ingredients.map(ingredient => createItem(ingredient));

ingredientsListRef.append(...AllItems);

// более компактно, менее читаемо

// const createAllItems = ingredients.map(ingredient => {
// const itemRef = document.createElement('li');
// itemRef.textContent = ingredient;
// itemRef.classList.add('item');
// return itemRef;
// });
// ingredientsListRef.append(...createAAllItems);

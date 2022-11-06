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

// алгоритм следующий:
// обьявил переменную, присвоил ей элемент ul
// обьявил функцию создания элементов
// в функции циклом беребрал массив ингридиентов(тут отлично подходит метод массива map вместо стандартного цикла, поскольку не нужно переменные объявлять для пуша, так как он сразу возвращает нужный нам массив)
// в цикле/мепе создаешь элемент и наполняешь необходимыми атрибутами/контентом
// добавляешь в ul аппендом значение функции(тоесть вызвать ее в append), распыляя спредом и передавая аргументом массив ингридиентов
// (отредактировано)

// или чтоб более читабельнее было:
// обьявил переменную, присвоил ей элемент ul
// обьявил функцию создания элементов
// в теле функции создаешь элемент и наполняешь необходимыми атрибутами/контентом
// объявляешь переменную и присваиваешь ей результат метода map, вызванном на массиве ингредиентов. на каждой итерации вызываем функцию создания элементов, передавая ей значение текущего элемента массива на итерации
// в ul аппендишь результат мэпа, распыляя его

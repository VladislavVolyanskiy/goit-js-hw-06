//  Live DOM Viewer
//  https://software.hixie.ch/utilities/js/live-dom-viewer/

(element node) - образуются тегами
(text node) - образуются текстом внутри элементов

elem.parentNode - выберет родителя elem.
elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
elem.nextElementSibling - выберет узел - элемент «справа» от elem(его следующего соседа).

element.querySelector(selector) // возвращает первый найденный элемент внутри element, соответствующий CSS-селектору selector.
element.querySelectorAll(selector) // возвращает псевдомассив всех элементов внутри element, удовлетворяющих CSS-селектору selector.

elem.textContent // возвращает текстовый контент внутри элемента


// В свойстве 
classList 
// хранится объект с методами для работы с классами элемента.

elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.
elem.classList.add(cls) - добавляет класс cls в список классов элемента.
elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.
elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass.

    
// -- Создание и удаление элементов
document.createElement(tagName) // cоздает элемент с именем tagName и возвращает ссылку на него как результат своего выполнения.

const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://placeimg.com/640/480/nature";
image.alt = "Nature";
console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// -- Добавление
element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.

// -- Удаление
elem.remove()

const text = document.querySelector('.text');
text.remove();

// --
//Свойство
innerHTML 
//хранит содержимое элемента, включая теги, в виде строки.

const article = document.querySelector(".article");
console.log(article.innerHTML);

// Изменение

const title = document.querySelector('.article .title');
title.innerHTML = 'New and <span class='accent'>improved</span> title';

// -- сериализация содержимого (добавление без перезаписи)
article.innerHTML += htmlString;

// Метод insertAdjacentHTML()

elem.insertAdjacentHTML(position, string);

значения position:
"beforebegin" - перед elem
"afterbegin" - внутри elem, перед всеми детьми
"beforeend" - внутри elem, после всех детей
"afterend" - после elem

string - это код, который вставляем


// События

// -- шаблон именования коллбеков-функций для слушателя
handleSujectEvent
eventSubjectHandler
onSubjectEvent

// -- добавление слушателя. Метод addEventListener
element.addEventListener(event, handler, options);

event - имя события, строка, например "click".
handler - коллбэк-функция которая будет вызвана при наступлении события.
options - необязательный объект параметров с расширенными настройками.


const button = document.querySelector(".my-button");

const handleClick = () => {
    console.log("Button was clicked");
};

button.addEventListener("click", handleClick);

// -- Метод removeEventListener()

// -- this
// Если коллбэком будет функция которая использует this, по умолчанию контекст внутри неё будет ссылаться на DOM-элемент на котором висит слушатель.
const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn = document.querySelector(".js-btn");

// ✅ Работает
mango.showUsername();

// ❌ this будет ссылаться на button если использовать showUsername как callback
btn.addEventListener("click", mango.showUsername); // не работает

// ✅ Не забывайте привязывать контекст методов объекта
btn.addEventListener("click", mango.showUsername.bind(mango));

// -- Объект события

const handleClick = event => {
  console.log(event);
};

button.addEventListener("click", handleClick);

event.type - тип события.
event.currentTarget - элемент, на котором выполняется обработчик события.
event.target.style - 

Для отмены действия браузера по умолчанию на объекте события есть стандартный метод
preventDefault().




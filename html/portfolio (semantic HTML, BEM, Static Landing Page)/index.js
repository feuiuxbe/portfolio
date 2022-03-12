// console.log ('вёрстка валидная +10, \n <header>, <main>, <footer> +2 \n шесть элементов <section> +2 \n  только один заголовок <h1> +2 \n пять заголовков <h2> +2 \n   один элемент <nav> +2 \n два списка ul > li > a +2 n/   десять кнопок <button> +2 \n  два инпута: <input type="email"> и <input type="tel"> +2 \n   один элемент <textarea> +2 \n три атрибута placeholder +2 \n   блок <header> +6 \n секция hero +6 \n секция skills +6 \n секция portfolio +6 \n секция video +6 \n секция price +6 \n секция contacts +6 \n блок <footer> +6 \n для построения сетки используются флексы или гриды +2 \n при уменьшении масштаба страницы браузера вёрстка размещается по центру +2 \n фоновый цвет тянется на всю ширину страницы +2 \n иконки добавлены в формате .svg. +2 \n изображения добавлены в формате .jpg +2 \n есть favicon +2 \n плавная прокрутка по якорям +5 \n ссылки в футере ведут на гитхаб автора проекта и на страницу курса +5 \n интерактивность +5 \n плавное изменение внешнего вида элемента при наведении +5 \n Total score: 110/110');
const hamburger = document.querySelector('.hamburger');
const navPanel = document.querySelector('.header__nav-panel');
const page = document.querySelector('.page');
const linkList = document.querySelector('.header__link-list');

hamburger.addEventListener('click', toggleMenu);
linkList.addEventListener('click', closeMenu);

function toggleMenu() {
  hamburger.classList.toggle('open');
  navPanel.classList.toggle('open');
  page.classList.toggle('open');
  linkList.classList.toggle('open');
}

function closeMenu() {
  hamburger.classList.remove('open');
  navPanel.classList.remove('open');
  page.classList.remove('open');
  linkList.classList.remove('open');
}

// to do: when closing hamburger menu, link-list is in row (not column). fix @media... in style.css

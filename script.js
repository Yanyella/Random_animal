
// массив животных

const animals = [
    {
        name: 'Антилопа',
        link: './img/antelope.jpg'
    },
    {
        name: 'Медведь',
        link: './img/bear.jpg'
    },
    {
        name: 'Олень',
        link: './img/deer.jpg'
    },
    {
        name: 'Лиса',
        link: './img/fox.jpg'
    },
    {
        name: 'Жираф',
        link: './img/giraffe.jpg'
    },
    {
        name: 'Волк',
        link: './img/wolf.jpg'
    },
    {
        name: 'Козел',
        link: './img/goat.jpg'
    },
    {
        name: 'Гусь',
        link: './img/goose.jpg'
    },
    {
        name: 'Кит',
        link: './img/whale.jpg'
    },
    {
        name: 'Тигр',
        link: './img/tiger.jpg'
    },
    {
        name: 'Носорог',
        link: './img/rhinoceros.jpg'
    },
    {
        name: 'Енот',
        link: './img/raccoon.jpg'
    },
    {
        name: 'Заяц',
        link: './img/rabbit.jpg'
    },
    {
        name: 'Сова',
        link: './img/owl.jpg'
    },
    {
        name: 'Обезьяна',
        link: './img/monki.jpg'
    },
    {
        name: 'Львица',
        link: './img/lion.jpg'
    },
    {
        name: 'Леопард',
        link: './img/leopard.jpg'
    },
    {
        name: 'Лошадь',
        link: './img/horse.jpg'
    },
    {
        name: 'Цапля',
        link: './img/heron.jpg'
    },
    {
        name: 'Eж',
        link: './img/hedgehog.jpg'
    },
]

// элементы картинки

const image = document.querySelector('.card__img'); // элeмент картинки
const caption = document.querySelector('.card__caption'); // элемент подписи к картинке

// элемент кнопки

const buttom = document.querySelector('.button');

// функция рандомного выбора картинки

function showRandomImage(array, functionAnimation) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    image.getAttribute('src');
    image.src = randomElement.link;
    image.alt = randomElement.name;
    caption.textContent = randomElement.name;
    functionAnimation(image);
}

// функция добавления класса анимации на элемент

function animation(el) {
    el.classList.toggle('animation-image');
}

// вешаем обработчик на кнопку 

buttom.addEventListener('click', function(){
    showRandomImage(animals, animation);
});
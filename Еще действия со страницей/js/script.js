/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    bg = document.querySelector(".promo__bg"),
    movs = document.querySelector(".promo__interactive-list");
    // div1 = document.createElement("div");

// adv[0].remove();
// adv[1].remove();          // ~Alternative~
// adv[2].remove();

adv.forEach(element => {
    element.remove();
});

// div1.innerHTML = "<div>Драма</div>";
// div1.classList.add("promo__genre");       // ~Alternative~
// genre[0].replaceWith(div1);

genre.textContent = "Драма";

bg.style.backgroundImage = "url('img/bg.jpg')";               // ~Указывает ссылку на файл~

movs.innerHTML = "";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

movieDB.movies.forEach(function(film, i){
movs.innerHTML += `<li class="promo__interactive-item"> ${i + 1}) ${film}
<div class="delete"></div>
</li>`;
});                             // ~Добавляем каждый раз новое значение и формируем список внтури HTML структуры~


document.addEventListener('DOMContentLoaded', () => {         // ~событие не запустит скрипт пока не прогрузятся элементы страницы с HTML и CSS~

    const adv = document.querySelectorAll(".promo__adv img"),
        genre = document.querySelector(".promo__genre"),
        bg = document.querySelector(".promo__bg"),
        movs = document.querySelector(".promo__interactive-list"),
        forma = document.querySelector("form.add"),
        input = forma.querySelector(".adding__input"),
        checker = forma.querySelector('[type="checkbox"]');
    // div1 = document.createElement("div");

    forma.addEventListener('submit',(event) => {
    event.preventDefault();

        let film = input.value;                  // ~проверка введенного текста в инпут~
        let fav = checker.checked;           // ~проверка отмечена ли галочка в чекбоксе (получаем булиновое значение)~
        
        if (film){
            if(film.length > 21){
                film = `${film.slice(0, 21)}...`;             // ~Можно через метод subString~
            }
            if(fav){
                console.log("Любимый");
            }
        movieDB.movies.push(film);
        sortFunc(movieDB.movies);
        CreateMovieList(movieDB.movies, movs);
        event.target.reset();                   // ~очистка инпута (можно было обратиться напрямую)~
        } else {
            alert('Введи его!');
        }
    });

    // adv[0].remove();
    // adv[1].remove();                         // ~Alternative~
    // adv[2].remove();

    let antiAdv = function (el){
        el.forEach(element => {
            element.remove();
        });
    };
    antiAdv(adv);

    // div1.innerHTML = "<div>Драма</div>";
    // div1.classList.add("promo__genre");            // ~Alternative~
    // genre[0].replaceWith(div1);

    let changes = function(){
    genre.textContent = "Драма";
    bg.style.backgroundImage = "url('img/bg.jpg')";                // ~Указывает ссылку на файл (обязательно комбинировать кавычки)~
    };
    changes();

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    let sortFunc = (films) => {
        films.sort();
    };

    function CreateMovieList(films, parent){
        parent.innerHTML = "";
        sortFunc(films);

        films.forEach(function (film, i) {
            parent.innerHTML += `<li class="promo__interactive-item"> ${i + 1}) ${film}
        <div class="delete"></div>
        </li>`;                             // ~Добавляем каждый раз новое значение и формируем список внтури HTML структуры~
            }); 

        document.querySelectorAll('.delete').forEach(function(btn, i){
            btn.addEventListener('click', function(){
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);            // ~метод сплайс удаляет элемент из массива (может и добавить) номер и сколько удалить ~
                CreateMovieList(films, parent);
            });
        });
    }

CreateMovieList(movieDB.movies, movs);

});


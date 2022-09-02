// ~Первый метод добавить обрабочик - прописать on... в HTML в объявленном теге (onclick="alert('wigou-wigou')")~

const btns = document.querySelectorAll("button"),
    overlay = document.querySelector(".overlay");

// btns[0].onclick = function(){                  // ~Второй вариант добавления события (только одно событие)~ 
//     alert('yoy');
// };       

// let i = 0;

let forDEL = function(e){                                 // ~Третий вариант добавления событий (несколько)~
    console.log(e.currentTarget);                                   // ~Можно прописать Ивент События в параметр со своими свойствами иметодами~
    console.log(e.type);
    // e.target.remove();
    // if (i === 1){
    //     btns[0].removeEventListener("click", forDEL);
    // i++;
    // }
};

// btns.addEventListener("click", forDEL);
overlay.addEventListener('click', forDEL);    // ~сначала сработает самый вложенный элемент по HTML структуре~

let a = document.querySelector('a');

a.addEventListener('click', (ev) => {
ev.preventDefault();                        // ~отменяет дефолтные действия (переход по ссылке)~
console.log(ev.target);
});

// btns.forEach(item => {
//     item.addEventListener('click', forDEL, {once: true});          //~опция обработчика (3 аргумент)~
// }); 


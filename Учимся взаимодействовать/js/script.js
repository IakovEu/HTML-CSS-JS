const box = document.getElementById("box");  // ~Просто получаем элемент со страницы~

console.log(box);

const btns = document.getElementsByTagName("button");    // ~мы получаем коллекцию (псевдомассив)~

console.log(btns[1]);   //Можно указать индекс псевдомассива для получения конкретного элемента~

const circles = document.getElementsByClassName('circle');

console.log(circles); // ~тоже псевдомассив~

const hearts = document.querySelectorAll(".heart");   // ~точка обязательна тк обращаемся в данном случае к классу~

hearts.forEach(function(item){                  // ~тоже псевдомассив но есть метод ForEach~
    console.log(item);
});                              

console.dir(box);      // ~Для просмотра того, что мы можем сделать (просмотр свойств и методов)~

// box.style.backgroundColor = "blue";
// box.style.width = "300px";
let wth = 300;
box.style.cssText = `background-color : blue; width : ${wth}px`;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for(i = 0; i < hearts.length; i++){
// hearts[i].style.backgroundColor = "green"; 
// }

hearts.forEach(function(elem){
elem.style.backgroundColor = "green";
});

const div = document.createElement("div"),                            // ~создание элемента и текста на странице при помощи JS~
      text = document.createTextNode("Lorem Inspum dollar");

div.classList.add('black');      // ~присваиваем действие классЛистом~

// document.body.append(div);   // ~при помощи метода аппенд добавляем блок див в конец блока бади(можно выбрать любой другой/ prepend - в конец)~

document.querySelector(".wrapper").prepend(div);       // ~вариант записи если элемент нужен будет один раз~

// hearts[0].before(div);
// hearts[0].after(div);                       // ~Постановка перед или после какого то элемента~

// circles[1].remove();                    //~удаление элемента со страницы~

// hearts[1].replaceWith(circles[0]);            // ~замена одного элемента другим~

div.innerHTML = "<h3> Hello World </h3>";      // ~метод для вставки HTML структуры~
// div.textContent = "Hello";  // ~метод для вставки просто текста~

div.insertAdjacentHTML('beforebegin', "<h2>Bounjour</h2>");    // ~Вставка HTML структуры~
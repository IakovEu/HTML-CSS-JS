// console.log(document.body);      // ~можно обратиться к тегу бади и хэд без селекторов~
// console.log(document.documentElement);    // ~Весь HTML документ~ 
// console.log(document.body.childNodes);        // ~Просмотр текстовых узлов и тегов (нод) внутри всего тега~
// console.log(document.body.firstChild);      
// console.log(document.body.firstElementChild);        // ~Везде можно вписать элемент, чтобы не получить текстовый узел~
// console.log(document.body.lastChild);
// console.log(document.querySelector("#current").parentNode.parentNode);       // ~обращение к родительскому тегу дважды(раскрытие вложенности)~
// console.log(document.querySelector("[data-current='3']").previousElementSibling);        // ~получение прошлого элемента или следующего/next~

// for (let nodes of document.body.childNodes){
// if (nodes.nodeName === "#text"){                     //~Перебор всех нод и пропуск текстовых узлов~
// continue;
// } else {
// console.log(nodes);          
// }
// }
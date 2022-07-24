document.write("JS");

/* let obj = {
a: 2,
b: 4,
c: "yellow"
}; */
// ~это был объект (а,b,c...)~

//let arr = ["qw","wq","er"];
//~это был массив (0,1,2...)~

//alert("hey");

/*let question = confirm ("gay?");
console.log(question); */

// ~also try cntrl+slash~

// let another_question = prompt("why?", "");
// console.log(typeof(another_question)); ~typeof~

// ~унарный плюс ставиться например перед строкой и рассматрвиает элементы как число~

// let klikuxa = "Barbara";
// // console.log("http://something.com/" + klikuxa);
// console.log(`http://anotherone.${"r"}u`);          ~`инфа в обратных кавычках через доллар и фигурки`~

// var user = "bob";
// var age = 15;
// console.log('hi ' + user + " " + age);
// ~или~
// console.log(`Hey ${user} ${age} y.o.`);

// let incr = 5;
// let decr = 5;

// console.log(++incr);
// console.log(--decr);  ~оператор после не сработает тк сначала консоль обрабоатет полученное значение~

// console.log(10%4); ~вывод остатка от деления~

// = присваивание, == не строгое равенство, === строгое равенство
// console.log(2*2 ==="4");

// && оператор "и", || оператор "или", если ! то обратное значение.

// let needToCheck = true;
// let anotherNeedToCheck = false;

// console.log(needToCheck || anotherNeedToCheck);

// function lol(){
// var a = 22;
// var b = 22;
// if(a < b){
// return "a is biger";    
// } else if (a > b){
// return "b is bigger";
// } else if (a === b){
//     return "they are equal";
// }
// }
// console.log(lol());

// for(let i = 5; i < 10; i++){
// alert(i);
// }\

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const q1 = prompt("Один из последних просмотренных фильмов?", ""),
//       q2 = +prompt("На сколько вы его оцениваете?",""),
//       q3 = prompt("Один из последних просмотренных фильмов?", ""),
//       q4 = +prompt("На сколько вы его оцениваете?","");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// personalMovieDB.movies[q1] = q2;
// personalMovieDB.movies[q3] = q4;

// console.log(personalMovieDB); 
//       ~запись двух ответов через обращение к массиву через квадратные скобки (первый ответ : второй ответ)~

// if (6 === 5) {
//     alert("NO!");
// } else{
//     console.log("UFF");
// }

// let qq = 51;

// if (qq == 50){
//     console.log("UFF"); 
// } else if (qq > 400){
//     console.log("OOOPS");
// } else {
//     console.log("all right");
// }

// ~условие через иф~

// num = 10;
// (num == 20) ? (console.log("YYYYEEEEESSSS")) : (console.log("NNNNNOOOOOOO"));  

// ~вариант записи условия через тернарный оператор (после вопроса если да, после двоеточия если нет)~

// num = 11;

// switch (num){
//    case 5:
//     console.log("NO");
//     break;
//     case 10:
//         console.log("NOO");
//         break;
//         case 11: 
//         confirm("are u sure?");
//         break;
//         default:
//             console.log("relax");
// }
// ~вариант записи условия через свич кейсы (идет проверка на строгое равенство ===)~

// let a1 = 3,
//     a2 = 2;
//         if(a1 === 3 && a2){               // ~а2 после оператора "И" без цифрового значения значит = как минимум 1 ( всегда true)~
//         console.log("UMY");
//     } else if(a1 === 2 && a2){
//         console.log("not UMY");              
//     } else {
//         console.log("no no no");
//     }

// console.log(0 && 24);
// console.log(2 && NaN);
// console.log(null && 24);
// console.log(3 && 24);
// ~ оператор "И" останавливается на значении false а при правильном выполнении показывает последнее правдивое значение~
// ~ оператор "ИЛИ" останавливается на значении true а при неправильном выполнении показывает последнее ложное значение~

// let a1 = 0,
//     a2 = 0,
//     a3 = 1;

// if (a1 || a2 || a3) {
//     console.log("UMY");
// } else {
//     console.log("no no no");
// }
// let a1 = 4,
//     a2 = 0,
//     a3 = 2;

// if (a1 && a2 || a1 && a3) {
//     console.log("UMY");
// } else {
//     console.log("no no no");
// }
// ~взаимодействие с обоими операторами~
// console.log(!3);
// оператор "не" дает обратное значение

// let number = 10,
//     number2 = 17;

// while(number < number2){
// number++;
// console.log(number);
// }
// ~выполняется цикл пока не выполнится условие(сначала смотрится условие)~

// do {
//     number++;
//     console.log(number);
// }
// while(number < number2);
// ~выполняется цикл пока не выполнится условие(сначала действие потом проверка условия)~

// let num = 20;

// for(let q = 1; q < 6; q++){
// num++;
// console.log(num);              // ~обратить внимание на порядок записи действий~
// }

// for(let q = 1; q < 10; q++){
//     if(q === 5){
//         break;                           // ~цикл останавливается на 5~
//     }
//         console.log(q);
// }

// for(let q = 1; q < 10; q++){
//     if(q === 5){
//         continue;                           // ~цикл пропускает  5~
//     }
//         console.log(q);
// }
//~вариант записи циклов через for - самый частый вариант~

// for(let i = 0; i < 3; i++){
// console.log(i);
// for(let j = 0; j < 5; j++){
//     console.log(j);
//     }
// }
// ~из-за того что главный цикл выполнет увеличение 3 раза, дочерний цикл выполнит свое условие такое же количество раз~

// let length = 7;
// let finalRes = "";

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         finalRes += "*";                      // ~ += для модификации строки. \n означает начало с новой строки ~
//     }
//     finalRes += '\n';
// }

// console.log(finalRes);
// ~связываем дочерний цикл и главный цикл, чтобы они взаимодействовали~

// metka: for (let i = 0; i < 3; i++) {
//     console.log(`Это первый ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Это второй ${j}`);
//         for(let k = 0; k < 3; k++){
//             if(k === 2){break metka;}       //~метка позволяет обратиться из самого вложенного файла в главный~
//             console.log(`Это третий ${k}`);
//         }
//     }
// }

// const arrayOfNumbers = [];
// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);
//             ~заполнение массива цифрами от 5 до 10~

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (i = 0; i < 2; i++) {      // ~переменная итератор задана с 0, далее прописываю сколько раз сработает цикл~
//     const q1 = prompt("Один из последних просмотренных фильмов?", ""),
//         q2 = +prompt("На сколько вы его оцениваете?", "");
//     if (q1 != null && q2 != null && q1 != "" && q2 != "" && q1.length < 50) {         
//         personalMovieDB.movies[q1] = q2;
//     } else {
//         console.log("mistake");
//         i--;                          // ~когда условие не выполняется откатываем на 1 вопрос назад~
//     }
// }
// // ~записываю условие,чтобы нельзя было нажать отмена или оставить пустую строку, а также длина строки должна быть не более 50 символов~

// if(personalMovieDB.count < 10){
//     console.log("malovato druzhok");
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
// console.log("Normas tak");
// } else if (personalMovieDB.count >= 30){
// console.log("idi pogulyai");
// } else {console.log("Oshibo4ka");
// }
// // ~записываю условие для первого значения объекта personalMovieDB~
// console.log(personalMovieDB);

//------------------------------------------------------------------------------------------------------------------------------------------
// let num = 8;

// function first(text){
//     console.log(text);
//     let num = 7;         // ~ сработает локальная переменная внутри функции~
//     console.log(num);
// }
// first("hey");

// function sum(a, b){
//     return(a + b);      // ~вывод суммы 2 аргументов, после ретурна фунция перестает выполнять код~
// }
// console.log(sum(5,5));
// console.log(sum(8,12));

// function ret (){
//     let num = 40;
//     return(num);            // ~ретурн может также вернуть значение переменной заданной в функции~
// }
// let check = ret()
// console.log(check);

// var a = (a, b) =>{return a + b};    //~стрелочная функция~
// console.log(a(2,2));


let a = function (a,b){
return(a+b);
};
console.log(a(2,5))
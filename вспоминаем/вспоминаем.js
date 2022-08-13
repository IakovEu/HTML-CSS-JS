// document.write("JS");

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
//             if(k === 2){break metka;}       // ~метка позволяет обратиться из самого вложенного файла в главный~
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

// for (i = 0; i < 2; i++) {                        // ~переменная итератор задана с 0, далее прописываю сколько раз сработает цикл~
//     const q1 = prompt("Один из последних просмотренных фильмов?", ""),
//         q2 = +prompt("На сколько вы его оцениваете?", "");
//     if (q1 != null && q2 != null && q1 != "" && q2 != "" && q1.length < 50) {         
//         personalMovieDB.movies[q1] = q2;
//     } else {
//         console.log("mistake");
//         i--;                                    // ~когда условие не выполняется откатываем на 1 вопрос назад~
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
//     return(num);                   // ~ретурн может также вернуть значение переменной заданной в функции~
// }
// let check = ret()
// console.log(check);

// var a = (a, b) =>{return a + b};          //~стрелочная функция~
// console.log(a(2,2));

// function multiply (amount){
// console.log(amount * 20);
// }
// multiply(10);

// let FirstNumber = 10;
// let SecondNumber = 20;

// let counter = function(curr, anotherValue){ 
// console.log(curr * anotherValue);                  // ~вместо аргумент можно подствить любое значение и переменную~
// };
// counter(5,SecondNumber);

// const a = 2;
// const b = 3;

// let withRet = function (number1,number2){
// return number1 * number2;                         // ~ретурн возвращает значение для дальнейшего использования, например в других функциях~
// };

// let withoutRet = function(functionBefore){
// console.log(functionBefore * a);
// };

// let result = withRet(10,b);                      // ~можно создать дополнительную переменную, чтобы не избежать вложенности~

// withoutRet(result);

// function checkCycle(a){                                   
// for(let i = 0; i < 10; i++){
// a++;
// console.log(a);
// if (a === 11) return;               // ~ретурн прекращает выполнение функции из любое её области, после ретурна функция не читается~
// }
// }
// checkCycle(2);



// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += num * i;
//             // Тут без черточек в конце
//         } else {
//             str += num * i + "---";
//         }
//     }
//     return str; 
// }
// console.log(getMathResult(7, 5));                       // ~прогрессия прописанного  в логе числа~

//---------------------------------------------------------------------------------------------------------------------------------

// let smth = "qwerty";
// let anoth = [1, 2, 3, 4, 5]; 

// console.log(smth.length);            // ~у строки всего одно свойство, измеряет длину строки~
// console.log(anoth.length);
// console.log(smth[2]);                // ~через индекс можно обратиться к букве строки~

// let smth = {};   

// console.dir(smth);                   // ~изначально рассматривает как объект~
// console.log(smth);

// let smth = "boobies";

// console.log(smth.toUpperCase());         // ~это один из методов строки, обращаться через точку(у методов круглые скобки)~

// let smth = " BooBs";

// console.log(smth.toLowerCase());            // ~методы меняют вывод текста в консоль но не меняют его исходное значение~

// var notSmth = "qwerty zxc yafitz";

// console.log(notSmth.indexOf("tz"));            // ~метод находящий индекс с которого начинается введенный элемент (считаются как в массиве)~

// const test = "YAPiPI ssss LLL";

// console.log(test.slice(0,9));                       // ~через указанные индексы вырезаем только нужную часть строки~

// const N = 3.5;

// console.log(Math.round(N));             // ~методы чисел можно прописывать через Math~

// const check = "44.5sdkmkxc";

// console.log(parseInt(check));             // ~позволяет преобразовать строку в число и достать целое число~
// console.log(parseFloat(check));         // ~позволяет преобразовать строку в число и достать не целое число~
//---------------------------------------------------------------------------------------------------------------------------------------------------

// let numberOfFilms;

// function idk() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {     //~ изНан - метод проверки, что это не число ~
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// idk();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let ForDbMov = function () {
//     for (i = 0; i < 2; i++) {
//         const q1 = prompt("Один из последних просмотренных фильмов?", ""),
//             q2 = +prompt("На сколько вы его оцениваете?", "");
//         if (q1 != null && q2 != null && q1 != "" && q2 != "" && q1.length < 50) {
//             personalMovieDB.movies[q1] = q2;
//         } else {
//             console.log("mistake");
//             i--;
//         }
//     }
// };
// ForDbMov();

// let ForDbCount = function () {
//     if (personalMovieDB.count < 10) {
//         console.log("malovato druzhok");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Normas tak");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("idi pogulyai");
//     } else {
//         console.log("Oshibo4ka");
//     }
// };
// ForDbCount();

// let OnlyCheck = function (xyz) {
//     if (xyz === false) {
//         console.log(personalMovieDB);
//     }
// };
// OnlyCheck(personalMovieDB.privat);

// let For3quest = function () {
//     for (i = 1; i < 4; i++) {
//         let a = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = a;                         // ~ ай минус 1 потому что начали не с 0 ~
//     }
// };  
// For3quest();


// let kub = function(abc){
// let obiemAndPloshad = `Объем куба: ${abc*abc*abc}, площадь всей поверхности: ${6 * abc * abc}`;
// if (typeof(abc) !== 'number' || abc < 0 || !Number.isInteger(abc)){
// return("При вычислении произошла ошибка");
// }
// return obiemAndPloshad;
// };  
// console.log(kub(5));

// let train = function (placeNum){


// if (isNaN(placeNum) || placeNum < 0 || !Number.isInteger(placeNum)){       // ~ Намберизинтеджер - метод проверки на целое число~
//     return "Ошибка. Проверьте правильность введенного номера места";
// } 
// else if (placeNum === 0 || placeNum > 36){
//     return "Таких мест в вагоне не существует";
// }
// else if(placeNum > 0 && placeNum <= 4){
//     return 1;
// } else if (placeNum >= 5 && placeNum <= 8){
//     return 2;
// } else if (placeNum >= 9 && placeNum <= 12){
//     return 3;
// } else if (placeNum >= 13 && placeNum <= 16){
//     return 4;
// } else if (placeNum >= 17 && placeNum <= 20){
//     return 5;
// } else if (placeNum >= 21 && placeNum <= 24){
//     return 6;
// } else if (placeNum >= 25 && placeNum <= 28){
//     return 7;
// } else if (placeNum >= 29 && placeNum <= 32){
//     return 8;
// } else if (placeNum >= 33 && placeNum <= 36){
//     return 9 ;
// }    
// };
// console.log(train(1.17));

// function GetTimeFromMinutes(min) {
//     let result1 = Math.floor(min / 60);
//     let result2 = min % 60;

// if (isNaN(min) || min < 0 || !Number.isInteger(min)){
// return "Ошибка, проверьте данные";
// } else if (result1 === 1){
// return `Это ${result1} час и ${result2} минут`;
// } else if (result1 === 2 || result1 === 3 || result1 === 4){
//     return `Это ${result1} часа и ${result2} минут`;
//     } else {return `Это ${result1} часов и ${result2} минут`;}

// }

// console.log(GetTimeFromMinutes(400));



// let FourNumbers = function (z, x, c, v) {

//       if (typeof (z) !== "number" || z === "") {
//         return 0;
//     } else if (typeof (x) !== "number" || x === "") {
//         return 0;
//     } else if (typeof (c) !== "number" || c === "") {
//         return 0;
//     } else if (typeof (v) !== "number" || v === "") {
//         return 0;
//     } else if (z > x && z > c && z > v) {
//         return z;
//     } else if (x > z && x > c && x > v) {
//         return x;
//     } else if (c > z && c > x && c > v) {
//         return c;
//     } else if (v > z && v > x && v > c) {
//         return v;
//     }

// };

// console.log(FourNumbers(12,233,234,12));

// console.log("       let`s check this out      ".trim());       // ~метод трим удаляет пробелы в начале и конце строки~

// let checkSpace = "     abc     ";
// console.log(checkSpace.trim());

//-------------------------------------------Callback - порядок выполнения функций----------------------------------------------------

// function first (){

// // ~Какие-то действия~

// setTimeout(function(){
//     console.log(1);}, 500);                           // ~обратить внимание на порядок выполнения функций~
// }

// function second (){                                         
//     console.log(2);
// }

// first();
// second();                      

// let ForCB = function (action, callback){                 // ~можно использовать функцию как аргумент/параметр~
// console.log("I`ve done Smth" + " " + action);
// callback();                                              // ~вызываю функцию из аргумента, чтобы потом подставить вместо нее другую функцию~
// };

// let anotherOne = function (){    
// console.log("just check it");
// };

// ForCB("twice",anotherOne);                               // ~без круглых скобок тк функция уже вызвана~

//-------------------------------------Взаимодействие с объектами-----------------------------------------------------------------

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     CreateMeth: function(){                               // ~можно создать собственный метод внутри объекта~
//         console.log("Test Version");             
//     }
// };

// options.CreateMeth();

// let {border, bg} = options.colors;
//                                                 // ~деструктуризация объекта позволяет доставать из него кусочки~
// console.log(bg);

// console.log(Object.keys(options));               // ~обращение к ключевым значениям объекта~  

// console.log(options["colors"]["bg"]);    //~вариант записи взаимодействия с массивом через квадратные скобки~

// delete options.name;          // ~позволяет удалять свойства из объекта~

// console.log(options);

// for (let key in options) {                         // ~цикл с ин позволяет перебирать объект и равен количеству свойств~
//     if (typeof (options[key]) === "object") {
//         for (let key2 in options[key]) {
// console.log(`Свойство ${key} имеет значение ${options[key][key2]}`); // ~Используем вложенность, чтобы обратиться к объекту внутри объекта~
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

//-------------------------------------------Массивы / взаимодействие--------------------------------------------------

// let arr = [11, 43, 5, 47, 9];

// arr.pop();                                     // ~метод удаляет последний элемент из массива~

// arr.push(10);                              // ~метод добавляет элемент в конец массива~

// let pr = prompt("Eshkere?","");
// let spl = pr.split(',');                   // ~метод, создающий массив из строки~
// console.log(spl);

// let Joe = arr.join('sss');                // ~метод объединяющий элементы массива и превращающий их в строку~
// console.log(Joe);

// arr.sort(function(a,b){ return a - b;});   // ~Метод сортирует строки в алфавитном порядке, для сортировки чисел нужна такая функция~

// arr.forEach(function(Elements, Numbers, AllArr){
// console.log(`Сначала идут Элементы массива ${Elements}, затем идет порядковый номер ${Numbers} и весь массив ${AllArr}`);
// });

// for(let i = 0; i < arr.length; i++){
// console.log(arr[i]); 
// }

// for(let val of arr){                       // ~фор оф также служит для перебора массива~
// console.log(`Check ${val}`);
// }

// console.log(arr);   

//-----------------------------------------Передача (копия) по значению-------------------------------------------------------------

// const object = {
// a: 1,
// b: 2,
// };

// let copy = object;             // ~передается ссылка на этот объект (меняешь копию меняешь и объект)~

// copy.a = 5;

// console.log(copy);
// console.log(object);

// let ForCopy = function (YourObj) {
//    let CopyObj = {};

//    for (key in YourObj){
// CopyObj[key] = YourObj[key];                       // ~создается новый объект, изменяя его, старый не меняется~
//    }
//    return CopyObj;
// };

// let testObj = {
// a: 1,
// b: 'sdfsd',
// c: {
// q: 12,
// w: 42,
// e: "qwerty"
// }
// };

// let copyOfTestObj = ForCopy(testObj);

// copyOfTestObj.b = "Eshkere";

// console.log(copyOfTestObj);
// console.log(testObj);

// let add = {
//     r: "pop",
//     j: 123,
//     b: 44
// };

// let combo = Object.assign(testObj, add);    // ~метод объединяющий объекты / если объединить с пустым объектом то получится клонирование объекта~

// console.log(combo);

// let arr = [1, 23 , 45];

// let arrCopy = arr.slice();     // ~метод поверхностно копирующий весь массив~

// arrCopy[2] = "this is not 45";

// console.log(arr);
// console.log(arrCopy);

// let FOrSpreadOperator = [1, 2, 3];

// let FOrSpreadOperator2 = [12, 3 , 5];

// let CheckSpread = [...FOrSpreadOperator, ...FOrSpreadOperator2, 12, "Just wanna add smth"];  

// console.log(CheckSpread);              // ~Оператор Спред разложил массив~

// let Enjoy = function (a, d, g){
// console.log(a, d, g);
// };

// let ForEnjoy = ['1', '23', "iiiiu"];

// Enjoy(...ForEnjoy);                     

// let FastArr = [1, 2],
//     NewOne = [...FastArr];          //~с помощью спред оператора можно также создать копию~

// let FastObj = {
//     a: 1,
//     b: 2
// };

// let NewNewOne = {...FastObj};      //~можно также разложить объект и копировать его~

// NewNewOne.a = 100;

// console.log(NewNewOne);
// console.log(FastObj);
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

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const q1 = prompt("Один из последних просмотренных фильмов?", ""),
      q2 = +prompt("На сколько вы его оцениваете?",""),
      q3 = prompt("Один из последних просмотренных фильмов?", ""),
      q4 = +prompt("На сколько вы его оцениваете?","");

personalMovieDB.movies[q1] = q2;
personalMovieDB.movies[q3] = q4;

console.log(personalMovieDB);
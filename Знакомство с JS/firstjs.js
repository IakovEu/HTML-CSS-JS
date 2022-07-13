const name = "Jacob";
const age = 20;
let boo = false;

const bar = document.querySelector (".bar");
const a1 = document.querySelectorAll (".a1");
const testus = document.querySelector ('#testus');


console.log(testus);

function sayHello() {
    let message = "Hello " + name;
    console.log(message);
}
sayHello();

function Math(a, b) {
let result = a + b;
return result;
}

var sum = Math(121, 232);

console.log(sum);


window.addEventListener("scroll", function() {
let scrollPos = window.scrollY;
if(scrollPos > 0){
    bar.classList.add("green"); 
} 
else {
    bar.classList.remove("green"); 
}
console.log();
});

testus.addEventListener("click", function(){
console.log('clicked');
});

for(let baralt of a1 ) {
    baralt.addEventListener("click", function(){
        console.log("bar clicked");
        });
}
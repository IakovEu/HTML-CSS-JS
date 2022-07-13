//"use strict";

document.write("Fuck you");
//prototypes ( идут слоями, create - добавить новый тип с теми же свойствами, obj.prot - добавить свойства);



var person = new Object({
    name: "dimasta",
    age: 44,
    say: function () {
        console.log("emae");
    }
});

Object.prototype.SayHello = function () {
    console.log('iiiiiiiuuuu');
};

var person2 = Object.create(person);
person2.name = "BOB";


console.log(person2.SayHello());

console.log(person2.name);

/*
 function tell(){
    console.log( 'Hey', this)    
    };
    
    var testing = { 
    name: 'Yen',
    age: 22,
    car: 'mercedes',
    SayHello: tell
    };
*/

function hello() {
    console.log('hello', this);
};

var pers = {
    name: 'Mike',
    age: 22,
    SayHello: hello,
    SayHelloWindow: hello.bind(document),
    logInfo: function (phone) {
        console.group(`${this.name}info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
};
pers.logInfo('1312');

var pers2 = {
    name: 'lena',
    age: 21
};

//pers.logInfo.bind(pers2, '8-800-555-35-35')();
pers.logInfo.call(pers2, '8-800-555-35-35');

// this указывает на объект до него. person.function(); (this указывает на person)

var ar = [1, 2, 3, 4];

function multBy(ar, n) {
    return ar.map(function (i) {
        return i * n
    })
};


console.log(multBy(ar, 3));


function calc(n) {
    return function () {
        console.log(1000 * n)
    }
};

var whynot = calc(11);

whynot();

function incr(n) {
    return function (num) {
        return n + num
    }
};

incplus100 = incr(100);
incplus200 = incr(200);

console.log(incplus100(50));
console.log(incplus200(50));

function ref(dom) {
    return function (url) {
        return `https://${url}.${dom}`
    };
}

var comUrl = ref("com");
var ruUrl = ref("ru");

console.log(comUrl("google"));
console.log(ruUrl("yandex"));


/* window.setTimeout(brr,5000)
function brr(){console.log('lol')} */
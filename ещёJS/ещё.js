function test(bet) {
    if (bet == 1) {
        return "ty lox";
    } else if (bet > 1) {
        return " ty krasava";
    };
}
console.log(test(10));

// ( || - диапозон, && - диапозон с равенством );
// ( для всех остальных else );
// ( помнить про прорядок, когда пишешь с if else);

var list = ["zero", "odin", "dva", "tri", "chetire", "pyat"];

function machinations(name, par) {
    if (name == 1) {
        return list[0]
    } else if (name == par - 1) {
        return list[1]
    } else if (name == par - 2) {
        return list[2]
    } else if (name == par - 3) {
        return list[3]
    } else if (name == par + 2) {
        return list[4]
    } else if (name == par) {
        return list[5]
    }

    return "fix me";
}

console.log(machinations(5, 7))

document.write("Bonjour");

// switch cases

 var yepta = function gogogo(bib) {
    var answer = "";


    switch (bib) {
        case "1":
            answer = "boy";
            break;

        case "2":
            answer = "girl";
            break;
        case "3":
            answer = "undefinded";
            break;
    }
    return answer;
};

console.log(yepta(2));

// properties;

var testobject = {
    yoy: "dog",
    16: "cat",
    19: " mouse"
};

var animal = testobject.yoy;
var something = testobject[16];
console.log(something);

testobject.yoy = "not a dog";
console.log(testobject.yoy);

// easy way instead of switch cases;

function fast(val) {
    var result = "";
    var proba = {
        1: "yes",
        2: "yes or no",
        3: "no",
    }
    result = proba[val];
    return result;
}

console.log(fast(1));

//properties;

var lio = [{
        type: "cars",
        list: [
            "bmw",
            "mercedes",
            "audi",
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "iva"
        ]
    }
];
console.log(lio[1].list[2]);

var collection = {
    "1111": {
        "album": "ak-47",
        "artist": "Vitya",
        "tracks": [
            "huynane",
            "blablabla",
            "lala"
        ]
    },
    "2222": {
        "abc": "bcd",
        "aaa": "bbb",
        "tracks": [
            "yyy",
            "uuu",
            "qqq"
        ]
    },
    "3333": {
        "hhh": "tatata",
        "ttt": "raprapra",
        "tracks": [
            "pes",
            "ne pes"
        ]
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function Update(id, prop, value) {
    if (value === "") {
        delete collection[id], [prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];

        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

console.log(Update(1111, "artist", "tracks"));


function multiplay(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {

            product *= arr[i][j]

        }
    }

    return product;
}

var product = multiplay([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);

console.log(product);

var mymy = [];
var q = 105;

do {
    mymy.push(q);
    q++;
} while (q < 107);

console.log(mymy, q);

// random  ( ceil - bolsh, floor - mensh ); 

var random = Math.round(Math.random() * 101);

function randomNum() {


    return Math.floor(Math.random() * 21);
}

console.log(random);

//random range;

function randomRange(myMin, myMax) {

    return Math.ceil(Math.random() * (myMax - myMin + 1)) + myMin;

}

console.log(randomRange(5, 15));

function question(num) {
    return num > 0 ? "YEAH" : num < 0 ? "NONONO" : "zero-zero"
}

console.log(question(0));


var quickly = (ar1, ar2) => ar1.concat(ar2);

console.log(quickly([1, 2], [3, 4, 5, 6]));

/*
let aaa = [1,2];
let bbb = [3,4];
console.log(aaa.concat(bbb));
*/


const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5, 2));

var sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 100);
    };
})();

console.log(sum(1, 2, 3));



var qwer = 12;
var qwert = 15;
document.write("<br/>");
document.write(qwer + qwert);

let a = 5;
let b = 4;
Bool = a > b;
console.log(Bool);

/*
let y = 1;

while (y < 5) {
alert(y);
y++;
};


q = -1;

do {
    alert(q);
q++;
} while ( q < 2);


for (var i = 5; i < 45; i++ ){
    if ( i % 2 == 0 && i != 10) continue;
    if ( i == 19) break;
alert(i);
}; */

// Окна


/* alert("Hello");
prompt('How many times you poputal?', '');
confirm('Ok or cancel?'); 

if (confirm('Ok or cancel?')) {
alert("Hello")
} else (prompt('How many times you poputal?', ''));


var arr =  new Array(1.5,"two",3,"four");

for( var q = 0; q < arr.length; q++) {
console.log(arr[q]);
}; 
 var summ = 0;
for(x = 0; x < 10; x++){
arr[x] = x / 2;
console.log(arr[x]);
};
/*
var summ = 0;
for( x = 0; x < arr.length; x++){
summ += arr[x];
};
console.log(summ);

var ar1 = Array ();
var ar2 = Array ();
var ar3 = Array ();
for (q = 0; q < 3; q++) ar1[q] = q;
for (q = 0; q < 6; q++) ar2[q] = q;
for (q = 0; q < 9; q++) ar3[q] = q;

var arr = Array (ar1, ar2, ar3);

for(w = 0; w < arr.length; w++){
for (a = 0; a < arr[w].length; a++) {
console.log(arr[w][a]);
};
};

var fruits = ["яблоко", "банан", "клубника", "персик"];
for(let i = 0; i < fruits.length; i++)
console.log(fruits[i]);

function count(x, y) {
 var summ = x + y;
return summ;
};

console.log(count(7,7));
*/

function buttonclick() {
    alert(" You clicked button")
};

// onload( alert("page has been downloaded"));

var counter = 0;

function OnMouse(element) {
    counter++;
    element.innerHTML = "focus" + counter + "times";
};

function valid(form) {
    var Name = form.Name.value;
    var password = form.password.value;
    var repeatpassword = form.repeatpassword.value;
    var state = form.state.value;

    var fail = false;
    if (Name == "" || Name == " ")
        fail = "enter your name";
    else if (password == "" || password == " ")
        fail = "enter your password";
    else if (repeatpassword == "" || repeatpassword == " ")
        fail = "repeat your password";
    else if (state == "" || state == " ")
        fail = "enter your gender";
    else if (password != repeatpassword)
        fail = " passwords are not the same";

    if (fail) {
        alert(fail);
        return false;
    } else(true)
    return true;
};

/*
var int = setInterval("myfunction()",1000);
var coount = 0;
function myfunction() {
coount++;
alert("Seconds - " + coount);  
if (coount == 3) clearInterval(int)
};
*/
var coun = 0;

function timer() {
    coun++;
    document.getElementById("countt").innerHTML = coun;
    setTimeout("timer()", 1000);
}


var ma = Math.floor(Math.random() * 11);
var mama = Math.PI;
console.log(ma);

/* var data = new Date();
data.setFullYear(2000);
alert(data);
 

var ar = new Array (2, 36, 35, 28);
text = "array length - " + ar.length ; 
text += "\n array consist of - " + (ar.sort()).join(", ");
alert(text);
*/

var string = "smth smth smth";

text = string.length;
text += string.toUpperCase();
text += string.substring(0, 8);
text += string.charAt(2);
text += string.indexOf("m");

console.log(text);

/*
var btnn = document.querySelector(".btn");
btnn.addEventListener('click', function()
{alert("You pressed the button")});
*/


/*
var sex = 69;
for (var sex; sex < 100; sex++){
if(sex % 2 && sex != 75) continue;
if(sex === 80 )  break;
    alert(sex);
};
*/
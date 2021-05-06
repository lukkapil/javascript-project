'use strict';

/*
function calcAge(birthYear) {
    const age = 2037 - birthYear
    
    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);
    }
    
    if(birthYear >= 1991 && birthYear <= 1996){
        var millenial = true;
        const firstName = 'Steven';
        const str = `Oh, and you're a millenial, ${firstName}!`
        console.log(str);

        function add(a, b){
            return a+b;
        }
    }
    printAge();
    // add(2,3)
    return age
}

const firstName = 'Jonas';
calcAge(1991);



// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

//Functions 
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b){
    return a + b;
}

const addExpr = function(a,b){
    return a + b;
}

const addArrow = (a,b) => a + b;

// Example
if(!numProducts) deleteShoppingCart();


var numProducts = 10;

function deleteShoppingCart(){
     console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1991);


const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    }
}

jonas.calcAge()

const matilda = {
    year: 2017
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge()

const f = jonas.calcAge;
f();



var firstName = 'Matilda'

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);

        // Przypisujemy do zmiennej wartość z this dzięki czemu będzie można się do niej odnieść
        // w funkcji isMillenial, jeżeli tego by się nie zrobiło to odniesienie poprzed 
        // this.year w tej funkcji dało by wynik undefined
        // Solution 1
        // const self = this;
        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }
        // isMillenial();

        // Solution 2 - BARDZO PRZYDATNY PRZYKŁAD UŻYWANIE ARROW FUNCTION
        // Rozwiązanie drugie polega na użyciu funkcji arrow, bo ona nie ma swojego słowa this
        // i używa słowa this z parent scopa, czyli z tego z funkcji wyżej
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    },

    greet: () => {
        console.log(`Hey ${this.firstName}`)
    },
}

// Arrow function nie ma swojego słowa kluczowego this, w tym przypadku podejrzy z global scop'a
jonas.greet();
jonas.calcAge();

// Arguments keyword
// jest całkiem przydatne jak potrzebujemy funkcji która akceptuje więcej parametrów niż
// faktycznie określono
const addExpr = function(a,b){
    console.log(arguments);
    return a + b;
}

addExpr(2, 5);
addExpr(2, 5, 3)

// Arrow function nie ma słowa kluczowego arguments
const addArrow = (a,b) => {
    console.log(arguments);
    a + b;   
}
addArrow(2, 5, 8)


// Przypisanie primitive types nie zmieni wartości age - w miare logiczne
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// OObiekty przechowywane są w heapie a nie w call stacku jak primitivsy
// dlatego zmiana wieku w obiekcie friend zmieni też wiek w obiekcie me
// bo odwołuje się do adresu w pamięci w heapie, a nie trzyma wartości w call stacku

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log('me:', me);
// me: {name: "Jonas", age: 27}
console.log('Friend:', friend);
// Friend: {name: "Jonas", age: 27}

*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

//Nie kopiujemy tak naprawdę całego obiektu, kopiujemy odwołanie do pamięci do tego samego obiektu
const merriedJessica = jessica;
merriedJessica.lastName = 'Davis';
console.log('Before merriage:', jessica);
console.log('After merriage:', merriedJessica);

// Nie można tak
// merriedJessica = {}

// COPYING OBJECTS
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

// Jak serio chcemy skopiować obiekt to trzeba zrobić tak
// działa to tylko na obiektach pierwszego poziomu, robi 'płytką kopię'
const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'

// Pomimo działania na kopii to zmiana wewnątrz i dlatego Object.assign nie skopiował tego
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John')

console.log('Before merriage:', jessica2);
console.log('After merriage:', jessicaCopy);

// Da się zrobić deep clone czyli głęboką kopie za pomocą zewnętrzenej bibliotego loadash
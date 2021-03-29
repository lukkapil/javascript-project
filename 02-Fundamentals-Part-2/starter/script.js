'use strict';

/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const private = 543;



function logger() {
    console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice)

console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)



// Function declaration
const age1 = calcAge1(1991)

function calcAge1(birthYear){
    return 2037 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991)

console.log(age1, age2)



// LECTURE: Arrow Functions

const calcAge3  = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Max'));



// LECTURE: Functions calling other functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`
    return juice;
}

console.log(fruitProcessor(2, 3))


// LECTURE: Reviewing functions

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement}`)
        return retirement;
    }else{
        console.log(`${firstName} has already retired! ✨`)
        return -1;
    }
    //
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1950, 'Mike'))



// LECTURE: Introduction to arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends)

const y = new Array(1991, 1983, 2008, 2020);

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
// Jak chcemy wyciągnąć ostatni element z tablicy
console.log(friends[friends.length-1])

// Zmienianie zawartości tablicy
friends[2] = 'Jay'
console.log(friends)

const firstname = 'Jonas'
const jonas = [firstname, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas)

// Excercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length-1])

console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])]
console.log(ages)



// LECTURE: Basic array operations (methods)

const friends = ['Michael', 'Steven', 'Peter'];
// .push dodaje element na koniec tablicy
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength)

// .unshift dodaje element na początek tablicy
friends.unshift('John');
console.log(friends)

// .pop usuwa ostatni element tablicy
friends.pop()
const popped = friends.pop(); 
console.log(popped)
console.log(friends)

// .shift usuwa pierwszy element tablicy i go zwraca
friends.shift()
console.log(friends)

// .indexOf zwraca pozycję na której znajduje się dany element tablicy
console.log(friends.indexOf('Steven'));
// jeżeli szukamy elementu którego nie ma w tablicy zostanie zwrócona wartość -1
console.log(friends.indexOf('Bob'));
// .includes sprawdza czy element jest w tablicy i zwraca true albo false
friends.push(23)
console.log(friends.includes('Steven'));
console.log(friends.includes(23));

if(friends.includes('Michael')) {
    console.log('You have a friend called Michael')
}


//LECTURE: Introduction to objects

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}



// LECTURE: Dot vs bracket notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas)
console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const intrestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')


if(jonas[intrestedIn]){
    console.log(jonas[intrestedIn])
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

// dodawanie nowych właściwości do obiektu
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas)

// Challenge
// "Jonas has 3 friends, and hist best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



// LECTURE: Object methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDrivingLicense: true,
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} old teacher. And he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license`
    }
};

// używając notacji po kropce
console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)

// Challenge
// "Jonas is a 46 year old teacher. and he has a driver's license"

console.log(jonas.getSummary())

// używając notacji w nawiasach
console.log(jonas['calcAge'](1991))


// LECTURE: Iteration: The for loop


// for loop keeps running while condition is TRUE
// for(let rep = 1 ; rep <= 10 ; rep++){
//     console.log(`Lifting weights repetition ${rep} 🎈`)
// }

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

// przeiterowanie po tablicy elementów i wypisanie ich do konsoli
for(let i = 0; i < jonas.length ; i++){
    // wczytywanie obiektów z tablicy
    console.log(jonas[i], typeof jonas[i])
    // wypełnianie nowej tabeli wartościami 
    // types[i] = typeof jonas[i];
    // można też tak
    types.push(typeof jonas[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for( let i = 0; i < jonas.length; i++) {
    // continue przerwie wykonywanie pętli w obecnej iteracji
    // czyli po znalezieniu elementu który ma typ inny niż string, polecenie wypisania tego
    // elementu do konsoli nie zostanie wykonane
    if(typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i])
}

console.log('--- BREAK WITH NUMBER ---')
for( let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] == 'number') break
    console.log(jonas[i], typeof jonas[i])
}


const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for(let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`-------- Starting exercise ${exercise}`)

    for( let rep = 1; rep < 6; rep++){
        console.log(`Excercise: ${exercise}: Lifting weight repetition ${rep}`)
    }
}

for(let rep = 1 ; rep <= 10 ; rep++){
        console.log(`Lifting weights repetition ${rep} 🎈`)
}

let rep = 1;
while(rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🎈`)
    rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1)

while(dice !== 6){
    console.log(`U rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6 + 1)
    if(dice === 6){
        console.log('Loop is about to end')
    }
}

*/
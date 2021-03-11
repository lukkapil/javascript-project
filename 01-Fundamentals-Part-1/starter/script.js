/* LECTURE: VALUEAS AND VARIABLES

let js = 'amazing';
console.log(40+8+23-10);

console.log('Jonas');
console.log('23');

let firstName = "Jonas";

console.log(firstName)
console.log(firstName)
console.log(firstName)

//Variable name convenctions
let jonas_matilda = 'JM'
let $function = 27;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob)

LECTURE: DATA VALUES

let javaScriptIsFun = true;
console.log(javaScriptIsFun)
// console.log(typeof true)
console.log(typeof javaScriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jonas')

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun)

let year;
console.log(year)
console.log(typeof year)

year = 1991;

console.log(year)

console.log(null)


// LECTURE: let, const, var

let age = 30;
age = 31;

const birthYear = 1996;
//birthYear = 1995;

var job = 'Programmer';
job = 'Teacher'


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName +' '+ lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ // x = x + 1 = 101
x--;
console.log(x)

// Comparison operators
console.log( ageJonas > ageSarah); 
console.log( ageSarah >= 18)

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

console.log(25 - 10 - 5)

let x,y;
x = y = 25 - 10 - 5;
console.log(x , y)

const averageAge = (ageJonas+ageSarah)/2
console.log(averageAge)



// Strings and TEMPLATE LITERALS

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
// BRZYDKO
const jonas = "I'm " + firstName + ', a ' +  (year - birthYear) + ' years old' + job + '!';
console.log(jonas)
// ŁADNIE I POPRAWNIE
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`)



// LECTURE: Taking decisions: if / else statements

const age = 15;

if(age >= 18){
    console.log(`Sarah can start driving license 😊`) // Żeby wkleić emoji to: win+.
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`)
}

const birthYear = 2012;
let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century)



// LECTURE: Type conversion 

const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'))
console.log(typeof NaN)

console.log(String(23), 23);

// and type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)

let n = '1' + 1;
n = n - 1;
console.log(n)



// LECTURE : Truthy and falsy values

// 5 falsy values: 0, '', undefinded, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if(money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job!')
}

let height;
if(height){
    console.log('YEY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}


// LECTURE : Equelity operators: == vs. ===

const age = '18';
if(age === 18){
    console.log("You just became an adult 😁 (strict)")
}
if(age == 18){
    console.log("You just became an adult 😁 (loose)")
}

const favourite = Number(prompt("What is your favourite number?"))
console.log(favourite)
console.log(typeof(favourite))

if(favourite === 23){
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if(favourite !== 23) {
    console.log('Why not 23?')
}



// LECTURE: logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B  

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense)


// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive...')
}

// LECTURE: The switch statement

const day = 'thursday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tueseday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :P')
        break;
    default:
        console.log('Not a valid day!')
}

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}else if(day === 'tueseday'){
    console.log('Prepare theory videos');
}else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
}else if(day === 'friday'){
    console.log('Record videos');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :P')
}else{
    console.log('Not a valid day!')
}



// LECTURE: Statements and expressions

// LECTURE: The conditional (ternary) operator

const age = 10;
// age >= 18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 🧊');
const drink = age >= 18 ? 'wine 🍷' : 'water 🧊'
console.log(drink)

let drink2;
if(age >= 18){
    drink2 = 'wine 🍷'
} else {
    drink2 = 'water 🧊'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🧊'}`)

*/



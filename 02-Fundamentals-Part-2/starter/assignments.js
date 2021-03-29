// LECTURE: Functions

/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} milion people and its capital city is ${capitalCity}`;
}


console.log(describeCountry("Poland", 36, "Warsaw"))
console.log(describeCountry("Finland", 6, "Helsinki"))
console.log(describeCountry("USA", 1243, "Washington"))

// LECTURE: Function Declarations vs. Expressions

// Function declaration
function percentageOfWorld1(population){
    return percentage =  ( population / 7900 ) * 100
}

const perPoland1 = percentageOfWorld1(36);
const perPortugal1 = percentageOfWorld1(10);
const perUSA1 = percentageOfWorld1(332);

console.log(perPoland1, perPortugal1, perUSA1);

// Function expressions
const percentage2 = function (population) {
    return (population/7900)*100;
} 

// LECTURE: Arrow functions

const percentageOfWorld3 = population => (population / 7900) * 100
const perFinland3 = percentageOfWorld3(6);
console.log(perFinland3)

// LECTURE: Functions Calling Other Functions
function describePopulation(country, population){
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} milion people, which is about ${percentage} of the world.`
    console.log(description)
}

describePopulation('China', 1441);

// LECTURE: Introduction to arrays

const populations = [36, 10, 6, 1441];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld3(populations[0]), 
    percentageOfWorld3(populations[1]),
    percentageOfWorld3(populations[2]),
    percentageOfWorld3(populations[3])]
console.log(percentages)

// LECTURE: Basic array operations (Methods)

const neighbours = ['Niemcy', 'Czechy', 'Słowacja', 'Ukraina', 'Białoruś', 'Litwa', 'Rosja']
console.log(neighbours)
neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop()
console.log(neighbours)
if(!neighbours.includes('Niemcy')){
    console.log('Probably not a central European country 🎨')
}
// podmienienie zawartości na konkretnym obiekcie tablicy
neighbours[neighbours.indexOf('Słowacja')] = 'Slovakia'
console.log(neighbours)


// LECTURE: Introduction to objects

const myCountry = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'polish',
    population: 36,
    neighbours: ['Niemcy', 'Czechy', 'Słowacja', 'Ukraina', 'Białoruś', 'Litwa', 'Rosja']
}

// LECTURE: Dot vs bracket notation

const myCountry = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'polish',
    population: 36,
    neighbours: ['Niemcy', 'Czechy', 'Słowacja', 'Ukraina', 'Białoruś', 'Litwa', 'Rosja']
}

console.log(`${myCountry.country} has ${myCountry.population} milion polish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population += 2;
console.log(myCountry.population)
myCountry['population'] -= 2;
console.log(myCountry.population)



// LECTURE: Object methods

const myCountry2 = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'polish',
    population: 36,
    neighbours: ['Niemcy', 'Czechy', 'Słowacja', 'Ukraina', 'Białoruś', 'Litwa', 'Rosja'],
    describe: function(){
        console.log(`${this.country} has ${this.population} milion 
        polish-speaking people, ${this.neighbours.length} neighbouring countries 
        and a capital called ${this.capital}`)      
    },
    checkIsIsland: function(){
        // wartość parametru isIsland ustawiana na podstawie tablicy
        this.isIsland = this.neighbours.lenght === 0 ? true : false;
    }
}

myCountry2.describe();
myCountry2.checkIsIsland();
console.log(myCountry2)



// LECTURE: Iteration: the for loop

// for ( let voter = 1; voter <= 50 ; voter++){
//     console.log(`Voter number ${voter} is currently voting`)
// }

// LECTURE: Looping Arrays, Breaking and Continuing

const populations = [36, 10, 6, 1441];
const percentages2 = [];

function percentageOfWorld1(population){
    return percentage =  ( population / 7900 ) * 100
}

for(let i = 0; i < populations.length; i++){
    const perc = percentageOfWorld1(populations[i])
    percentages2.push(perc)
}
console.log(percentages2)

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++){
    for(let y = 0;  y < listOfNeighbours[i].length ; y++){
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
    }
}

*/
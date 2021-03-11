// Lecture: Values and Variables
// let country = "Poland";
// let continent = "Europe";
// let population = 36;

// console.log(country + ' '+ continent +' '+ population)

//Lecture: Data types
// const isIsland = false;
// let language;

// console.log(isIsland +' '+ population +' '+ country +' '+language)

// Lecture: let, const, var

// language = 'Polish'
// console.log(language)

// Lecture: Basic operators
// 1.
// halfPopulation = population/2
// console.log(halfPopulation)
// 2.
// population++
// console.log(population)
// 3. 
// let populationFinland = 6;
// if(population > populationFinland){
//     console.log("Population of " +country+ " is bigger than Finland")
// }
// 4.
// let averagePopulation = 33;
// if(population > averagePopulation){
//     console.log("Population of " +country+ " is bigger than the average country")
// }
// 5. 
// let description;
// let populationPortugal = 11;
// language = "portuguese"
// const countryPortugal = "Portugal"
// console.log(countryPortugal +" is in " +continent+ ", and its " +populationPortugal+ " milion people speak " +language)

// Lecture: Operator precedence

// Lecture: Strings and template literals

// console.log(`${countryPortugal} is in ${continent}, and its ${populationPortugal} milion people speak ${language}`)

// LECTURE: Taking decisions: if / else statements

// if(population > 33){
//     console.log(`${country}'s population is above average`)
// } else {
//     console.log(`${country}'s population is ${averagePopulation - population} milion below average`)
// }

// LECTURE: Type conversion an coercion

4
617
23
false
1143

// LECTURE : Truthy and falsy values

// LECTURE : Equelity operators: == vs. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

// if(numNeighbours === 1){
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// }

// LECTURE: Logical operators

// const country = "Poland"
// const population = 36;
// const language = "Polish"
// const isIsland = false;

// if(language === "English" && population < 50 && !isIsland){
//     console.log(`You should live in ${country}!`)
// } else {
//     console.log(`${country} does not match your criteria 😒`)
// }

// LECTURE: The switch statement

const language = 'english'

switch(language){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place in number of native speakers')
        break;
    case 'hindi':
        console.log('Number 4')
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too xD')
        break;
}

// LECTURE: The conditional (ternary) operator

const population = 36
console.log(`Poland's population is ${population > 33 ? 'above📈' : 'below📉'} average`)


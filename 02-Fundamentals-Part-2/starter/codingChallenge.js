'use strict'
// Coding Challenge #1

/*
function calcAverage(firstNumber, secondNumber, thirdNumber){
    average = (firstNumber + secondNumber + thirdNumber)/3
    return average;
}

// Można było użyć arrow functions:
// const calcAverage = (a, b, c) => (a + b + c)/3

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}`)
    }else {
        console.log(`Noone wins! ಠ_ಠ`)
    }
}

const avgDolpins = calcAverage(85, 54, 41)
const avgKoalas = calcAverage(23, 34, 27)

checkWinner(avgDolpins, avgKoalas)


// Coding Challenge #2

function calcTip(bill){
    let tip;
    if(bill >= 50 && bill <= 300){
        tip = bill * 0.15
    }else{
        tip = bill * 0.2
    }
    return tip;
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log(tips)
console.log(total)



// Coding Challenge 3#

const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

markMiller.calcBMI()
johnSmith.calcBMI()

if(markMiller.BMI > johnSmith.BMI){
    console.log(`${markMiller.fullName} BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName}'s (${johnSmith.BMI})`)
}else if(johnSmith.BMI > markMiller.BMI){
    console.log(`${johnSmith.fullName} BMI (${johnSmith.BMI}) is higher than ${markMiller.fullName}'s (${markMiller.BMI})`)
}

*/

// Coding Challenge 4#

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

function calcTip(bill){
    let tip;
    if(bill >= 50 && bill <= 300){
        tip = bill * 0.15
    }else{
        tip = bill * 0.2
    }
    return tip;
}

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}

console.log(bills, tips, totals)

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        // sum = sum + arr[i]
        sum += arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage([2,3,6]))
console.log(calcAverage(totals))
console.log(calcAverage(tips))


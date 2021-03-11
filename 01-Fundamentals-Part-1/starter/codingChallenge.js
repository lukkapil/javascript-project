// Coding Challenge #1

// Test Data 1
// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const markBMI = massMark / heightMark ** 2
// const johnBMI = massJohn / (heightJohn * heightJohn)
// console.log(markBMI, johnBMI)

// const markHigherBmi = (markBMI > johnBMI)
// console.log(markHigherBmi)

// Coding Challenge #2

// if(markBMI > johnBMI){
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`)
// } else {
//     console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`)
// }

// Coding Challenge #3

const dolphinsScore = (96 + 108 + 89) / 3;
console.log(dolphinsScore)
const koalasScore = (88 + 91 + 110) / 3;
console.log(koalasScore)


if(dolphinsScore > koalasScore && dolphinsScore >= 100){
    console.log(`Dolphin's have won! Their score was ${dolphinsScore}`)
}else if(koalasScore > dolphinsScore && koalasScore >= 100){
    console.log(`Koalas have won! Their score was ${koalasScore}`)
}else if(koalasScore === dolphinsScore && koalasScore >= 100 && dolphinsScore >= 100){
    console.log(`It's a draw! Dolphins score (${dolphinsScore}) was the same as Koalas (${koalasScore})`)
}else {
    console.log(`No one wins 🤣`)
}

// Coding Challenge #4

// Moje rozwiązanie
//let tip;
//const bill = 430;

//console.log(`The bill was ${bill},
//    the tip was ${bill >= 50 && bill <= 300 ? tip=0.15*bill : tip=0.2*bill},
//    and the total value ${bill+tip}`)

// Rozwiązanie z kursu
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

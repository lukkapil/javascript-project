// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function calcTempAmpliture(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
}

const amplitude = calcTempAmpliture(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// Funkcja pobiera jako parametry dwie tablice i łączy je w jedną i później liczy amplitudę temperetur

function calcTempAmplitudeNew(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);



function measureKelvin() {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    // value: Number(prompt('Dagrees celsius:')),
    value: 19,
  };
  // .table przydaje się do dużych obiektów, lepiej widać je w konsoli
  console.table(measurement);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
}

console.log(measureKelvin());

// BUG - using a debugger

function calcTempAmplitudeBug(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

*/

// CODING CHALLENGE #1

// MOJE ROZWIĄZANIE
function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    let day = arr.indexOf(arr[i]) + 1;
    console.log(`${arr[i]}°C in ${day} days...`);
  }
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

// ROZWIĄZANIE Z KURSU
function printForecast2(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
}
printForecast2([17, 21, 23]);
printForecast2([12, 5, -5, 0, 4]);

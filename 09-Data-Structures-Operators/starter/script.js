'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  // Funkcja do zamawiania żarcia, dwa parametry które symbolizują index pozycji z menu
  // W ES6 można w ten sposób definiowac funkcje
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Zamiast parametrów przekazujemy obiekt i go destrukturyzujemy i przypisujemy domyślne wartości
  // Ale ja wolę w ten sposób
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    addres,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/////////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------- STRING METHODS PRACTICE -----------------------------------//

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⛔' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(46, ' ');
  console.log(output);
}

/////////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------- CODING CHALLENGE #4 -------------------------------------//

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const [index, words] of rows.entries()) {
//     const [firstWord, secondWord] = words.toLowerCase().trim().split('_');
//     const output = `${firstWord}${secondWord.replace(
//       secondWord[0],
//       secondWord[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20, ' ')}${'✔'.repeat(index + 1)}`);
//   }
// });

// Bez tych znaczków wystarczyłoby zrobić tak

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const word of rows) {
//     const [firstWord, secondWord] = word.toLowerCase().trim().split('_');
//     const output = `${firstWord}${secondWord.replace(
//       secondWord[0],
//       secondWord[0].toUpperCase()
//     )}`;
//     console.log(output);
//   }
// });

//////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------- WORKING WITH STRINGS -----------------------------------------/
/*
// PART - 3
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

function capitalizeName(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // Są dwa sposoby na osiągnięcie tego
    // 1.
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // 2.
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
capitalizeName('łukasz');

// Padding - dodanie określonej liczby znaków do stringa  aż osiagnie określoną pożądaną długość
const message = 'Go to gate 23!';
// padStart - doda określoną ilość znaków na początek stringa
// pierwszy parametr przyjmuje jako pożądaną długość jaką chcemy osiągnąć
// drugi to znak którym chcemy wypełnić string
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log('Jonas'.padStart(25, '+')); // ++++++++++++++++++++Jonas
console.log(message.padStart(25, '+').padEnd(30, '+')); // +++++++++++Go to gate 23!+++++

// Przykład -> funkcja maskująca numery na karcie kredytowej żeby widzieć tylko 4 ostatnie cyfy
function maskCreditCard(number) {
  // Można w ten sposób przekonwertować numer na stringa, bo jeżeli jeden z operandów znaku plus jest stringiem, to wszystkie zostaną przekonwertowane na string
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('312432534275627834287'));

function formatNrbWithSpaces(accountNo) {
  accountNo = accountNo.replace(/ /g, '');
  let replaced = accountNo.replace(/.{4}/g, function (value) {
    return value + ' ';
  });
  return replaced;
}
console.log(formatNrbWithSpaces('32312453426344234223442343'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(3));

function planesInLine(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
// PART - 2
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLocaleLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
console.log('jonas'.toUpperCase()); // JONAS

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Porównywanie adresów email
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
// trim() pozbywa się spacji i jakichkolwiek białych znaków
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// Zamienianie części stringów
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';
// Ten replace zadziała na pierwsze pojawienie się słowa door
console.log(announcement.replace('door', 'gate')); // All passengers come to barding gate 23. Boarding door 23!
// replaceAll już zadziała na każdym
console.log(announcement.replaceAll('door', 'gate'));
// Jeszcze inne rozwiązanie to użycie regexpa
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// Practice exercise
function checkBaggage(items) {
  const baggege = items.toLocaleLowerCase();
  if (baggege.includes('knife') || baggege.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snack and a gun for protection');
*/
// PART - 1
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B373'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
// Jak szukamy całych słów to jest case sensitive
console.log(airline.indexOf('Portugal'));

// SLICE -> potrzebuje numeru indeksu jako wartość i od tego miejsca zaczyna
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

// Bez wiedzy w jakim miejscu znajduje się indeks, żeby nie trzeba było hardcodować
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Ostatnie dwie litery
console.log(airline.slice(-2));
// Rozpoczęcie bez pierwszej litery i zakończenie bez ostatniej
console.log(airline.slice(1, -1));

function checkMiddleSeat(seat) {
  // Be and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😆');
  } else {
    console.log('You got lucky 😁');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('JONAS'));
console.log(typeof new String('JONAS'));
*/
/////////////////////////////////////////////////////////////////////////////////////////////
// ------- PODSUMOWANIE: KIEDY I JAKICH TYPÓW DANYCH UŻYWAĆ -------------------------------//

// Głównie są 3 źródła danych:
// 1. dane bezpośrednio z kodu źródłowego
// 2. dane z interfejsu użytkownika ( z inputów które użytkonwnik wprowadza jakieś dane na formatce)
// 3. dane z API - dane przychodzą zazwyczaj w formacie JSON
//
// GDZIE PRZECHOWUJEMY KOLEKCJE DANYCH?
// W strukturach danych - w JS'ie są 4 struktury danych
// Potrzebujemy prostej listy? -> wybieramy listę lub zestaw (set)
// Kiedy listę a kiedy zestaw?
// Jeżeli potrzebujemy manipulować danymi, i uporządkowanego zestawu danych, wybieramy listę
// Jeżeli potrzebujemy wydajności, usuwania duplikatów z tablicy, i unikatowych wartości wybieramy zestaw (set)
// Kiedy obiekt a kiedy mapę?
// Przed ES6 nie było map, do wartości obiektów łatwiej się dostać przez notację kropkową lub [], bardziej "tradycyjny" sposób przechowywania danych
// Mapy mają większą wydajność, mogą zawierać jakikolwiek typ danych, łatwe w iterowaniu, łatwo określić ilość
// Podsumowując, jak chcemy odwzorować klucze na wartość albo jak potrzebujemy kluczy które nie są stringami, bierzemy mapy
// Jak chcemy funkcje jako wartości, to bezwzględnie obiekty
// Potrzebujemy pary klucz wartość? -> Wybieramy obiekt lub mapę

// Inne wbudowane struktury danych: WeakMap, WeakSet
// Są jeszcze nie wbudowane typy danych: Stacks, Queues, Linked lists, Trees, Hash tables

///////////////////////////////////////////////////////////////
// ------------------------- MAPS --------------------------//
// Mapa jest strukturą danych której możemy użyć żeby przemapować wartości na klucze
// tak samo jak w obiektach jest para key value
// Różnica między obiektami a mapami jest taka, że w mapach klucze mogą mieć dowolny typ
// w obiektach klucze prawie zawsze są stringami
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Fiorence, Italy');
console.log(rest.set(2, 'Lizbone, Portugal'));

// wywoływanie funkcji .set() zwraca zaktualizowaną mapę, dlatego można je chainować
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;

// Mapowanie pozwala na coś takiego, wywołanie metody get na mapie, przy czym w warunku mamy też wywołanie getów, wynikiem będzie wartość true albo false więc przemapuje mi to znowu i zwróci stringa we are open albo we are closed, w zależności od czasu
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

// Można nawet użyć obiektów albo tablic jaki kluczy do mapy
const arr = [1, 2];
rest.set(arr, 'TEst');
rest.set(document.querySelector('h1'), 'heading');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// Inny sposób ustawiania wartości w mapie
// w mapie przekazujemy tablice
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correctAnsw', 3],
  [true, 'COrrect 👌'],
  [false, 'Buuuuu 😆'],
]);

console.log(question);

// To wyżej, czyli tablica w tablicy to jest ta sama struktura co
console.log(Object.entries(openingHours));
// To znaczy że jest prosty sposób na konwersję obiektów na mapy, robi się to tak OBIEKT -> MAPA
const hoursMap = new Map(Object.entries(openingHours));

// Quizz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt('Your answer:'));
// niby można w ten sposób, ale jest inny lepszy
// if (answer === 1 || answer === 2) {
//   console.log(question.get(false));
// } else {
//   console.log(question.get(true));
// }
console.log(question.get(question.get('correctAnsw') === answer));
console.log(answer);

// KONWERSJA MAPY -> OBIEKT
// po prostu tworzy się nową tablicę i rozpokowywuje ją operatorem spread
console.log([...question]);
console.log(question.entries());
console.log([...question.values()]);
console.log([...question.keys()]);
*/
///////////////////////////////////////////////////////////
// ----------------------- SETS ----------------------//
// obiekt Set umożliwa przechowywanie unikalnych wartości każdego typu, zarówno prymitywów jak i obiektów
// można iterować po secie
// kolejność obiektów w secie nie ma znaczenia
/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pasta', 'Risotto']);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size)
// Sprawdzanie czy jest jakiś obiekt w secie
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
//Dodawanie czegoś do seta
ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')
console.log(ordersSet);
// Usuwanie czegoś z seta
ordersSet.delete('Risotto')
console.log(ordersSet);
// Z setów nie można wyciągać elementów tak jak w tablicach czyli przez ordersSet[0]
// w setach nie ma indeksów 
for (const order of ordersSet){
  console.log(order);
}

// Przyklad
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// Utworzenie nowej tablicy [] za pomocą zestawu, tak żeby uzyskać unikalne wartości z tablicy staff
// oraz rozpakowanie jej za pomocą operatora spread
const staffUnique = [...new Set(staff)]
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'].size));

// Jak dużo unikalnych liter jest w słowie
console.log(new Set('johanschmedtmann').size);
*/
/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Przeiterowanie po całym obiekcie
const entries = Object.entries(openingHours);
// console.log(entries);

// W środku fora robimy najpierw destrukturyzację tablicy, a później jak wiemy że value to obiekt, to robimy destrukturyzację obiektu na zmienne jakie chcemy wyciągnąć
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
////////////////////////////////////////////////////////////////////////////
// ------------------ OPTIONAL CHAINING -------------------------------------//
/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// W ES2020 wprowadzono optional chaining
// tylko jeżeli istnieje poniedziałek to właściwość open zostanie otwarta, jeżeli nie to zwróci undefined
// dlatego zamiast ifów można zrobić tak
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example on properties
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // połączenie optional chaining i nullish operator
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`In ${day}, we open at ${open}`);
}

// Optional chaining działa też na metodach
// sprawdzamy czy metoda order istnieje, jeżeli tak, przekazujemy jej argumenty, jeżeli nie, to print errora
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // (2) ["Focaccia", "Pasta"]
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); //Method does not exist

// Optional chaining działa też na tablicach
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// sprawdzamy czy wartość po lewej istnieje czyli users[0]
// jak tablica by była pusta to wyskoczyłby error User array empty
console.log(users[0]?.name ?? 'User array empty');

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Funkcja for of
for (const item of menu) {
  console.log(item);
}

// Dostajemy wszystkie elementy razem z ich indeksami
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);
*/
// -------------------------------- CODING CHALLENGE --------------------------------- //

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//---------------CODING CHALLENGE #3---------------------//
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
console.log(gameEvents);
// 3. pop używa się żeby zwrócić ostatni element z tablicy -> tutaj trudnościom było zastosowanie .pop(), żeby sie dowiedzieć ostatniej minuty
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4. MOJE ROZWIĄZANIE
for (const [minute, event] of gameEvents) {
  if (minute < 45) {
    console.log(`[FIRST HALF] ${minute}': ${event} `);
  } else {
    console.log(`[SECOND HALF] ${minute}': ${event}`);
  }
}
// Rozwiazanie z kursu trochę lepsze bo nie ma zahardcodowanego napisu o połowie czy pierwsza czy druga
// 4. ROZWIĄZANIE Z KURSU
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
//---------------CODING CHALLENGE #2---------------------//
/*
// MOJE ROZWIĄZANIE //
// 1.
for (const [goalIndex, nameOfThePlayer] of game.scored.entries()) {
  console.log(`Goal ${Number(goalIndex) + 1}: ${nameOfThePlayer}`);
}

// 2. Przeiterowanie po obiekcie i policzenie średniej
let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd;
  average /= Object.values(game.odds).length;
}
console.log(average);
// 3. LOL FAJNE TO
for (const [team, odd] of Object.entries(game.odds)) {
  // game[team] - dlatego to działa bo team jest już zdefiniowane w forze, i po prostu szukamy w całym obiekcie
  // w forze team to obiekt zawierający klucz team1, x, i team2 i wartości zakładów
  // poprzez game[team] odwołujemy się do klucza tego obiektu czyli tak naprawdę do team1 w pierwszej iteracji,
  // x w drugiej ale tam nie wchodzi bo jest case jak jest x, a w trzeciej team to team2
  const teamStr = team === 'x' ? 'draw' : ` victory ${game[team]}`;
  console.log(`Odds of ${teamStr}: ${odd}`);
}
// Bonus - utowrzenie obiektu który zawiera nazwiska graczy którzy strzelili gola jako properties a ilość bramek strzelonych przez nich jako wartość
// ma wyglądać tak
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
//   }
// Nie do końca rozumiem tego bonusu :|
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers);
}
*/
// console.log(`Odd of victory of ${}`);

//---------------CODING CHALLENGE #1---------------------//
/*
// 1 Destrukturyzacja tablicy players
const [players1, players2] = game.players;
console.log(players1, players2);
//(11) ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"]
// (11) ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"]
// 2 wpisanie pierwszego elementu z tablicy, oraz reszty w innej
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3 połączenie dwóch tablic
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4 dodanie do tablicy trzech nowych elementów
const players1Final = [...players1, 'Thiago', 'Cuutinho', 'Perisic'];
console.log(players1Final);
// 5 nested descructiring of object
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6
function printGoals(...playerNames) {
  const goalsTotal = playerNames.length;
  console.log(`${goalsTotal} goals were scored`);
  for (let i = 0; i < playerNames.length; i++) {
    console.log(`Players: ${playerNames[i]}`);
  }
}
printGoals(...game.scored);
// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');
*/
////////////////////////////////////////////////////////
/*
// Nullish: null and undefined (NOT 0 or '')
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Tylko jeśli restaurant.numGuests byłoby null albo undefined wtedy zostało by zwrócone 10
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
//////////////////////////////////////////////////////////
// Short circuiting (&& and ||)
/*
// Operator || robi short-circuit kiedy wartość jest truthy i od razu zwraca tą wartość
// lub ostatnią jeżeli wszystkie są falsy
// w zastosowaniu praktycznym możemy użyć operatora OR do ustawienia wartości domyślnych
console.log('------OR-------');
// Use ANY data type, return ANY data type, short-circuiting
// zwróci 3 bo jest 'truthy' value
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Operator && robi short-circuit kiedy wartość jest falsy i od razu zwraca tą wartość
// lub ostatnią jeżeli wszystkie są truthy
// w praktyce można wykonać kod jeżeli pierwszy operand jest prawdziwy
console.log('------AND-------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('olives', 'cheese');
*/
/*
////////////////////////////////////////////////////////////
// REST PATTERN AND PARAMETERS
// 1) Descructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2) Functions - przekazywanie wielu argumentów do funkcji w tym samym czasie
// funkcja która za argumenty może przyjąć obojętnie ile parametrów i obojętnie jakie
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(4, 2, 4, 5, 6, 7, 8);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// PODSUMOWANIE:
// spread operator jest używany tam, gdzie chcielibyśmy wartości oddzielone przecinkiem
// rest pattern jest używany gdzie chcemy nazwy zmiennych oddzielone przecinkiem
*/
////////////////////////////////////////////
/*
// SPREAD OPERATOR (...) - for unpacking
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// te trzy kropki to spread operator, robi tyle co jakby wyjąć wszystkie elementy z tablicy i zapisać je ręcznie
const newGoodArr = [1, 2, ...arr];
console.log(newGoodArr); // (5) [1, 2, 7, 8, 9]

console.log(...newGoodArr); // 1 2 7 8 9

// Tutaj nie manipulujemy istaniejącą tablicą ale tworzymy nową poprzez poszerzenie starej
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Spread operator, pobiera wszystkie elementy z tablicy i nie tworzy nowych zmiennych, czyli możemy go używać tylko w miejscach, w których w innych przypadku zapisalibyśmy wartości oddzielone przecinkami

// Przykład zrobienia płaskiej kopii tablicy
const mainMenuCopy = [...restaurant.mainMenu];

// Przykład robienia dwóch płaskich kopii tablic i mergowania ich ze sobą za pomocą operatora spread
// Połączoenie 2 tablic (lub więcej)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 's.'];
console.log(letters); // (7) ["J", "o", "n", "a", "s", "", "s."]
console.log(...str); // J o n a s;

// Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

// Stary sposób
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// Nowy sposób z użyciem spread operatora
restaurant.orderPasta(...ingredients);

// Od 2018 spread operator działa na obiektach mimo że nie są iterable
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Zmiana nazwy restauracji na obiekcie
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
/*

// Jak liczba parametrów w funkcji jest bardzo duża, to dobrze jest używać tej techniki
restaurant.orderDelivery({
  time: '22:30',
  addres: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  addres: 'Via del Sole, 21',
  starterIndex: 1
})
*/
////////////////////////////////////////////////////////
// DESTRUCTURING OBJECTS
/*
const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories);

// Można nazwać inaczej właśności obiektu w ten sposób
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
console.log(restaurantName, hours, tags)

//Default values
// menu = [] to przykład nadania defaultowej wartości, a staretMenu to przykład zmiany nazwy własności i nadaniu mu defaultowej wartości, to jest bardzo dobre jak nie mamy hard codowanych danych
const { menu = [], starterMenu: starters = []} = restaurant
console.log(menu, starters)

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj)
console.log(a, b);

// Nested objects
const {fri: {open, close}} = openingHours
console.log(open, close)


// DESCRUCTURING ARRAYS
// Bez dekonstrukcji tabeli tak byśmy dostęp do jej obiektów robili
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Ale można to zrobić inaczej - destrukturyzacja
// const [x, y, z] = arr
// console.log(x, y, z)
// console.log(arr);

// Wyciągnięcie dwóch pierwszych elementów z tablicy z obiektu
// const [first, second] = restaurant.categories;
// console.log(first, second);
// Wyciągnięcie pierwszego i trzeciego elementu
// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// SWITCHING VARIABLES
// Bez destrukturyzacji jak chciałbym zmienić kolejność to trzeba by było tak
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// Z destrukturyzacją
// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)

// Jak wyciągnąć 2 i całą tablicę zawierającą 5 i 6  ?
// const nested = [2, 4, [5, 6]];
// Pozycję której nie chcemy po prostu omijamy przecinkiem
// const [i, ,j] = nested;
// console.log(i, j)
// Żeby zrobić desktrukturyzację wewnątrz tzw. nested destructuring 
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // zwróci 2 5 6

//  Default  values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined
// Przydaje się do wyciągania danych z API
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1

*/

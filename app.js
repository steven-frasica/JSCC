// console.log("Hello"[0]);
// console.log("Hello"[4]);
// console.log("Hello".charAt("Hello".length - 1));
// console.log("12345".length)

// let str = "Steven";
// console.log(str[0]);
// console.log(str[str.length - 1]);
// console.log(str[5 - 1]);
// console.log(2 * 10);
// console.log(10/2);
// /**

// let fullName = 'Steven';

// let isRaining = true;
// let temperature = 20
// let planet = 'Earth';

// temperature = temperature + 2

// console.log(temperature);

/**
 * Converting Temperatures
 *
 * Celsius to Fahrenheit Formula
 *
 * F = C * 9/5 + 32
 */

// let celsius = 10
// let fahrenheit = celsius * 9/5 + 32
// console.log('celsius', celsius);
// console.log('fahrenheit', fahrenheit);

// let bool = '1' === 1;
// let bool = '1' !== 1;
// console.log(bool);

// let subscribed = false;
// let loggedIn = true;

// if (subscribed === true) {
//     console.log('show the video');
// }
// else if (loggedIn === true) {
//     console.log('tell user to upgrade their subscription')
// }
// else {
//     console.log('tell user to log into account')
// }

// let cash = 50
// let price = 40
// let difference = cash - price;

// if (cash > price) {
//     console.log(`you paid extra - here's ${difference} dollars change`)
// }
// else if (cash === price) {
//     console.log("you paid the exact amount, have a nice day!")
// }
// else {
//     console.log(`not enough money - you still owe ${difference * -1} dollars`)
// }

// let cash = 50;
// let price = 40;
// let isStoreOpen = false;

// if (cash >= price || isStoreOpen === true) {
//     console.log('print the receipt');
// }

// let val = "";

// if (val) {
//     console.log(!!val)
// }
// else {
//     console.log(!!val)
// }

// let hot = true;

// hot ? console.log('weather is hot outside') : console.log('weather is cold');

// let subscribed = true;
// let loggedIn = true

// let str = subscribed && loggedIn ? 'show video' : 'hide video';
// console.log(str);

// let cash = 50;
// let price = 40
// let isStoreOpen = true;

// let receipt = cash >= price && isStoreOpen ? 'print the receipt' :'do not print the receipt';
// console.log(receipt)

// let count = 1;
// console.log(count);
// count = count + 1;
// console.log(count);

// while (count <= 100) {
//     console.log(count);
//     count = count + 1;
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Frontend Simplified");
//   } else if (i % 3 === 0) {
//     console.log("Frontend");
//   } else if (i % 5 === 0) {
//     console.log("Simplified");
//   } else {
//     console.log(i);
//   }
// }

/** Print out every character from the string:
 * "Frontend Simplified"
 *
 * @example
 *
 */

const str = "Frontend Simplified";

// for (i = 0; i <= str.length - 1; i++) {
//     console.log(str[i])
// }

// for (i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// Function definition
// function welcomePersonToFES(firstName, lastName) {
//   console.log(`Welcome to FES, ${firstName} ${lastName}`);
// }

// Call the function
// welcomePersonToFES("Steven F");
// welcomePersonToFES("David B");
// welcomePersonToFES("Ai");

// function fn() {
//   // console.log('my function')
//   return "my return";
// }

// console.log(fn());

// function sumOfTwoNumbers(num1, num2) {
//   return num1 / num2;
// }

// console.log(sumOfTwoNumbers(10, 20));

// function convertCelsiusToFahrenheit(celsius) {
//   return celsius * (9 / 5) + 32;
// }

// console.log(convertCelsiusToFahrenheit(0));
// console.log(convertCelsiusToFahrenheit(10));
// console.log(convertCelsiusToFahrenheit(30));

// const convertCelsiusToFahrenheit = (celsius) => {
//   return celsius * 1.8 + 32;
// };

// console.log(convertCelsiusToFahrenheit(0))

let item1 = 20;
let item2 = 30;
let item3 = 40;
let item4 = 50;
let item5 = 100;

// let arr = [20, 30, 40, 50, 100];

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// arr.push(200);

// let newArr = arr.filter((element) => {
//     console.log(element)
//     return true;
// })
// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//         return true;
//     }
// })

// const arr = [20, 30, 40, 50, 100]

// let newArr = arr.filter(element => element >= 50);

// console.log(newArr);

let grades = ["A+", "A", "FAIL"];

// console.log(grades)

/**
 * let goodGrades = grades.filter((element) => {
 *      if (element !== 'FAIL) {
 *          return true;
 *      }
 * })
 */

// let passingGrades = grades.filter(grade => grade !== 'FAIL')

// console.log(passingGrades)

// for (let i = 0; i < grades.length; i++){
//     console.log(grades[i])
// }

// let passingGrades = [];

// for (let i = 0; i < grades.length; i++) {
//   if (grades[i] !== "FAIL") {
//     passingGrades.push(grades[i]);
//   }
// }

// console.log(passingGrades);

// let arr = [1, 4, 9, 16];

// let newArray = arr.map((element) => {
//   console.log(element);
//   return undefined;
// });

// let newArray2 = arr.map((element) => "dog");

// console.log(newArray2);

// let dollars = [1, 5, 10, 3];

// let cents = dollars.map((element) => element * 100);

// let centsLong = dollars.map((element) => {
//   return element * 1000;
// });

// console.log(cents);
// console.log(centsLong, "long");

// // No map method

// let centsArr = [];

// for (let i = 0; i < dollars.length; i++) {
//   centsArr.push(dollars[i] * 100);
// }

// console.log(centsArr);

// let userFirstName = "Steven";
// let userLastName = "Eff";
// let userDiscordID = "illz";
// let userSubscriptionStatus = "inactive";

let users = [
  {
    username: "Steven",
    email: "steven@fes.com",
    password: "test123",
    subscriptionStatus: "inactive",
    discordId: "illz",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@fes.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri1",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "zen",
    email: "zen@fes.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "zen1",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

// console.log(user.username[0]);
// console.log(user.subscriptionStatus);
// console.log(user.lessonsCompleted.map((elem) => elem * 2));
// console.log(users[0].lessonsCompleted.map((elem) => elem * 2));

// function login(email, password) {
//   for (let i = 0; i < users.length; i++) {
//     console.log("this ran @@@");
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password) {
//         console.log("log the user in - the details are correct");
//       } else {
//         console.log("password is incorrect - try again");
//       }
//       return;
//     }
//   }
//   console.log("could not find an email that matches");
// }

// login("steven@fes.com", "wrong password");

// users = [];

// function register(
//   name,
//   email,
//   password,
//   subscriptionStatus,
//   discordId,
//   lessonsCompleted
// ) {
//   let user = {
//     username: name,
//     email: email,
//     password: password,
//     subscriptionStatus: subscriptionStatus,
//     discordId: discordId,
//     lessonsCompleted: lessonsCompleted,
//   };
//   users.push(user);
//   console.log(user);
// }

function register(user) {
    users.push(user);
}

register({
    username: "steven", 
    email: "steven@fes.com",
    password: "pw123", 
    subscriptionStatus: "active", 
    discordId: "illz", 
    lessonsCompleted: [0, 1, 2, 3]});

// console.log("users", users);


// First way of accessing element
console.log(document.querySelector('.title'))

// Second way of accessing an element
console.log(document.getElementById('title'))


// Change HTML
// document.querySelector('.title').innerHTML = 'Frontend Simplified'
document.querySelector('.title').innerHTML += ' Frontend Simplified'

// Change CSS
// document.querySelector(".title").style.color = 'red'
// document.querySelector(".title").style.fontSize = '10px'

function changeTitleToRed() {
    console.log('clicked');
    document.querySelector('.title').style.color = 'red'
}

function toggleDarkMode() {
 document.querySelector('body').classList.toggle("dark-theme")
}

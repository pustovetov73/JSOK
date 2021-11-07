"use strict";


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }      

    }
}

rememberMyFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы любитель');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('У Вас достойный уровень');
    
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы профи в киномотагрофии');
    } else {
        console.log('eroor');
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i -1]  = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}




console.log(personalMovieDB);


 





                            // УСЛОВИЯ


// const num = 49;

// if (num > 100) {
//     console.log('V tochk');
// } else if (num > 50) {
//     console.log('OK');
// } else if (num == 49) {
//     console.log('gud');
// } else {
//     console.log('sorry');
// }

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Nevero');
//         break;
//     case 100:
//         console.log('Nevero');
//         break;
//     case 50:
//         console.log('v tochku');
//         break;
//     default:
//         console.log('Ne v etot raz');
//         break;
// }       



                             // ЦИКЛЫ

// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }

// // while (num <55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         break; Прерывает цикл
//         // continue; не выполняет цикл не прирывая его
                        // в нашем случае это 6
//     }

//     console.log(i);
    
// }




                                        // ФУНКЦИИ



                                        
// let num = 10;

// function showFirstMessage (text) {
//     console.log(text);
//     num = 20;
// }

// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//     return a + b;
// }

// console.log(calc(4, 5));

// const logger = function() {
//     console.log('hello');
// };

// logger();




                // МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ




// const str = 'test';

// // console.log(str.toUpperCase());

// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';

// console.log(logg.slice(6, 10));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));


// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));



///////////////////// OБЪЕКТЫ  деструктуризация 



const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

option.makeTest();

const {border, bg} = option.colors;
console.log(border);

// console.log(Object.keys(option).length);

// console.log(option.name);

// delete option.name;
//  console.log(option);

//  for (let key in option) {
//      if (typeof(option[key]) === 'object') {
//          for (let i in option[key]) {
//             console.log (`Свойство ${i} имеет значение ${option[key][i]}`);
//         }
//     } else {
//         console.log (`Свойство ${key} имеет значение ${option[key]}`);
//     }
//  }
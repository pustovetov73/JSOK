"use strict";

/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDB.count < 10) {
    console.log('Вы любитель');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('У Вас достойный уровень');

} else if (personalMovieDB.count >= 30) {
    console.log('Вы профи в киномотагрофии');
} else {
    console.log('eroor');
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

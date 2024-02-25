// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [
    "igor",
    "kola",
    "vasa",
    "ivan",
    "maryna",
    "natalia",
    "oleg",
    "lesia",
    "viktoria",
    "ira",
];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let first_book = {
    title: 'Harry Potter',
    pageCount: '248',
    genre: 'fantasy',
};
console.log(first_book)
let two_book = {
    title: 'The Divine Comedy',
    pageCount: '607',
    genre: 'comedy',
};
console.log(two_book)
let three_book = {
    title: 'Rich Dead',
    pageCount: '352',
    genre: 'philosophical social',
}
console.log(three_book)
let books = [
    first_book,
    two_book,
    three_book,
]
console.log(books)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let first_book1 = {
    title: 'Harry Potter',
    pageCount: '248',
    genre: 'fantasy',
    authors: [name = 'Joanne', age = '58'],
};
console.log(first_book1)
let two_book2 = {
    title: 'The Divine Comedy',
    pageCount: '607',
    genre: 'comedy',
    authors: [name = 'Dante', age = '78']
};
console.log(two_book2)
let three_book3 = {
    title: 'Rich Dead',
    pageCount: '352',
    genre: 'philosophical social',
    authors: [name = 'Robert T', age = '76']
}
console.log(three_book3)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arrOne = [
    {name: 'Vasa', username: 'one', password: '0000'},
    {name: 'Olia', username: 'two', password: '1111'},
    {name: 'Igor', username: 'three', password: '2222'},
    {name: 'Stepan', username: 'four', password: '3333'},
    {name: 'Vira', username: 'five', password: '4444'},
    {name: 'Ser', username: 'syx', password: '5555'},
    {name: 'Slavik', username: 'seven', password: '6666'},
    {name: 'Kola', username: 'eight', password: '7777'},
    {name: 'Oleg', username: 'nine', password: '8888'},
    {name: 'Lesia', username: 'ten', password: '9999'},
]
console.log(arrOne[0].password);
console.log(arrOne[1].password);
console.log(arrOne[2].password);
console.log(arrOne[3].password);
console.log(arrOne[4].password);
console.log(arrOne[5].password);
console.log(arrOne[6].password);
console.log(arrOne[7].password);
console.log(arrOne[8].password);
console.log(arrOne[9].password);
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x1 = 0;
if (x1 === 0) {
    document.write('Вірно');
} else {
    document.write('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 61;
if (time < 0 || time > 60) {
    console.log('Добраніч')
} else if (time >= 0 && time <= 15) {
    console.log('Перша чверть години')
} else if (time >= 16 && time <= 30) {
    console.log('Друга чверть години')
} else if (time >= 31 && time <= 45) {
    console.log('Третя чверть години')
} else if (time >= 46 && time <= 60) {
    console.log('Четверта чверть години')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 11;
if (day < 0 || day > 31) {
    console.log('Поглянь на календар')
} else if (day >= 0 && day <= 10) {
    console.log('Перша декада')
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада')
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let days = +prompt('What day');
switch (days) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Error');
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 5;
let b = 5;
if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if ( a === b ){
    console.log('Cool')
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x2 = '';
let result = x2 || 'default';
console.log(result)
//
//

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!');
}
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function plane(a, b) {
    return a * b;
}

let p = plane(10, 20)
console.log(p)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function planeCircle(Pi, r) {
    return Pi * r ** 2;
}

let pc = planeCircle(3.14, 10);
console.log(pc);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function Cylinder(Pi, r, h) {
    return 2 * Pi * r * (h + r);
}

let Cy = Cylinder(3.14, 10, 20);
console.log(Cy)

// - створити функцію яка приймає масив та виводить кожен його елемент
function mass(abs) {
    for (const item of abs) {
        console.log(item);
    }
}

mass([`Ser`, 1984, "java"]);
console.log(`________________`)
mass([`Natalia`, 1992, "Med"]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(txt) {
    document.write(`<p>${txt}</p>`)
}

paragraf('Serhii')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulOne(txt1, txt2, txt3) {
    document.write(`<div>
                        <ul>
                            <li>${txt1}</li>
                            <li>${txt2}</li>
                            <li>${txt3}</li>
                        </ul>
                    </div>`)
}

ulOne('Happy', 'Happy', 'Happy')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulTwo(txt, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}

ulTwo('Serhii', 3);
ulTwo('Kinash', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function prymityv(Arr) {
    document.write(`<ul>`);
    for (let text of Arr) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

prymityv([39, `Sergiy`, true])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let peoples = [
    {id: 1, name: 'vasa', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'ola', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'ola', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true},
];

function userpeoples() {
    for (let people of peoples) {
        document.write(`<div>
            <p> ${people.id} ${people.name} ${people.age} status ${people.status}</p>
                        </div>`)
    }
}

userpeoples()

// - створити функцію яка повертає найменьше число з масиву

function nam(number) {
    let min = number[0];
    for (let i = 0; i < number.length; i++) {
        if (number[i] < min) {
            min = number[i];
        }
    }
    return min;
}

console.log(nam([45, 67, 33, 66, 56]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}

console.log(sum([22, 33, 44, 55, 66, 77]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let namIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = namIndex1;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sum, too, dollars) {
    for (let cur of too) {
        if (cur.currency === dollars) {
            return sum / cur.value
        }
    }
}

let result = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')
console.log(`result =`, result)
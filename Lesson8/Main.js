// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new User(1, `Serhii`, `Kinash`, `htfjt@gmail.com`, `+38096987676433`);
let user2 = new User(2, `Nati`, `Kinash`, `ytyyr@gmail.com`, `+38067987676433`);
console.log(user)
console.log(user2)
console.log(user.id, user.name, user.surname, user.email, user.phone)
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arr = [];
arr.push(
    new User(1, 'Vasa', 'Перший', 'qwer', 123),
    new User(4, 'Serhii', 'Другий', 'qfgr', 345),
    new User(3, 'Ola', 'Третій', 'kjher', 567),
    new User(2, 'Vika', 'Четвертий', 'jhfsjher', 789),
    new User(5, 'Alex', 'Пятий', 'qjahfr', 975),
    new User(8, 'Kola', 'Шостий', 'fkjf', 531),
    new User(7, 'Maryna', 'Сьомий', 'kajf', 124),
    new User(6, 'Nati', 'Восьмий', 'kafli', 468),
    new User(9, 'Stepan', 'Девятий', 'oaihfh', 879),
    new User(10, 'Vira', 'Десятий', 'kjabfkb', 999)
);
console.log(arr)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arr.filter((user) => !(user.id % 2)));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arr.sort((User1, User2) => User1.id - User2.id))
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    };
}

let hawa = new Client(1, 'Ser', 'Ursulas', 'gdgrrggr@gmail.com', 746554355, ['apple', 'milk',])
console.log(hawa)
// створити пустий масив, наповнити його 10 об'єктами Client
let Clients = [];
Clients.push(
    new Client(1, 'Vasa', 'Asa', 'hgfgfc', 354677454, ['apple', 'milk']),
    new Client(2, 'Vira', 'Ira', 'hggfgfc', 134444545444, ['bear', 'milk', 'apple']),
    new Client(3, 'Sergiy', 'Rgi', 'cbngfc', 76555655533, ['apple', 'sandwich']),
    new Client(4, 'Serhii', 'Rhi', 'gkkhgfc', 87766788, ['apple', 'milk']),
    new Client(5, 'Kola', 'Ol', 'ksjbf', 9854367, ['apple', 'milk', 'bear']),
    new Client(6, 'Ola', 'Ola', 'lksg', 988776543, ['bear']),
    new Client(7, 'Sveta', 'Vet', 'ktjhg', 8766543456, ['apple', 'bear']),
    new Client(8, 'Max', 'Max', 'kydhds', 989897654, ['sandwich', 'milk', 'bear']),
    new Client(9, 'Iryna', 'Yna', 'lujrss', 776654433, ['apple', 'bear']),
    new Client(10, 'Stepan', 'Epa', 'ggfmb', 77665544332, ['apple', 'milk', 'bear']),
);
console.log(Clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(Clients.sort((c1, c2) => c1.order.length - c2.order.length));
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log('-------------------INFO-------------------');
        console.log('model :', this.model);
        console.log('producer :', this.producer);
        console.log('year :', this.year);
        console.log('maxSpeed :', this.maxSpeed);
        console.log('volume :', this.volume);
        console.log('driver :', this.driver);
        console.log('-------------------INFO-------------------');
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newYear) {
        this.year = newYear;
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('W210', 'Mercedes', 2000, 265, 2.2);
car.drive();
car.info();
car.increaseMaxSpeed(15);
car.info()
car.changeYear(2003)
car.info()
car.addDriver({name: 'Serhii', age: 39, exp: 6});
car.info()
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    };

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive1() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info1() {
        console.log('-------------------INFO CLASS-------------------');
        console.log('modell :', this.model);
        console.log('producer :', this.producer);
        console.log('year :', this.year);
        console.log('maxSpeed :', this.maxSpeed);
        console.log('volume :', this.volume);
        console.log('driver :', this.driver);
        console.log('-------------------INFO CLASS-------------------');
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed1(newSpeed) {
        this.maxSpeed += newSpeed;
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear1(newYear) {
        this.year = newYear;
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver1(driver) {
        this.driver = driver;
    }
}

let car2 = new Car2('W210', 'Mercedes', 2000, 265, 2.2);
car2.drive1();
car2.info1();
car2.increaseMaxSpeed1(20);
car2.info1()
car2.changeYear1(2003)
car2.info1()
car2.addDriver1({name: 'Serhii', age: 39, exp: 6});
car2.info1()
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Human{
        constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Human{
    constructor(name, age, footSize) {
        super(name, age)
        this.footSize = footSize;
    }
}

const littleArr = [
    new Cinderella(`Nati`, 30, 39),
    new Cinderella(`Vika`, 28, 37),
    new Cinderella(`Zoria`, 24, 38),
    new Cinderella(`Nika`, 32, 40),
    new Cinderella(`Vira`, 31, 41),
    new Cinderella(`Ola`, 29, 36),
    new Cinderella(`Oksana`, 27, 34),
    new Cinderella(`Svieta`, 33, 42),
    new Cinderella(`Ira`, 35, 35)
]

class Prince extends Human{
    constructor(name, age, bootSize) {
        super(name,age)
        this.bootSize = bootSize;
    };

    findCinderella(arr) {
        for (let cinderella of arr) {
                if (cinderella.footSize === this.bootSize){
                    console.log(cinderella)
                }
        }
    }
}

const prince = new Prince(`Serhii`, 39, 39)
prince.findCinderella(littleArr)

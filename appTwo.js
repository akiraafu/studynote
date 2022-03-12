// let die1 = Math.floor(Math.random() * 6) + 1;
// let die2 = Math.floor(Math.random() * 6) + 1;
// let die3 = Math.floor(Math.random() * 6) + 1;
// let die4 = Math.floor(Math.random() * 6) + 1;
// let die5 = Math.floor(Math.random() * 6) + 1;
// let die6 = Math.floor(Math.random() * 6) + 1;


// function singSong() {
//     console.log('DO');
//     console.log('RE');
//     console.log('ME');
// }

// singSong();


// function greet(person) {
//     // console.log(`firstName is ${person}`);
//     console.log(`${person.toUpperCase()}`);
// }
// greet('Tom');


// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.!`);
// }
// greet('Elvis', 'Presley');


// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str.;
//     }
//     console.log(result);
// }
// repeat('Hey!', '10')


// function add(x, y) {
//     let sum = x + y;
//     return sum;
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//         // return stops execution of function
//     }
//     return x + y;
// }


// function lastElement(array) {
//     if (array.length === 0) {
//         return null;
//     } else {
//         for (let i = 0; i <= array.length; i++) {
//             return array[array.length - 1];
//         }
//     }
// }

// function capitalize(string) {
//my answer
//  let userInput = string.toUpperCase().slice(0, 1);
// return userInput + string.slice(1);

// aother answer
//     return string[0].toUpperCase() + string.slice(1);

// }

// function sumArray(arr) {
// WRONG ANSWER
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// RIGHT ANSWER
//     for (let num of array) {
//         sum += num;
//     }

//     return sum;
// }
// REF 1
// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

// REF2
// var arr = [1, 2, 3, 4];
// var total = 0;
// for (var i in arr) {
//   total += arr[i];
// }



// DEFINE YOUR FUNCTION BELOW:
// DEFINE YOUR FUNCTION BELOW:

const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
}
function returnDay(inputDays) {
    if (inputDays < 1 || inputDays > 7) {
        return null;
    } else {
        return (days[parseInt(inputDays)]);
    }
}


// else if (inputDays === 1) {
//     return days.one;
// } else if (inputDays === 2) {
//     return days.two;
// } else if (inputDays === 3) {
//     return days.three;
// } else if (inputDays === 4) {
//     return days.four;
// } else if (inputDays === 5) {
//     return days.five;
// } else if (inputDays === 6) {
//     return days.six;
// } else if (inputDays === 7) {
//     return days.seven;
// }





// fuction scope
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);



let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
}
console.log(bird);
// Scarlet Macaw is printed

let deadlyAnimal = 'Blue-ringed Octopus';
function handleAnimal() {
    let deadlyAnimal = 'Scorpionfish';
    console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal)

const creatrue = 'Common Sea Dragon';
function scubaDive() {
    const creatrue = 'Spanish Dancer';
    console.log(creatrue);
}
scubaDive();
// Spanish Dancer

// program showing local scope of a variable
let a = "hello";
function greet() {
    let b = "World"
    console.log(a + b);
}


greet(); //Hello world
// console.log(a + b); // error Uncaught ReferenceError: b is not defined
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}


// function add(x, y) {
//     return x + y;
// }
const add = function (x, y) {
    return x + y;
}



function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}

callTwice(rollDie)



function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('congrats, I am a good function!');
            console.log('you win a million dollars!!')
        }
    } else {
        return function () {
            alert('you have been infected by a computer virus!')
            alert('stop trying to close this window!')
            alert('stop trying to close this window!')
            alert('stop trying to close this window!')
        }
    }
}


//factory function
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
//try on the console
const isChild = makeBetweenFunc(0, 18)
isChild(6)//true
isChild(21)//false

const isAdult = makeBetweenFunc(19, 64)
const isSenior = makeBetweenFunc(65, 120)


const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}
//shorthand square(num);cube(num)
//try on the console
myMath.square(3)
myMath.cube(18)



const cat = {
    name: 'Blue steele',
    color: 'Grey',
    breed: 'Scottish fold',
    meow() {
        console.log(`${this.name} says meowwww`);
    }
}


const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(num) {
        return (this.eggCount += 1), 'EGG';
    }
};


function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log('Please pass a string next time!')
    }
}
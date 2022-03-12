

// forEach
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// function print(element) {
//     console.log(element)
// }
// numbers.forEach(print)

// numbers.forEach(function (el) {
//     console.log(el)
// })

// for (let el of numbers) {
//     console.log(el);
// }

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stan By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// movies.forEach(function (movies) {
//     console.log(`${movies.title} - ${movies.score}/100`)
// })

// const title = movies.map(function (movies) {
//     return movies.title.toUpperCase();
// })


// MAP
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

let firstNames = fullNames.map(function (fullNames) {
    return fullNames.first;
});
console.log(firstNames);




// const add = function (x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

const square = num => {
    return num ** 2;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

const greet = (str) => {
    return `Hey ${str}!`
}


const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a, b) => a + b


const movie = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stan By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// Arrow functions wrapup
// const rateMovie = movie.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const rateMovie = movie.map((movie) => {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const rateMovie = movie.map(movie => {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const rateMovie = movie.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))

const rateMovie = movie.map(movie => `${movie.title} - ${movie.score / 10}`)


// console.log('Hello!!!')
// setTimeout(() => {
//     console.log('Are you still there?')
// }, 3000)
// console.log('GOODBYE!')


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

clearInterval(id);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
numbers.filter(n => {
    return n < 10
})


// const goodMovies = movie.filter(movie => {
//     return movie.score > 80
// })

const goodMovies = movie.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

movie
    .filter(m => m.score > 80)
    .map(m => m.title);

const badMovies = movie.filter(m => m.score < 70)

const recentMovies = movie.filter(m => m.year > 2000)

// names = ['mark', 'staceysmom1978', 'q29835454449', 'carrie98', 'MoanaFan'];
// const validUserNames = names.filter(n => n.length < 10);


names = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];
// const validUserNames = names.filter(function () {
//     return names.length() < 10;
// });

// function validUserNames() {
//     return console.log = names.filter(n => n.length < 10)
// }

// function validUserNames(userNames){
//     return userNames.filter(characters => characters.length < 10);
// }

function validUserNames(n) {
    return n.filter(n => n.length < 10);
}




movie.some(movie => movie.year > 2015)
movie.every(movie => movie.year > 1960)



function allEvens(numbers) {
    return numbers.every(number => number % 2 === 0);
}

// function allEvens(n) {
//     numbers.every(number => {
//         return number % 2 === 0;
//     })
// }


// const allEvens = [2, 4, 6, 8, 10]
// allEvens.every(function () {
//     number % 2 === 0;
// });



// reduce method
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total)

const total = prices.reduce((total, price) => {
    return total + price
})

// or shorter way
// const total = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

const maxPrice = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    }
    return max;
})


const highestRated = movie.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100)
evens.reduce((sum, num) => sum + num, 60)
evens.reduce((sum, num) => sum + num, 40)


const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}



//defailt params old way
// function rollADie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }
// new feature
function rollADie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greeting(person, msg = 'Hey there', punc = '!') {
    console.log = (`${msg}, ${person}${punc}`)
}

// spread
const cats = ['blue', 'scout', 'rocket'];
const dogs = ['rusty', 'wyatt'];

const allPets = [...cats, ...dogs]

const feline = { vegs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' }

const catDog = { ...feline, color: 'black', ...canine }

const arrayInObject = { ...[2, 4, 6, 7, 8] }


// rest params
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVEL MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

// Destructuring parameters
//old way
//  movie.filter((movie) => movie.score >= 90)
movie.filter(({ score }) => score >= 90)


// movie.map(movie => {
//     return `${movie.title} (${movie.year})is rated ${movie.score}`
// })

movie.map(({ title, score, year }) => {
    return `${title} (${year})is rated ${score}`
})
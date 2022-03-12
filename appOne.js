console.log("Hello from our first JS file!!");
let total = 1 + 3;


let random = Math.random();

if (random < 0.5) {
    console.log("Your number is less than 0.5!!!")
} else {
    console.log("Your number is greater than 0.5!!!")
}
console.log(random);


const dayOfWeek = prompt('ENTER A DAY').toLowerCase();
if (dayOfWeek === 'monday') {
    console.log("UGHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') {
    console.log("YAY I LOVE SATURDAYS")
} else if (dayOfWeek === 'friday') {
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else {
    console.log("MEH")
}

// 0 - 5 free
// 5 - 10 child $10
// 10 - 65 adult $20
// 65 + senior $10

const age = 68;
if (age < 5) {
    console.log("You are a baby. You get in for free!")
}
else if (age < 10) {
    console.log("You are a child. You pay $10")
}
else if (age < 65) {
    console.log("You are an adult. You pay $20")
}
else {
    console.log("You are a senior. You pay $10")
}



const password = prompt("please enter a new password")

//password must be 6+ characters
if (password.length >= 6) {
    // password cannot include space 
    if (password.indexOf(" ") === -1) {
        console.log('Valid Password')
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! must be 6+ characters")
}


const userInput = prompt("Enter something");
if (userInput) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

//   && and   || or   ! not
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid Password!")
} else {
    console.log("Incorrect format for password!")
}


// 0 - 5 free
// 5 - 10 child $10
// 10 - 65 adult $20
// 65 + senior free

const age = - 100;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("free");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("Invalid age!")
}

const firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("TRY AGAIN!!!")
}

const age = 61
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("you are not baby or senior!")
}


// PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

// YOUR CODE GOES DOWN HERE:
let fullAddress = restaurant.address + " " + restaurant.city + " " + restaurant.state + " " + restaurant.zipcode;

let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode} `
console.log(`${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode} `)

const comments = [
    { username: 'Tammy', text: 'lololol', votes: 9 },
    { username: 'Fishboi', text: 'glub glub', votes: 12377 }
]


console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for (let i = 1; i <= 10; i += 1) {
    console.log('I am in the loop')
    console.log(i);
}

let lyric = 'da da da'
for (let i = 1; i <= 6; i++) {
    console.log(lyric);
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

for (let i = 10; i <= 1000; i *= 10) {
    console.log(i);
}


// print out index
const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}

for (let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i])
}


for (let i = 1; i <= 10; i++) {
    console.log(`i is ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`    j is ${j}`)
    }
}


// neasted for loop

const seartingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seartingChart.length; i++) {
    const row = seartingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

for (let i = 0; i < seartingChart.length; i++) {
    const row = seartingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}


const SECRET = 'BabyHippo'
let guess = prompt('enter the secret code...');
while (guess !== SECRET) {
    guess = prompt('enter the secret code...');
    console.log('CONGRATS YOU GOT THE SECRET!!')
}


let input = prompt('Hey, say something!')
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") break;
}
console.log('OK YOU WIN!')


// guessing game
let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
    maximum = parseInt(prompt('Enter the valid number!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess!');
    } else {
        guess = prompt('Too low! Enter a new guess!');
    }
}
if (guess === 'q') {
    console.log('OK, YOU QUIT!')
} else {
    console.log('CONGRATS YOU WIN!')
    console.log(`You got it! It took you ${attempts} guess(es)!`)
}



const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
for (let row of seatingChart) {
    for (let name of row) {
        console.log(name);
    }
}

for (let char of 'hello world') {
    console.log(char)
}


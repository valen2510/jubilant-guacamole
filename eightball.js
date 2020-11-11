// Simple eightBall game

const userName = 'User' //Setting a stated name User

console.log(userName ? `Hello, ${userName}!` : "Hello!") //Greetings to user

const userQuestion = "Will I become rich?" // Setting question for the user

console.log(`${userName} asked: ${userQuestion}`) // displaying question asked by the user

let randomNumber = Math.floor(Math.random() * 8) // Setting random whole number from 0 to 7

let eightBall = "" // Setting the eigthball variable

// Control flow for each posible random Number setting an answer to eightBall
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    default:
        eightBall = 'Signs point to yes';
        break;
}

console.log(`Eight ball answer: ${eightBall}`) //eightBall answer

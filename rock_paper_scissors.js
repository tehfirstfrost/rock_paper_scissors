
let humanScore = 0;
let computerScore = 0;
let ties = 0;

const getComputerChoice = () => {
    const option = ['rock', 'paper', 'scissors'];
    const num = Math.random();
    return option[Math.trunc((num * 3))];
}

const getHumanChoice = () => {
    let choice = prompt("Enter you choice: ");
    return choice.toLowerCase();
}


const playRound = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice){
        ties += 1
    } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore += 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore += 1;
    } else{
        computerScore += 1;
    }
}


const playGame = () => {
    for (let x = 0; x < 5; x++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}


playGame()

console.log('FINAL SCORE:')
console.log(`\tComputer score: ${computerScore}`)
console.log(`\tPlayer score: ${humanScore}`)
console.log(`\tTied: ${ties}`)



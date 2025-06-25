//write your code here


//                  0       1          2         3           4
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissor', 'rock']
};

const choicePC = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

function Play(YourChoice) {
    let ComputerChoice = choicePC();
    
    console.log(`Choice pc: ${ComputerChoice}`);
    console.log(`Choice player: ${YourChoice}`);

    if (YourChoice === ComputerChoice) {
        console.log('Empate');
    }
    else if (rules[YourChoice].includes(ComputerChoice)) {
        console.log('Ganas');
    }
    else {
        console.log('Pierdes');
    }
}

Play('rock');

console.log("Hello Rigo from the console!");
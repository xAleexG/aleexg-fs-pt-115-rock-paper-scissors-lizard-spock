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

const choicePc = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

function play(yourChoice) {
  const computerChoice = choicePc();
  console.log(`Choice pc: ${computerChoice}`);
  console.log(`Choice player: ${yourChoice}`);

  if (yourChoice === computerChoice) {
    console.log("Empate");
    return;
  }
  
  if (rules[yourChoice].includes(computerChoice)) {
    console.log("Ganas");
    return;
  }
  
  console.log("Pierdes");
}
Play('rock');
console.log("Hello Rigo from the console");
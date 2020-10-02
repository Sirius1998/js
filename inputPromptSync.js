const prompt = require('prompt-sync')({sigint: true});
// generates a random word based on it's elements
const wordGenerator = function(){
    const wordList = ['coffee', 'tea', 'milk', 'latte', 'chai', 'smoothie', 'juice'];
    const wordIndex = Math.floor(Math.random() * wordList.length);
    const word = wordList[wordIndex].toLowerCase().split("");
    return word;
};
const hangman = function(){
    while(true){
        // game variables needed to start the game
        let guessLetter, play, lives;
        const gameWord = wordGenerator();
        const solution = [...gameWord];
        for(let i = 0; i < gameWord.length; i++){
            solution.splice(i, 1, ' ');
        }
        let tries = 0;
        // iterates based on the length of the word
        for(let i = 0; i < gameWord.length; i++){
            console.log(`\nlives: ${gameWord.length}`)
            guessLetter = prompt("enter a word: ").toLowerCase();
            // iterates through every possibility
            for(let j = 0; j < gameWord.length; j++){
                if(guessLetter === gameWord[j]){
                    solution.splice(j, 1, guessLetter);
                }
                lives--;
            }
            // to keep track of progress
            tries++;
            console.log(`your guesses: ${solution}\n`);
            // if won
            if(solution.join('') === gameWord.join('')){
                console.log('you won the game!');
                console.log(`game word: ${gameWord.join('')}`);
                console.log(`it took you ${tries} tries to guess the word`);
                console.log(`your word: ${solution.join('')}\n`);
                break;
            }
        }
        // if lost
        if(solution.join('') !== gameWord.join('')){
            console.log('you lost the game!');
            console.log(`game word: ${gameWord.join('')}`);
            console.log(`your word: ${solution.join('')}\n`);
        }
        // play again or no
        play = prompt("yes or no: ").toLowerCase();
            if(play !== 'yes'){
                console.log();
                break;
            }
    }
}   
hangman();





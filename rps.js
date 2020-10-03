const prompt = require('prompt-sync')({sigint: true});
const rps = ['rock', 'paper', 'scissor'];
let playerChoice, cpuChoice, random, player_score = 0, cpu_score = 0;
while(true){
    random = Math.floor(Math.random() * 3);
    cpuChoice = rps[random];
    console.log(`\nPlayer Score: ${player_score} \nCpu Score ${cpu_score}\n`);
    const winner = function(player, cpu){
        if(player > cpu){
            console.log(`\nPlayer wins \nPlayer Score: ${player_score}\n`);
        }
        else if(player < cpu){
            console.log(`\nCpu wins \nCpu Score: ${cpu_score}\n`);
        }
        else{
            console.log(`\nIt's a tie \nPlayer Score: ${player_score} - Cpu Score: ${cpu_score}\n`);
        }
    };
    playerChoice = prompt('Choose rock, paper, scissor: ');
    if(playerChoice === "" || playerChoice === "quit"){
        winner(player_score, cpu_score);
        break;
    }
    if(playerChoice === cpuChoice){
        console.log(`${playerChoice} is tie to ${cpuChoice}`);
        player_score += 0;
        cpu_score += 0;
    }
    else{
        if((playerChoice === 'rock' && cpuChoice === 'scissor') || (playerChoice === 'paper' && cpuChoice === 'rock') || (playerChoice === 'scissor' && cpuChoice === 'paper')){
            console.log(`${playerChoice} beats ${cpuChoice}`); 
            player_score++;
        }
        else{
            console.log(`${playerChoice} loses ${cpuChoice}`);
            cpu_score++;
        }
    } 
}
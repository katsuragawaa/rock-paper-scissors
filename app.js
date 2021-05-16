"use strict";

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function convertText(hand) {
    if (hand === "rock") return "Pedra";
    if (hand === "paper") return "Papel";
    return "Tesoura";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    document.getElementById(user).classList.add("green-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("green-glow");
    }, 600);

    const smallUser = "(player)".fontsize(3).sup();
    const smallComp = "(computer)".fontsize(3).sup();
    result_div.innerHTML = `${convertText(user)}${smallUser} x ${convertText(
        computer
    )}${smallComp}<br>Você ganhou!!`;
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    document.getElementById(user).classList.add("red-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("red-glow");
    }, 600);

    const smallUser = "(player)".fontsize(3).sup();
    const smallComp = "(computer)".fontsize(3).sup();
    result_div.innerHTML = `${convertText(user)}${smallUser} x ${convertText(
        computer
    )}${smallComp}<br>Você Perdeu..`;
}

function draw(user, computer) {
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("gray-glow");
    }, 600);
    const smallUser = "(player)".fontsize(3).sup();
    const smallComp = "(computer)".fontsize(3).sup();
    result_div.innerHTML = `${convertText(user)}${smallUser} x ${convertText(
        computer
    )}${smallComp}<br>Empate!`;
}

function game(hand) {
    const computerHand = getHand();
    switch (hand + computerHand) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(hand, computerHand);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(hand, computerHand);
            break;
        default:
            draw(hand, computerHand);
            break;
    }
    console.log(hand, computerHand);
}

function getHand() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function main() {
    rock_div.addEventListener("click", () => game("rock"));
    paper_div.addEventListener("click", () => game("paper"));
    scissors_div.addEventListener("click", () => game("scissors"));
}

main();

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    msg.innerText = "Game Was Draw!"
    msg.style.backgroundColor = "#081b31"
}


const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText =`You Lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {

        let userWin = true;
        if (userChoice === "rock") {
            //scissors ,papaer
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
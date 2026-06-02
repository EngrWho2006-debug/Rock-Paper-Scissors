let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;

function play(userChoice) {

    round++;
    document.getElementById("round").innerHTML = round;

    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice =
        choices[Math.floor(Math.random() * 3)];

    document.getElementById("user").innerHTML =
        "You chose: " + userChoice;

    document.getElementById("computer").innerHTML =
        "Computer chose: " + computerChoice;

    let result;

    if (userChoice === computerChoice) {

        result = "🤝 Draw!";
        draws++;

        document.getElementById("draws").innerHTML = draws;

    }
    else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {

        result = "🎉 You Win!";
        wins++;

        document.getElementById("wins").innerHTML = wins;

    }
    else {

        result = "😢 You Lose!";
        losses++;

        document.getElementById("losses").innerHTML = losses;
    }

    document.getElementById("result").innerHTML = result;
}

function resetScore() {

    if (confirm("Are you sure you want to reset the scores?")) {

        wins = 0;
        losses = 0;
        draws = 0;
        round = 0;

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("draws").innerHTML = draws;
        document.getElementById("round").innerHTML = round;

        document.getElementById("user").innerHTML = "";
        document.getElementById("computer").innerHTML = "";
        document.getElementById("result").innerHTML = "Scores Reset!";
    }
}

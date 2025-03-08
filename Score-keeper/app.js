const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playUpto");
const message = document.querySelector("#message");

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === opponent.score && player.score === winningScore-1) {
            winningScore += 1;
            message.textContent = "Game Point!"
            message.classList.add("has-text-info");
        }
        else if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;

            if (player === p1) {
                message.textContent = "Player one won!";
                message.classList.add("has-text-success")
            }
            else if (player === p2) {
                message.textContent = "Player two won!";
                message.classList.add("has-text-success");
            }
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener("click", () => {
    updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
    updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;

    p1.display.textContent = 0;
    p2.display.textContent = 0;

    p1.display.classList.remove("has-text-success", "has-text-danger");
    p2.display.classList.remove("has-text-success", "has-text-danger");

    p1.button.disabled = false;
    p2.button.disabled = false;

    message.textContent = "";
}
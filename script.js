"use strict";
const diceImage = document.querySelector(".dice");
const newGameBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
let activePlayer = 0;
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
function getActivePlayer() {
    return activePlayer === 0 ? player1 : player2;
}
function switchPlayer() {
    document.querySelector(".player--active").classList.remove("player--active");
    activePlayer = activePlayer === 0 ? 1 : 0;
    getActivePlayer().classList.add("player--active");
}
function rollDice() {
    const dice = Math.floor(Math.random() * 6 + 1);
    return dice;
}
function displayDice(dice) {
    diceImage.classList.remove("hidden");
    diceImage.src = `images/dice-${String(dice)}.png`;
}
function updateCurrentScore(dice) {
    const currentScore = document.getElementById(`current--${activePlayer}`);
    let score = Number(currentScore.textContent);
    score += dice;
    currentScore.textContent = String(score);
}
function updateScore() {
    const scorePlayer = document.getElementById(`score--${activePlayer}`);
    const currentDicePlayer = document.getElementById(`current--${activePlayer}`);
    let score = Number(scorePlayer.textContent);
    let currentDice = Number(currentDicePlayer.textContent);
    score += currentDice;
    scorePlayer.textContent = String(score);
    currentDicePlayer.textContent = "0";
}
rollBtn.addEventListener("click", () => {
    const dice = rollDice();
    displayDice(dice);
    if (dice === 1) {
        document.getElementById(`score--${activePlayer}`).textContent = "0";
        document.getElementById(`current--${activePlayer}`).textContent = "0";
        return switchPlayer();
    }
    updateCurrentScore(dice);
});
holdBtn.addEventListener("click", () => {
    updateScore();
    switchPlayer();
});
newGameBtn.addEventListener("click", () => {
    activePlayer = 0;
    diceImage.classList.add("hidden");
    document.querySelector("#score--0").textContent = "0";
    document.querySelector("#score--1").textContent = "0";
    document.querySelector("#current--0").textContent = "0";
    document.querySelector("#current--1").textContent = "0";
});

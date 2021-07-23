const score1 = document.querySelector('#display1');
const score2 = document.querySelector('#display2');
const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const reset = document.querySelector('#reset');
const numTimes = document.querySelector('#select');

let scoreA = 0;
let scoreB = 0;
let winningsScore = 0;
let isGameOver = false;
function resett() {
    scoreA = 0; scoreB = 0;
    score2.textContent = scoreB;
    score1.textContent = scoreA;
    isGameOver = false;
    score1.classList.remove('winner', 'loser');
    score2.classList.remove('winner', 'loser');
}

numTimes.addEventListener('change', function () {
    winningsScore = parseInt(this.value);
    resett();
})





button1.addEventListener('click', () => {
    if (!isGameOver) {
        scoreA += 1;
        if (scoreA == winningsScore) {
            score1.classList.add('winner');
            score2.classList.add('loser');
            isGameOver = true;
        }
    }

    score1.textContent = scoreA;
})

button2.addEventListener('click', () => {
    if (!isGameOver) {
        scoreB += 1;

        if (scoreB === winningsScore) {
            isGameOver = true;
            score2.classList.add('winner');
            score1.classList.add('loser');
        }
    }
    score2.textContent = scoreB;
})

reset.addEventListener('click', resett);



const min = 0;
const max = 2;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let board = [];
function initializeGame() {
    for (var i = 0; i < 3; i++) {
        let inner = [0, 0, 0];
        board.push(inner);
        console.log(getRandomNumber(min, max));
    }
}

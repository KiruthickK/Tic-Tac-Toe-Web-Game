const min = 0;
const max = 2;
const user = 'o';
const me = 'x';
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let board = [];
function initializeGame() {
    console.log(board)
    board = []
    for (var i = 0; i < 3; i++) {
        let inner = ['-','-','-'];
        board.push(inner);
        console.log(getRandomNumber(min, max));
    }
}
function isPositionValid(row, col){
    if(board[row][col] != '-'){
        alert('Position already occupied');
        return false;
    }
    board[row][col] = 'o';
    return true;
}
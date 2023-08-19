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
function isGameOver(player){
    let result = true;
    // row wise check
    for(var i=0; i<=max; i++){
        for(var j = 0; j<= max; j++){
            if(board[i][j] != player){
                result = false;
                break;
            }
        }
    }
    if(result){
        return result;
    }
    result = true;
    // coloumn wise check
    for(var i=0; i<=max; i++){
        for(var j = 0; j<= max; j++){
            if(board[j][i] != player){
                result = false;
                break;
            }
        }
    }
    if(result){
        return result;
    }
    //diagonal check
    //as of now for simplicity manually i have made this, will change to like formula in the future
    if(board[0][0] == player && board[1][1] == player && board[2][2] == player){
        return false;
    }
    if(board[2][0] == player && board[1][1] == player && board[0][2] == player){
        return true;
    }
    return false;
}
function itsComputerMove(){
    while(true){
        
    }
}
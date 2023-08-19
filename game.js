const min = 0;
const max = 2;
const user = 'o';
const me = 'x';
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let board = [];
function initializeGame() {
    return new Promise(resolve => {
        board = []
        for (var i = 0; i < 3; i++) {
            let inner = ['-','-','-'];
            board.push(inner);
        }
        console.log(board)
        resolve();
    });
}
function isPositionValid(row, col, player){
    return new Promise(resolve => {
        result = true;
        if(board[row][col] != '-' && player == 'o'){
            alert('Position already occupied');
            result = false;
            resolve(result);
        }else if(board[row][col] != '-'){
            result = false;
            resolve(result);
        }
        board[row][col] = player;
        resolve(result);
    });
}
function isGameOver(player){
    return new Promise(resolve => {
        console.log(board)
        let result = true;
        // row wise check
        for(var i=0; i<=max; i++){
            for(var j = 0; j<= max; j++){
                if(board[i][j] != player){
                    console.log(player)
                    result = false;
                    break;
                }
            }
        }
        if(result){
            resolve(result);
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
            resolve(result);
        }
        result = true;
        //diagonal check
        //as of now for simplicity manually i have made this, will change to like formula in the future
        if(board[0][0] == player && board[1][1] == player && board[2][2] == player){
            resolve(result);
        }
        if(board[2][0] == player && board[1][1] == player && board[0][2] == player){
            resolve(result);
        }
        result = false;
        resolve(result);
    })

}
function itsComputerMove(o_mark){
    return new Promise(resolve => {
        let r = 0, c = 0;
        while(!isPositionValid(r = getRandomNumber(min, max), c = getRandomNumber(min, max), 'o')){
            // simply running until getting a free space to fill for computer
        }
        document.getElementById('td-'+r+'-'+c).innerHTML = o_mark;
        resolve();
    });
}
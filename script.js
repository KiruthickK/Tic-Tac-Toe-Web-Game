window.onload = (() => {
    createActiveListeners();
    initializeGame();
})
const x_mark = `<img src="./Assets/x.png" alt="">`;
const o_mark = `<img src="./Assets/circle.png" alt="">`;
function newGame() {
    initializeGame();
    createActiveListeners();
}
function createActiveListeners() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');
    for(var i = 0; i<rows.length;i++){
        const tds = rows[i].querySelectorAll('td');
        for(var j = 0;j<tds.length;j++){
            var celll = tds[j];
            tds[j].id = 'td-'+i+'-'+j;
            tds[j].innerHTML = '';
            tds[j].onclick = ((cell) => {
                cellClicked(cell.srcElement.id);
            });
        }
    }
}
function rowColExtractionFromId(id){
    let datas = id.split('-');
    return [datas[1], datas[2]];
}
function cellClicked(id){
    rowcol = rowColExtractionFromId(id);
    if(isPositionValid(+rowcol[0], +rowcol[1], 'o')){
        document.getElementById(id).innerHTML = x_mark;
        console.log(board);
        if(isGameOver('o')){
            document.getElementById(id).innerHTML = x_mark;
            alert("Yayy!, you won");
            return;
        }
    }else{
        return;
    }
    itsComputerMove(o_mark, id);
    console.log(board);
    if(isGameOver('x')){
        document.getElementById(id).innerHTML = o_mark;
        alert("Hahah I won!");
        return;
    }
}
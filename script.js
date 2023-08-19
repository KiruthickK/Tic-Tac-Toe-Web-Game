window.onload = (() => {
    createActiveListeners();
    initializeGame();
})
const x_mark = `<img src="./Assets/x.png" alt="">`;
const o_mark = `<img src="./Assets/circle.png" alt="">`;
async function newGame() {
    await initializeGame();
    await createActiveListeners();
}
function createActiveListeners() {
    return new Promise(resolve => {
        const table = document.querySelector('table');
        const rows = table.querySelectorAll('tr');
        for(var i = 0; i<rows.length;i++){
            const tds = rows[i].querySelectorAll('td');
            for(var j = 0;j<tds.length;j++){
                tds[j].id = 'td-'+i+'-'+j;
                tds[j].innerHTML = '';
                tds[j].onclick = ((cell) => {
                    console.log(cell.srcElement.id);
                    cellClicked(cell.srcElement.id);
                });
            }
        }
        resolve();
    });
}
function rowColExtractionFromId(id){
    return new Promise(resolve => {
        let datas = id.split('-');
        resolve([datas[1], datas[2]]);
    })
}
async function cellClicked(id){
    var rowcol;
    await rowColExtractionFromId(id).then(res => {
        rowcol = res;
    }).catch(err => {
        console.log(err);
    });
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
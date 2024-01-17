var user;
var bot;
window.onload = ()=>{
    let choice = prompt('Type 1 for choosing \'X\' or enter any other number for choosing \'O\'');
    if(choice == 1){
        alert('You have chosen "X" to play');
        user = 'X';
        bot = 'O';
    }else{
        alert('You have chosen "O" to play');
        user = 'O';
        bot = 'X';
    }
    initialisePlay(user);
}
let userSymbol;
let botSymbol;
async function initialisePlay(user){
    if(user == 'X'){
        userSymbol = `<img src="./Assets/x.png" alt="">`;
        botSymbol = `<img src="./Assets/circle.png" alt="">`;
    }else{
        botSymbol = `<img src="./Assets/x.png" alt="">`;
        userSymbol = `<img src="./Assets/circle.png" alt="">`;
    }
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
}
async function cellClicked(id){
    console.log('confirm, he clicked!');
}
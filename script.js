window.onload = () => {
    initialiseTable();
}
const user = 'x';
const bot = 'o';
const x_mark = `<img src="./Assets/x.png" alt="">`;
const o_mark = `<img src="./Assets/circle.png" alt="">`;
function initialiseTable() {
    const tbody = document.getElementById('table_body');
    const rows = tbody.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        const cols = rows[i].getElementsByTagName('td');
        rows[i].id = `row-${i}`;
        for (var j = 0; j < cols.length; j++) {
            cols[j].id = `r-${i}:c-${j}`;
            ((i, j) => {
                cols[j].onclick = () => {
                    clickHandlerForCell(i, j)
                }
            })(i, j);
        }
    }
}
async function clickHandlerForCell(row, col) {

}
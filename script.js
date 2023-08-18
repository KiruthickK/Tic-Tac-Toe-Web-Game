window.onload = (()=>{
    tryt();
});
function tryt(){
    var file = fopen('Messages/Message.txt');
    var str = fread(file,flength(file) );
    console.log(str);
}
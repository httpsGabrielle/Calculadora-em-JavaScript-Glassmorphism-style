var valores = [];

function insert(num){
    valores.push(num);
    document.getElementById('viewer').innerHTML = valores.join('');
}
function clean(){
    while(valores.length) {
        valores.pop();
     }
    document.getElementById('viewer').innerHTML = valores.join('');
}
function backspace(){
    valores.pop();
    document.getElementById('viewer').innerHTML = valores.join('');
}

function result(){
    var resultado = eval(document.getElementById('viewer').innerHTML);
    while(valores.length) {
        valores.pop();
     }
    valore= resultado
    document.getElementById('viewer').innerHTML = resultado;
}
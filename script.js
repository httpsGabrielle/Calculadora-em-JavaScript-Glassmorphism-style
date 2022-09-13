function insert(num)
{
    var numView = document.getElementById('viewer').innerHTML;
    document.getElementById('viewer').innerHTML = numView + num;
}
function clean(){
    document.getElementById('viewer').innerHTML = " ";
}
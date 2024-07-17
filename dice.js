function randInt(max,min){
    return Math.floor(Math.random()*(max-min+1))+min;
}
document.getElementById("b3").onclick=function(){
    const min =Number(document.getElementById("inp1").value);
    const max =Number(document.getElementById("inp2").value);
    if(isNaN(max)||isNaN(min)){
        alert('Enter valid numbers');
        return;
    }
    const n=randInt(max,min);
    document.getElementById("label").textContent=n;

}

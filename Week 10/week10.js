
/*
let username =document.getElementById("Send").onclick=function(){
let username=document.getElementById("uname").value;
document.getElementById("p").innerHTML = username;
let age=document.getElementById("age").value;
if(age>=18){
    document.getElementById("p").innerHTML=age+"You can vote";
}else{
    document.getElementById("p").innerHTML=age+"You cannot vote";
}
}
*/

/*
function Change(){
    var p = document.getElementsByTagName("p");
    for(var i=0;i<p.length;i++){
    p[i].style.fontSize="xx-large";
    }
}*/

/*function selectClass(){
    var para=document.getElementsByClassName("para");
    var i;
    for(i=0;para.length;i++){
        para[i].style.fontSize="xx-large"
    }
}*/

/*
function query(){
    var p = document.querySelectorAll(".para");
    console.log(p);
}
*/
var a;
function hide_show(){
    if (a==1){
        document.getElementById("img").style.display="inline";
        return a=0;

    }else{
        document.getElementById("img").style.display="none";
        return a=1;
    }

}

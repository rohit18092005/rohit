function vote(){
    var name=document.getElementById("name").value;
var age=document.getElementById("age").value;
var res=document.getElementById("res");
if(age>=18){
    res.innerHTML="you can vote";
}else{
    res.innerHTML="you cannot vote";
}
}
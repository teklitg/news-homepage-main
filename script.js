var open=document.getElementById("i") ;
var close=document.getElementById("c") ;
var body=document.body;

open.addEventListener("click", function () {
    this.style.display = "none"
    close.style.display = "block"
    body.style.backgroundColor= "rgba(20,20,20,0.4)"
    document.getElementById("f").style.display="block"
})
close.addEventListener("click",function () {
    this.style.display="none";
    open.style.display="block";
    body.style.backgroundColor= "transparent";
    document.getElementById("f").style.display="none"
})
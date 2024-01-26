// Code for Run Code
var btn1 = document.getElementById("btn-1");
btn1.onclick = function run(){
    var code  = document.getElementById("code").value;
    var result = document.getElementById("result");
    result.innerHTML=code;
    var first = document.getElementById("first-box");
    first.style.display = "none";
    var second = document.getElementById("second-box");
    second.style.display="block";
    var btn2 = document.getElementById("btn-2");
    btn2.style.display="block";
    var btn1 = document.getElementById("btn-1");
    btn1.style.display="none";
}
// Code for View Code

var btn2 = document.getElementById("btn-2");
btn2.onclick = function view(){
    var first = document.getElementById("first-box");
    first.style.display = "block";
    var second = document.getElementById("second-box");
    second.style.display="none";
    var btn1 = document.getElementById("btn-1");
    btn1.style.display="block";
    var btn2 = document.getElementById("btn-2");
    btn2.style.display="none";
}


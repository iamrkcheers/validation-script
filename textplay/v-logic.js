window.addEventListener("DOMContentLoaded",init)

function init(){
    document.getElementById("fn").addEventListener("keyup",callfn);
    document.getElementById("ln").addEventListener("keyup",callln);
    document.getElementsByTagName("button")[0].addEventListener("click",show);
}

function callfn(){
    isMinChar('fn','sp1',3);
}

function callln(){
    isMinChar('ln','sp2',5);
}

function isEmpty(name, index) {
    if (document.getElementById(name).value == "") {
        document.getElementById(index).innerHTML = "This field can't be blank !";
    }
}

function isMinChar(name, span, num) {
    if (document.getElementById(name).value.length < num) {
        document.getElementById(span).innerHTML = "This field can't have less than " + num + " chars !";
    } else {
        document.getElementById(span).innerHTML = "";
    }
}

function show() {
    isEmpty('fn', 'sp1');
    isEmpty('ln', 'sp2');
}
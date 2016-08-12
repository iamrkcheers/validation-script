window.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementsByTagName("button")[0].addEventListener("click", get);
    //rb.addEventListener("click",reset);

    document.getElementById("fnm").addEventListener("keyup", check);
    document.getElementById("lnm").addEventListener("keyup", check1);
    document.getElementById("usnm").addEventListener("keyup", check2);;
    document.getElementById("em").addEventListener("keyup", check3);;
    document.getElementById("pswd").addEventListener("keyup", check4);;
    document.getElementById("cpswd").addEventListener("keyup", check5);;
    document.getElementById("a").addEventListener("keyup", check6);;
}

function get() {
    submit("fnm", "sp");
    submit("lnm", "sp1");
    submit("usnm", "sp2");
    submit("em", "sp3");
    submit("pswd", "sp4");
    submit("cpswd", "sp5");
    submit("a", "sp6");
}

function check() {
    isItOk1("fnm", "sp", "Firstame");
}

function check1() {
    isItOk1("lnm", "sp1", "Lastame");
}

function check2() {
    isItOk2("usnm", "sp2", "Username");
}

function check3() {
    isItOk3("em", "sp3", "Email");
}

function check4() {
    isItOk4("pswd", "sp4", "Password");
}

function check5() {
    isItOk5("cpswd", "pswd", "sp5", "ConfirmPassword", "Password");
}

function check6() {
    isItOk6("a", "sp6", "Age");
}
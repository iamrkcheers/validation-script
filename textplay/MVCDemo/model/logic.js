function submit(id, spanid) {
    if (document.getElementById(id).value == "") {
        document.getElementById(spanid).innerHTML = "This field can't be blank !";
        document.getElementById(id).style.borderColor = "red";
    }
}

function isItOk1(id, spanid, name) {
    var minmax = /[a-z]{3,30}/i;
    var pattern = /[^a-z]/i;
    var result = pattern.test(document.getElementById(id).value);
    var result1 = minmax.test(document.getElementById(id).value);
    if (result) {
        document.getElementById(spanid).innerHTML = name + " can take values only between a-z !";
        document.getElementById(id).style.borderColor = "red";
    } else if (!result1) {
        document.getElementById(spanid).innerHTML = name + " has to have a min of 3 and a max of 30 chars !";
        document.getElementById(id).style.borderColor = "red";
    } else {
        document.getElementById(spanid).innerHTML = "";
        document.getElementById(id).style.borderColor = "";
    }
}

function isItOk2(id, spanid, name) {
    var pattern = /[^a-z,0-9]/i;
    var result = pattern.test(document.getElementById(id).value);
    if (result) {
        document.getElementById(spanid).innerHTML = name + " can take only alphanumeric values !";
        document.getElementById(id).style.borderColor = "red";
    } else {
        document.getElementById(spanid).innerHTML = "";
        document.getElementById(id).style.borderColor = ""
    }
}

function isItOk3(id, spanid, name) {
    var pattern = /[@]/i;
    var result = pattern.test(document.getElementById(id).value);
    if (result) {
        document.getElementById(spanid).innerHTML = "";
        document.getElementById(id).style.borderColor = "";
    } else {
        document.getElementById(spanid).innerHTML = name + " needs to have '@' in the id !";
        document.getElementById(id).style.borderColor = "red"
    }
}

function isItOk4(id, spanid, name) {
    var pattern = /^[A-Z]/g;
    var spaces = /\s/g;
    var result = pattern.test(document.getElementById(id).value);
    var result1 = spaces.test(document.getElementById(id).value);
    if (!result) {
        document.getElementById(spanid).innerHTML = name + " needs to have its first letter as capital !";
        document.getElementById(id).style.borderColor = "red";
    } else if (result1) {
        document.getElementById(spanid).innerHTML = name + " cannot have any spaces !";
        document.getElementById(id).style.borderColor = "red";
    } else if (document.getElementById(id).value.length < 8 || document.getElementById(id).value.length > 30) {
        document.getElementById(spanid).innerHTML = name + " needs to have a min of 8 and max of 30 chars !";
        document.getElementById(id).style.borderColor = "red";
    } else {
        document.getElementById(spanid).innerHTML = "";
        document.getElementById(id).style.borderColor = ""
    }
}

function isItOk5(id, pid, spanid, name, pname) {
    if (document.getElementById(id).value != document.getElementById(pid).value) {
        document.getElementById(spanid).innerHTML = name + " must be same as " + pname;
        document.getElementById(id).style.borderColor = "red";
    } else {
        document.getElementById(spanid).innerHTML = "";
        document.getElementById(id).style.borderColor = ""
    }
}

function isItOk6(id, spanid, name) {
    if (document.getElementById(id).value < 18 || document.getElementById(id).value > 45) {
        document.getElementById(spanid).innerHTML = name + " must be in between 18 and 45 ";
        document.getElementById(id).style.borderColor = "red";
    } else {
        document.getElementById(spanid).innerHTML = "";
        document.getElementById(id).style.borderColor = "";
    }
}

var objList={};
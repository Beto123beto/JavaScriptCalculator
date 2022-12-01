let sign1 = "";
let num1, num2;
let res = "";




function addi() {
    res = num1 * 1 + num2 * 1;
    sign1 = "+"
    store()
    console.log("add")
}

function subtr() {
    res = (num1 - num2);
    sign1 = "-"
    store()
    console.log("subtract")
}

function multi() {
    res = num1 * num2;
    sign1 = "*"
    store()
    console.log("multiply")
}

function divi() {
    res = num1 / num2;
    sign1 = "/"
    store()
    console.log("divide")
}

function store() {
    num1 = (document.getElementById("in1").value);
    num2 = (document.getElementById("in2").value);
    console.log("store")
    if (res != '') {
        document.getElementById("expre").innerHTML = num1 + " " + sign1 + " " + num2 + "= ";
        document.getElementById("result").innerHTML = res;
    } else {
        document.getElementById("result").innerHTML = "";
    }
}
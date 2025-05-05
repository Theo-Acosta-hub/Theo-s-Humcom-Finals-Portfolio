function Summation() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    var content = "Result: " + sum;
    document.getElementById("result").innerHTML = "Result:" + sum;
}
function Difference() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var diff = num1 - num2;
    var content = "Result: " + diff;
    document.getElementById("result").innerHTML = "Result: " + diff;
}
function Multiplication() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var mult = num1 * num2;
    var content = "Result: " + mult;
    document.getElementById("result").innerHTML ="Result: " + mult;
}
function Division() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var divide = num1 / num2;
    var content = "Result: " + divide;
    document.getElementById("result").innerHTML ="Result: " + divide;
}
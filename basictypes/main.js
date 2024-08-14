var button = document.querySelector("button");
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var p = document.getElementById("sum");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
    p.innerHTML = "Sum: ";
    p.innerHTML = p.innerHTML + add(+input1.value, +input2.value).toString();
});

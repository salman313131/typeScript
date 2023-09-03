var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var button = document.getElementById('add');
function add(num1, num2) {
    console.log(num1 + num2);
}
button.addEventListener('click', function () {
    var num1 = number1.value;
    var num2 = number2.value;
    add(+num1, +num2);
});

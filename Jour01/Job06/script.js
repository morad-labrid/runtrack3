window.onload = function fizzbuzz() {

    var text = "";
    var i;
    for (i = 1; i <= 151; i++) {
        if (i % 5 == 0 & i % 3 == 0) {
            text += i + "FizzBuzz<br>";

        } else if (i % 3 == 0) {
            text += i + "Fizz<br>";

        } else if (i % 5 == 0) {
            text += i + "Buzz<br>";

        } else text += i + "<br>";
    }
    document.getElementById('demo').innerHTML = text;
}
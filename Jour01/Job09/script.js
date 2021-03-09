function tri() {
    var numbers = [140000, 104, 99, 2004, 01, 16];

    numbers.sort(function(a, b) {
        return b - a;
    });

    console.log(numbers);
}
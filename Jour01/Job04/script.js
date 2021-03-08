// function bisexile($year) {
//     alert('salam');
//     if (($year % 400) == 0 || ($year % 400) == 0) {
//         console.log('is bisexile')
//     } else console.log('is not bisexile')
// }

function myBisexile() {

    var year = document.getElementById("year").value;
    if ((year % 400) == 0 || (year % 4) == 0 & (year % 100) > 0) {
        alert(year + ' is bisexile');
    } else alert(year + ' is not bisexile');
}
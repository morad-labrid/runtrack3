const plus = document.getElementById('plus')
const moins = document.getElementById('moins');
let number = document.getElementById('number');


plus.addEventListener('click', addone);
moins.addEventListener('click', takeone);

function addone() {
    number.innerHTML++;
}

function takeone() {
    number.innerHTML--;
}
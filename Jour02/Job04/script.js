var keylogger = document.getElementById('keylogger');

window.addEventListener('keypress', function(event) {
    var key = event.key;
    keylogger.value += key;
})
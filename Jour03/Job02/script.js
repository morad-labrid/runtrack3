$('button').click(function() {

    var parent = $("#melangees");
    var divs = parent.children();


    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1));
    }
});

$(document).ready(function() {
    $("#melangees").click(function(event) {
        var img = "#" + event.target.id;
        $("#rangees").append(document.querySelector(img));

    });
    $("#rangees").click(function(event) {
        var img = "#" + event.target.id;
        $("#melangees").prepend(document.querySelector(img));
    });
});
$(document).ready(function() {
    $('#buttonS').click(function() {
        $("#div p").text("“le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément. ”")
            .show(1000)
    });

    $('#buttonH').click(function() {
        $("#div p").hide(1000)
    });

})
$("#button").click(function() {
    $.ajax({
        url: 'expression.txt',
        type: 'GET',
        dataType: 'text',
    })

    .done(function(msg) {
        var text = "<p>" + msg + "</p>";
        $("body").append(text);
    })
})
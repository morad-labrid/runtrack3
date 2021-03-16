$("#button").click(function() {
    $("#demo").empty();
    var id = $("#id").val();
    $.ajax({
        url: 'users.php',
        type: "POST",
        data: "name=1&id=" + id,
        success: function(data) {
            console.log(data);
            var table = "<tr><th>id</th><th>Nom</th><th>Prénom</th><th>Email</th><th>Password</th></tr>";
            $("#demo").append(table);
            data = JSON.parse(data);
            data.forEach(user => {
                var users = "<tr><td>" + user.id + "</td><td>" + user.nom + "</td><td>" + user.prenom + "</td><td>" + user.email + "</td><td>" + user.password + "</td></tr>";
                $("#demo").append(users);
            });
        }
    });
})
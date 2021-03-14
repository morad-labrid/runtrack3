$("#button").click(function() {
    $("#demo").empty();

    $.ajax({
        url: 'users.php',
        type: "POST",
        data: "name=true&id=2",
        success: function(data) {
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
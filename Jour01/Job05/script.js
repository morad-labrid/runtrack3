window.onload = function afficherjourssemaines() {

    var jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Samedi", "Dimanche"];
    var text = "";
    var i;
    for (i = 0; i < jourssemaines.length; i++) {
        text += "<tr><td>" + jourssemaines[i] + "</td></tr>";
    }
    document.getElementById('demo').innerHTML = text;
}
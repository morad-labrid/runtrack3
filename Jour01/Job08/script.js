function sommesNombresPremier() {

    var nb1 = document.getElementById("nb1").value;
    var nb2 = document.getElementById("nb2").value;
    let nbPremier1 = true;
    let nbPremier2 = true;

    if (nb1 === 1 || nb2 === 1) {
        alert("Le chiffre 1 n'est pas pris en compte veuillez saisir un autre chiffre");
    } else if (nb1 > 1 && nb2 > 1) {
        // Je crée ma boucle \\
        for (let i = 2; i < nb1; i++) {
            //Je met ma condition modulo qui va determiné si mon chiffre est 1er ou pas\\
            if (nb1 % i == 0) {
                nbPremier1 = false;
                alert("Le 1er chiffre entrée n'est pas entier");
                break;
            }

        }
        for (let i = 2; i < nb2; i++) {
            //Je met ma condition modulo qui va determiné si mon chiffre est 1er ou pas\\
            if (nb2 % i == 0) {
                nbPremier2 = false;
                alert("Le 2nd chiffre entrée n'est pas entier");
                break;

            }

        }
    }
    if (nbPremier1 && nbPremier2) {
        alert("Voici la somme :" + " " + (Number(nb1) + Number(nb2)));

    }

}
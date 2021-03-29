/* ============ DEBUT du Function pour le curseur  ============ */

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener('mousemove', function(e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
})

/* ============ FIN du Function pour le curseur  ============ */



/* ============ DEBUT du Function pour changer la couleur des elements ============ */

$("#submit").click(function changeColor() {
    var input = document.querySelector("#input").value;
    $(".color").css("color", input);
    $(".colorButton").css("background-color", input);
    $(".colorButton").css("border", "2px solid " + input);
})

$(".colorButton").mouseover(function() {
    $(this).css("background", "none");
})

$(".colorButton").mouseout(function() {
    var input = document.querySelector("#input").value;
    $(".colorButton").css("background-color", input);
})

/* ============ FIN du Function pour changer la couleur des elements ============ */



/* ============ DEBUT du Function pour scroller les images en flottent le curseur ============ */

$(document).ready(function() {
    $(".img").hover(function() {
        $(this).css("background-position", "center bottom");
    }, function() {
        $(this).css("background-position", "center top");
    });
});

/* ============ FIN du Function pour scroller les images en flottent le curseur ============ */



/* ============ DEBUT du Function pour afficher le background du header  ============ */

window.addEventListener('scroll', function() {
    if (window.scrollY > 180) {
        $('header').css("background-color", "white");
        $('header').css("box-shadow", "0px 2px 10px #0000005b")
    } else {
        $('header').css("background", "none");
        $('header').css("box-shadow", "none");
    }
})

/* ============ FIN du Function pour afficher le background du header ============ */



/* ============ DEBUT du Function pour Scroller vers les section doucement ============ */
$("#btnHome").click(function() {
    document.querySelector("#home").scrollIntoView({
        behavior: 'smooth'
    })
})
$("#btnPortfolio").click(function() {
    document.querySelector("#portfolio").scrollIntoView({
        behavior: 'smooth'
    })
})
$("#btnAbout").click(function() {
    document.querySelector("#about").scrollIntoView({
        behavior: 'smooth'
    })
})

$("#btnContact").click(function() {
    document.querySelector("#contact").scrollIntoView({
        behavior: 'smooth'
    })
})

/* ============ FIN du Function pour Scroller vers les section doucement ============ */

$(document).ready(function() {
    $("a").hover(function() {
        document.querySelector(".cursor").setAttribute("id", "cursor");
        document.querySelector(".cursor2").setAttribute("id", "cursor2");
    }, function() {
        document.querySelector(".cursor").removeAttribute("id", "cursor");
        document.querySelector(".cursor2").removeAttribute("id", "cursor2");
    });
    $("button").hover(function() {
        document.querySelector(".cursor").setAttribute("id", "cursor");
        document.querySelector(".cursor2").setAttribute("id", "cursor2");
    }, function() {
        document.querySelector(".cursor").removeAttribute("id", "cursor");
        document.querySelector(".cursor2").removeAttribute("id", "cursor2");
    });
    $("input").hover(function() {
        document.querySelector(".cursor").setAttribute("id", "cursor");
        document.querySelector(".cursor2").setAttribute("id", "cursor02");
    }, function() {
        document.querySelector(".cursor").removeAttribute("id", "cursor");
        document.querySelector(".cursor2").removeAttribute("id", "cursor02");
    });
    $("textarea").hover(function() {
        document.querySelector(".cursor").setAttribute("id", "cursor");
        document.querySelector(".cursor2").setAttribute("id", "cursor02");
    }, function() {
        document.querySelector(".cursor").removeAttribute("id", "cursor");
        document.querySelector(".cursor2").removeAttribute("id", "cursor02");
    });
    $("footer").hover(function() {
        document.querySelector(".cursor").setAttribute("id", "cursorF");
        document.querySelector(".cursor2").setAttribute("id", "cursor2F");
    }, function() {
        document.querySelector(".cursor").removeAttribute("id", "cursorF");
        document.querySelector(".cursor2").removeAttribute("id", "cursor2F");
    });
});



VanillaTilt.init(document.querySelector(".name"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".name"));


// ::::::::::=========


const closeMenu = document.getElementById('close');
const openMenu = document.getElementById('menu');
const btnHome = document.getElementById('btnHome');
const btnAbout = document.getElementById('btnAbout');
const btnPortfolio = document.getElementById('btnPortfolio');
const btnContact = document.getElementById('btnContact');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
btnHome.addEventListener('click', close);
btnAbout.addEventListener('click', close);
btnPortfolio.addEventListener('click', close);
btnContact.addEventListener('click', close);

function show() {
    document.querySelector('nav').style.top = '0';
    document.querySelector('nav').style.background = 'black';
    document.querySelector(".cursor").setAttribute("id", "cursorF");
    document.querySelector(".cursor2").setAttribute("id", "cursor2F");
}

function close() {
    document.querySelector('nav').style.background = '#00000000';
    document.querySelector('nav').style.top = '-100%';
}
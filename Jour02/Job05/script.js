const body = document.querySelector('body');
const footer = document.querySelector('footer');
window.addEventListener('scroll', color);

function color() {
    let scroll = window.scrollY / (body.clientHeight - window.innerHeight);
    let scrollpercent = Math.round(scroll * 100);
    footer.style.background = "rgb(240, " + (scrollpercent * 2) + ", 100)";
}
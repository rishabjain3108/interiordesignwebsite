document.getElementById("right").style.display = "none";
var a;

function main() {
    if (a == 1) {

        document.getElementById("right").style.display = "block";
        document.getElementById("left").style.display = "none";
        document.getElementById("hp").style.display = "block";
        return a = 0;
    } else {
        document.getElementById("right").style.display = "none";
        document.getElementById("left").style.display = "block";
        document.getElementById("hp").style.display = "none";
        return a = 1;
    }
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
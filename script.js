const leftArrow = document.querySelector(".fa-angle-left");
const rightArrow = document.querySelector(".fa-angle-right");
const slider = document.querySelector(".carousel-slider");
var cardIndex;
var slidenum;

rightArrow.addEventListener("click", function() {
    cardIndex = document.querySelector('input[name="slide"]:checked').value;
    if (cardIndex < 3) {
        cardIndex++;
    } else {
        cardIndex = 1;
    }
    slidenum = "slide" + cardIndex;
    document.getElementById(slidenum).checked = true;
});

leftArrow.addEventListener("click", function() {
    cardIndex = document.querySelector('input[name="slide"]:checked').value;
    if (cardIndex > 1) {
        cardIndex = cardIndex - 1;
    } else {
        cardIndex = 3;
    }
    slidenum = "slide" + cardIndex;
    document.getElementById(slidenum).checked = true;
});
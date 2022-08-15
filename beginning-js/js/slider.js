const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;


window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});


next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -width + "px)";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});

prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
});

/* const slidesCard   = document.querySelectorAll(".card")
const prevBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");
let counter = 0; 

slidesCard.forEach(function(card, index){
    card.style.left = `${index * 25}%`;
}); 

nextBtn.addEventListener("click", function () {
    counter++;
    slides()
});

prevBtn.addEventListener("click", function () {
    counter--;
    slides()
});

function slides() {
    if (counter < slidesCard.length - 1 ) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0 ) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    } 
    slidesCard.forEach(function(card){
        card.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none"  */

/* slidesCard.forEach(function(card, index){
    if (window.innerWidth > 1050) {
        card.style.left = `${index * 25}%`;
        console.log("25")
    } 
    if (window.innerWidth < 1050) {
        card.style.left = `${index * 97.8}%`;
        console.log("100")
    } 
}) 


slidesCard.forEach(function(card, index){
    window.addEventListener("reset", function() {
        if (window.innerWidth > 1050) {
            card.style.left = `${index * 25}%`;
        } 
        if (window.innerWidth < 1050) {
            card.style.left = `${index * 97.8}%`;
        } 
    });
});  */
let slideIndex = 1;

let showSlides = (n) => {
    // debugger
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += "active";

}

showSlides(1);

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let dot = document.getElementsByClassName('dot');


var plusSlides = (n) => {
    // debugger
    showSlides(slideIndex = slideIndex + n);
}

var currentSlide = (n) => {
    // debugger
    showSlides(slideIndex = n);
}

prev.addEventListener('click', () => plusSlides(-1))
next.addEventListener('click', () => plusSlides(1))

dot[0].addEventListener('click', () => currentSlide(1))
dot[1].addEventListener('click', () => currentSlide(2))
dot[2].addEventListener('click', () => currentSlide(3))


// let slides = document.getElementsByClassName('mySlides');

// console.log(slides[0].style);
//бургер
function navSlide() {
    var burger = document.querySelector('.burger__menu');
    var nav = document.querySelector('.nav__links');
    var navLinks = document.querySelectorAll('.nav__links li');
    var title = document.querySelector('.first__page h1');

    burger.addEventListener('click', function(){
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav__active');
        title.classList.toggle('firstPageTitle');
    });
    //animate links
    navLinks.forEach(function(link, index){
        link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 1) + 's';
    });
}
navSlide();
//слайдер
function slider() {
    var prev = document.querySelector('.back #back');
    var next = document.querySelector('.next #next');
    var images = document.querySelectorAll('.slider__img img');
    var current = 0;
    console.log(prev);
    console.log(next);
    console.log(images);
   
}
slider();
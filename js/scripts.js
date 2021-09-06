$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [" ", " "],

        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

$(document).ready(function () {
    //sticky navbar
    window.onscroll = () => {
        var header = document.querySelector('header');

        if (window.pageYOffset > 0) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky");
        }
    }
    //scroll with appearing items
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
        }
    }
});
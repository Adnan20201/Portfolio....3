/*------------------------------------------------
Trydo Html5 Creative Ahency Template
All Main Js Here  

Index All JS 
-----------------------
        01. Wow Active
        02. Counter Up
        05. Slick Activation            
        06. Paralax Window
        07. LightBox
        08. Parallax Activation
        09. Masonry Activation
        10. ScrollUp Activation
        11. Mobile Menu Activation
        12. Smoth Scroll
--------------------------------------------------*/
$(function () {
    'use strict';

    $('.slider-portfolio').slick({
        prevArrow:'<i class="fas fa-chevron-left banner-arrow1 left "></i>',
        nextArrow:'<i class="fas fa-chevron-right banner-arrow1 right"></i>',
        slidesToShow:3,
        slidesToScroll: 1, 
        autoplay:true,
        autoplaySpeed:500,
        arrows: false,
        dots: true,
        cssEase:'linear',
    });

    //Counter Js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

   //Filterzir js
    $(".gallery-filter-container").filterizr();

    //Slider
    $('. blog-slider').slick({
        prevArrow:'<i class="fas fa-chevron-left banner-arrow1 left "></i>',
        nextArrow:'<i class="fas fa-chevron-right banner-arrow1 right"></i>',
        slidesToShow:2,
        slidesToScroll: 1, 
        autoplay:true,
        autoplaySpeed:500,
        arrows: true,
        fade:true,
        dots: true,
        cssEase:'linear',
    });


    $('.blog-slider').slick({
        
      });
    
})

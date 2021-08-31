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

    $('.portfolio-slider').slick({
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
    $('.blog-slider').slick({
        prevArrow:'<i class="fas fa-chevron-left banner-arrow1 left "></i>',
        nextArrow:'<i class="fas fa-chevron-right banner-arrow1 right"></i>',
        slidesToShow:3,
        slidesToScroll: 1, 
        autoplaySpeed:500,
        arrows: false,
        dots: true,
        cssEase:'linear',
    });

    //BackToTop
    $(window).on('scroll',function (){
        var winScroll = $(this).scrollTop();
        if(winScroll > 300){
            $('#backToTop').fadeIn(1000)
        } else{
            $('#backToTop').fadeOut(1000)
        }
    });
    
    $('#backToTop').on('click',function (){
        $('html,body').animate({
            scrollTop:0
        },500);
    })





})

"use strict";

$(document).ready(function () {
  // $('body').autoPadding({
  //     source: $('.js-header'),
  // });
  //removeIf(production)
  console.log("document ready"); //endRemoveIf(production)
  // Main menu sticky

  var nav_distance = 0;
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > nav_distance) {
      // $('.site-header').css({'padding-top': 0});
      // $('.site-header').addClass('sticky');
      $('.site-header').removeClass('initial');
      $('.site-header').addClass('bg-grad'); // $('body').css({'padding-top': 155});
    } else {
      $('.site-header').addClass('initial');
      $('.site-header').removeClass('bg-grad'); // $('body').css({'padding-top':0});
    }
  }); // Search Form Open/Close

  $('#searchOpen').on('click', function () {
    $('.search-form').addClass('open');
  });
  $('#searchClose').on('click', function () {
    $('.search-form').removeClass('open');
  }); // client-testimonials slider

  $('.client-testimonials').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: false,
    // prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    // nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
    responsive: [{
      breakpoint: 1500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
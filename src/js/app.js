import "../scss/app.scss";

/* Your JS Code goes here */

/* MDB ui */
import * as mdb from "mdb-ui-kit"; // libimport lightGallery from 'lightgallery';

/* Demo JS */
import "./demo.js";
import $ from "jquery";

import "slick-carousel";

import anime from "animejs/lib/anime.es.js";
// fancybox
// import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

$(window).on("load", function () {
  anime({
    targets: [".hexagon polygon", "feTurbulence", "feDisplacementMap"],
    points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: "alternate",
    fill: "#086ad8",
    easing: "easeInOutExpo",
  });
  $(".loader-wrapper").addClass('hidden');
  setTimeout(function(){
   $('.loader-wrapper').hide();
  },3000);
 
  // anime({
  //   targets: '.square',
  //   translateY: 250,
  //   translateX: -250,
  //   direction: 'alternate',
  //   loop: true,
  //   duration: 2000,
  //   easing: function(el, i, total) {
  //     return function(t) {
  //       return Math.pow(Math.sin(t * (i + 1)), total);
  //     }
  //   }
  // });
});

/* Slick JS start*/
$(document).ready(function () {
  $(".multiple-items").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".cards-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
/* Slick JS end*/

// Sidebar toolbar

document.getElementById("popupLink").onclick = function () {
  var popup = document.getElementById("toolbarPopup");

  //Funkcija contains grazina reiksme true arba false
  if (popup.classList.contains("open") == false) {
    popup.classList.add("open");
  } else {
    popup.classList.remove("open");
  }
};

// JQuery onclick animation / was mouseover mouseout

$(document).ready(function () {
  $(".btn-main").on("click", function () {
    $(this).animate({ top: -10 }, 500);
    return false;
  });
  // .mouseout(function() {
  //    $(this).animate({ top: 0}, 500 );
  // });

  // Cookies working popup code
  $("#sutinku").on("click", function () {
    $(this).parent().slideUp(500);
  });
});
// scroll top function from mitech demo
// function scrollToTop() {
//   var $scrollUp = $('#scroll-top'),
//       $lastScrollTop = 0,
//       $window = $(window);

//   $window.on('scroll', function () {
//       var st = $(this).scrollTop();
//       if (st > $lastScrollTop) {
//           $scrollUp.removeClass('show');
//       } else {
//           if ($window.scrollTop() > 500) {
//               $scrollUp.addClass('show');
//           } else {
//               $scrollUp.removeClass('show');
//           }
//       }
//       $lastScrollTop = st;
//   });

//   $scrollUp.on('click', function (evt) {
//       $('html, body').animate({scrollTop: 0}, 600);
//       evt.preventDefault();
//   });
// }
// scrollToTop();

// Scroll top jquery (something is wrong here)

$('#scroll-top').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop:0},600)
});
$(window).on('scroll', function(){
  let top = $(document).scrollTop();
  let pageHeight = $(document).height();
  let windowHeight = $(window).height();
  let sumHeight = top + windowHeight;

  if(sumHeight == pageHeight) {
    $('.scroll-top').addClass('show');
  }
  if(top + windowHeight < pageHeight - 800) {
    $('.scroll-top').removeClass('show');
  }
});
// counter 
$({ Counter: 0 }).animate({
  Counter: $('.Single').text()
}, {
  duration: 1000,
  easing: 'swing',
  delay: 50,
  step: function() {
    $('.Single').text(Math.ceil(this.Counter));
  }
});
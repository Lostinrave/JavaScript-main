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
  $(".loader-wrapper").delay(2000).fadeOut(800);
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

(function($){
  $(function(){

    $('.sidenav').sidenav({
      edge: 'right',
      draggable: true,
    });
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Slider
$(document).ready(function(){
  $('.slider').slider({
    indicators: false,
    height:$(window).height(),
  });
});


// Navbar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});


// Parallax
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});


// Counter Increament on scroll to section
$(function () {
  function isScrolledIntoView($elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function count($this) {
      var current = parseInt($this.html(), 10);
      if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
          $this.html(++current);
          $this.data("isCounting", true);
          setTimeout(function () {
              $this.data("isCounting", false);
              count($this);
          }, 50);
      }
  }

  $(".counter-inc").each(function () {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      $(this).data("isCounting", false);
  });

  function startCount() {
      $(".counter-inc").each(function () {
          count($(this));
      });
  };

  $(window).scroll(function () {
      startCount();
  });

  startCount();
});



// OWL Carousel
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    
    rtl:true,
    loop:true,
    margin:25,
    dots:true,
    nav:false,

    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});



// Navbar size change on scroll
// When the user scrolls down 100px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.padding = "1rem 2rem";
    document.getElementById("navbar").style.backgroundImage = "linear-gradient(0deg, #eee, #fff)";
    document.getElementById("navbar").style.boxShadow = "#bbb 0rem 0rem 0.5rem";
    document.getElementById("logo").style.height = "4rem";
  } else {
    document.getElementById("navbar").style.padding = "2rem 2rem";
    document.getElementById("navbar").style.backgroundImage = "none";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("logo").style.height = "8rem";
  }
} 



// facts slider initialization
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
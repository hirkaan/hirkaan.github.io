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

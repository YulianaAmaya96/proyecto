(function($){
  $(function(){
     $(".button-collapse").sideNav();
    $('.parallax').parallax();
  });
})(jQuery);

$(document).ready(function(){
  $('.slider').slider();
});

$('.slider').slider('pause');
$('.slider').slider('start');
$('.slider').slider('next');
$('.slider').slider('prev');

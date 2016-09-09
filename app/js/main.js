var hello = require('./modules/firstModule.js');

$(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  })
});
var tabs = require('./modules/tabs.js');
var triggers = require('./modules/triggers.js');
var map = require('./modules/map.js');
require('./modules/select.js')();

$(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade'
  });

  var mySwiperManager = new Swiper ('.swiper-container-manager', {
    slidesPerView: 4,
    width: 1200,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10
  });

  ymaps.ready(init);
   var myMap;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [45.068512, 39.033317],
      zoom: 15,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    });
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        // hintContent: 'Anderson mark',
        // balloonContent: 'Это красивая метка'
      }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [102, 80],
        iconImageOffset: [-34, -80]
      });
    myMap.geoObjects.add(myPlacemark);
  }


  triggers.callForm();
  tabs.init();

});
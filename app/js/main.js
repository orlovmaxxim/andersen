var hello = require('./modules/firstModule.js');
var triggers = require('./modules/triggers.js');
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
        iconImageSize: [95, 80],
        iconImageOffset: [0, 0]
      });
    myMap.geoObjects.add(myPlacemark);
  }

  triggers.callForm();

});
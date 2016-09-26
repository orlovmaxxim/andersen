var tabs = require('./modules/tabs.js');
var triggers = require('./modules/triggers.js');
var map = require('./modules/map.js');
var request = require('./modules/requests.js');
var questionManagerForm = require('./modules/questionManagerForm.js');
var consult = require('./modules/managerConsult.js');
var addition = require('./modules/additionForm.js');
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
    loop: true,
    width: 1200,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10
  });


  // slick slider


  $('.slick-container-manager').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // yandex map

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



  // isotope - test

//   var $grid = $('.grid').isotope({
//     itemSelector: '.element-item',
//     layoutMode: 'fitRows',
//     getSortData: {
//       name: '.name',
//       symbol: '.symbol',
//       number: '.number parseInt',
//       category: '[data-category]',
//       weight: function( itemElem ) {
//         var weight = $( itemElem ).find('.weight').text();
//         return parseFloat( weight.replace( /[\(\)]/g, '') );
//       }
//     }
//   });
//
//   // filter functions
//   var filterFns = {
//     // show if number is greater than 50
//     numberGreaterThan50: function() {
//       var number = $(this).find('.number').text();
//       return parseInt( number, 10 ) > 50;
//     },
//     // show if name ends with -ium
//     ium: function() {
//       var name = $(this).find('.name').text();
//       return name.match( /ium$/ );
//     }
//   };
//
// // bind filter button click
//   $('#filters').on( 'click', 'button', function() {
//     var filterValue = $( this ).attr('data-filter');
//     // use filterFn if matches value
//     filterValue = filterFns[ filterValue ] || filterValue;
//     $grid.isotope({ filter: filterValue });
//   });

    var $grid = $('.planing-view__list').isotope({
    itemSelector: '.planing-view__item',
    layoutMode: 'masonry',
      masonry: {
        // columnWidth: 110,
        gutter: 30
      },
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });


  var $container = $('.planing-view__list');
  // filter buttons
  $('.planing-block__btn').click(function(e){
    e.preventDefault();
    var $this = $(this);
    // don't proceed if already selected
    if ( !$this.hasClass('is-checked') ) {
      $this.parents('#options').find('.is-checked').removeClass('is-checked');
      $this.addClass('is-checked');
    }
    var selector = $this.attr('data-filter');
    $container.isotope({  itemSelector: '.planing-view__item', filter: selector });
    return false;
  });

  request.callForm();
  request.everymonthPay();
  request.additionSend();
  request.consultCall();
  request.questionSend();

  // questions form

  questionManagerForm.showForm();

  // consult form
  consult.showConsultForm();

  // addition form

  addition.showForm();
});
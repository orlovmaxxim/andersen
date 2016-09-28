var tabs = require('./modules/tabs.js');
var triggers = require('./modules/triggers.js');
var map = require('./modules/map.js');
var request = require('./modules/requests.js');
var questionManagerForm = require('./modules/questionManagerForm.js');
var consult = require('./modules/managerConsult.js');
var addition = require('./modules/additionForm.js');
var plan = require('./modules/planningForm.js');
require('./modules/select.js')();

$(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade',
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazyLoading: true
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
    dots: false,
    infinite: true,
    arrows: true,
    nextArrow: '<button id="slick-n" type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;">Next</button>',
    prevArrow: '<button id="slick-p" type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;">Previous</button>',
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
          dots: false
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
    ]
  });


  // yandex map

  ymaps.ready(init);
   var myMap;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [45.068512, 39.033317],
      zoom: 15,
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    });
      myMap.behaviors.disable(['scrollZoom']);
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


  // triggers.callForm();
  triggers.showCallForm();
  triggers.burgerMenu();
  tabs.init();



  // isotope - test
  $('.grid').isotope({
    itemSelector: '.wp-project',
    layoutMode: 'fitRows',
    hiddenStyle: {
      opacity: 0
      /* , transform: 'scale(0.001)' -- disabled scaling */
    },
    visibleStyle: {
      opacity: 1
      /* , transform: 'scale(1)' -- disabled scaling */
    },
    transitionDuration: '0s'
  });

  $('#all').click(function(){
    $('.grid').isotope({ filter: '*' });
  });

  $('#one').click(function(){
    $('.grid').isotope({ filter: '.one' });
  });

  $('#two').click(function(){
    $('.grid').isotope({ filter: '.two' });
  });

  $('#three').click(function(){
    $('.grid').isotope({ filter: '.three' });
  });

  $('#four').click(function(){
    $('.grid').isotope({ filter: '.four' });
  });

  $('#penthaus').click(function(){
    $('.grid').isotope({ filter: '.penthaus' });
  });


    // var $grid = $('.planing-view__list').isotope({
    // itemSelector: '.planing-view__item',
    // layoutMode: 'fitRows',


    // layoutMode: 'masonry',
      // masonry: {
      //   // columnWidth: 16,
      //   gutter: 8
      // },


  //     fitRows: {
  //       gutter: 10
  //     },
  //   getSortData: {
  //     name: '.name',
  //     symbol: '.symbol',
  //     number: '.number parseInt',
  //     category: '[data-category]',
  //     weight: function( itemElem ) {
  //       var weight = $( itemElem ).find('.weight').text();
  //       return parseFloat( weight.replace( /[\(\)]/g, '') );
  //     }
  //   }
  // });


  // var $container = $('.planing-view__list');
  // // filter buttons
  // $('.planing-block__btn').click(function(e){
  //   e.preventDefault();
  //   var $this = $(this);
  //   // don't proceed if already selected
  //   if ( !$this.hasClass('is-checked') ) {
  //     $this.parents('#options').find('.is-checked').removeClass('is-checked');
  //     $this.addClass('is-checked');
  //   }
  //   var selector = $this.attr('data-filter');
  //   $container.isotope({  itemSelector: '.planing-view__item', filter: selector });
  //   return false;
  // });

  // end isotope

  // requests

  request.callForm();
  request.tabSend();
  request.additionSend();
  request.consultCall();
  request.questionSend();

  // questions form

  questionManagerForm.showForm();

  // consult form
  consult.showConsultForm();

  // addition form

  addition.showForm();

  //planning form

  plan.showPlanningForm();

});
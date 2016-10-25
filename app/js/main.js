var tabs = require('./modules/tabs.js');
var triggers = require('./modules/triggers.js');
var map = require('./modules/map.js');
var request = require('./modules/requests.js');
var questionManagerForm = require('./modules/questionManagerForm.js');
var consult = require('./modules/managerConsult.js');
var addition = require('./modules/additionForm.js');
var plan = require('./modules/planningForm.js');
var freeForm = require('./modules/freeForm.js');
var houseModule = require('./modules/houseModule.js');

require('./modules/select.js')();

$(window).resize(function(){
  var burger = $('.header__burg');
  if(burger.hasClass('menu-on')) {
    burger.toggleClass('menu-on');
    $('.mobile-navigation').fadeOut();
  }
});

$(document).ready(function(){

  window.setTimeout(function () {
    var popupBlock = $('#offer-form');
    //$('.call__btn').on('click touchstart', function(e){
    //e.preventDefault();


    var form = popupBlock.find('.callform');

    popupBlock.bPopup({
      fadeSpeed: 'slow',
      followSpeed: 1000,
      modalColor: '#818e9b',
      transition: 'slideIn',
      transitionClose: 'slideBack',
      escClose: true,
      onClose: function () {
        form.find('.response-alert').hide();
        form.trigger('reset');
        form.find('.suc-alert').css('display', 'none');
        form.find('.error-alert').css('display', 'none');
      }
    });

    popupBlock.find('.popup-header__close').on('click touchstart', function(){
      popupBlock.close();
    });
  }, 3000);





// hide all standard checkbox
  [].forEach.call( document.querySelectorAll('.checkbox'), function(element) {
    element.style.display = 'none';
  });
  freeForm.checkView();

  // range-slider

  var floors = ["1", "2", "3", "4", "5",
    "6", "7", "8", "9", "10"];

  $("#pips-slider")

    .slider({
      min: 1,
      max: 10,
      step: 1
    })

    .slider("pips", {
      first: "label",
      last: "label",
      rest: "label",
      step: 1,
      labels: floors,
      prefix: "",
      suffix: ""
    })

    .slider("float", {
      handle: true,
      pips: false,
      labels: false,
      prefix: "",
      suffix: ""
    })
    .on("slidechange", function( e, ui ) {

      var picBlocks = [ ".block-plan-pic-one", ".block-plan-pic-typing", ".block-plan-pic-typing", ".block-plan-pic-typing",
        ".block-plan-pic-typing", ".block-plan-pic-typing", ".block-plan-pic-typing", ".block-plan-pic-typing", ".block-plan-pic-nine", ".block-plan-pic-ten"];
      var numberOfPic = ui.value;
      var blockPic = $('.com .block-plan-pic');
      var thisPicBlock = picBlocks[numberOfPic-1];
      $(thisPicBlock).show();
      $(thisPicBlock).siblings(blockPic).hide();

      houseModule.showTT();
    });


  // end range-slider

  houseModule.showRangeSlider();
  // if(houseModule.showRangeSlider()) {
  //   houseModule.showTT();
  // }

  // houseModule.showTT();
  // if($('.range-slider').css('display') == 'block') {
  //   console.log('wow');
  //   houseModule.showTT();
  // }

// kostylek
  $('.house-tooltip').on('click touchstart', function(e){
    houseModule.showTT();
  });


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

  triggers.showMorePlan();



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
    // $( ".planing-view__item.disp.one:nth-child(n+4)" ).css("display", "none");
    $('.grid').isotope({ filter: '*' });
    $('.wp-project-wrapper').css('height', 1202);
    $('.moreBtn').show();

  });

  $('#one').click(function(){
    $('.grid').isotope({ filter: '.one' });
    $('.wp-project-wrapper').css('height', 1202);
    $('.moreBtn').show();

    // $('.planing-view__item').each(function(indx, elem) {
    //   if($(this).css('display') !== 'none') {
    //     $(this).addClass('disp');
    //   } else {
    //     $(this).css('display','none');
    //     $(this).removeClass('disp');
    //   }
    // });
  });

  $('#two').click(function(){
    $('.grid').isotope({ filter: '.two' });
    if(window.screen.width < 701) {
      $('.wp-project-wrapper').css('height', 2802);
    } else {
      $('.wp-project-wrapper').css('height', 1202);
    }
    $('.moreBtn').hide();
  });

  $('#three').click(function(){

    $('.grid').isotope({ filter: '.three' });
    $('.wp-project-wrapper').css('height', 1202);
    $('.moreBtn').show();

  });

  $('#four').click(function(){
    $('.grid').isotope({ filter: '.four' });
    if(window.screen.width < 701) {
      $('.wp-project-wrapper').css('height', 1202);
    } else {
      $('.wp-project-wrapper').css('height', 402);
    }
    $('.moreBtn').hide();
  });

  $('#penthaus').click(function(){
    $('.grid').isotope({ filter: '.penthaus' });
    $('.wp-project-wrapper').css('height', 1202);
    $('.moreBtn').show();
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


  // delete error border of validation

  $('form').on('keydown', '.light-error', function(){
    $(this).removeClass('light-error');
    $(this).next('span').text(' ');
  });

  // requests
  
  request.callForm();
  request.tabSend();
  request.additionSend();
  request.consultCall();
  request.questionSend();
  request.planSend();
  request.freeformSend();

  // questions form

  questionManagerForm.showForm();

  // consult form
  consult.showConsultForm();

  // addition form

  addition.showForm();

  //planning form
  plan.showPlanningForm();



  // functions is mobile
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  if (isMobile.any()) {
    // document.addEventListener('touchstart', handler, true);
  }
  plan.activeBtn();




});
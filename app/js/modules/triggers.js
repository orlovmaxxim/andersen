module.exports = {
  callForm: function() {

    var callform = $('.callform');

    $('.call__btn').on('click touchstart', function(e){
      e.preventDefault();
      var $this = $(this);

      if(!callform.hasClass('active')) {
        //callform.show().addClass('active');
        callform.fadeIn(function(){
          $(this).addClass('active');
        });
      } else {
        callform.fadeOut(function(){
          $(this).removeClass('active');
        });
      }
    });



    $(document).on('click touchstart', function(e){
      var target = $(e.target),
        notPlank = !target.closest('.callform').length,
        notBtn = !target.hasClass('callform__btn');
      if(callform.hasClass('active') && notPlank && notBtn) {
        callform.fadeOut(function(){
          callform.removeClass('active');
        });
      }
    });

  },

  showCallForm: function() {
    var popupBlock = $('#call-form');
    $('.call__btn').on('click touchstart', function(e){
      e.preventDefault();


      var form = popupBlock.find('.callform');

      popupBlock.bPopup({
        // fadeSpeed: 'slow',
        // followSpeed: 1000,
        modalColor: '#818e9b',
        // transition: 'slideIn',
        // transitionClose: 'slideBack',
        escClose: true,
        onClose: function () {
          // form.find('.response-alert').hide();
          form.trigger('reset');
          form.find('.suc-alert').css('display', 'none');
          form.find('.error-alert').css('display', 'none');
        }
      });

    });

    $('.mobile-call').on('click touchstart', function(e){
      e.preventDefault();


      var form = popupBlock.find('.callform');

      popupBlock.bPopup({
        // fadeSpeed: 'slow',
        // followSpeed: 1000,
        modalColor: '#818e9b',
        // transition: 'slideIn',
        // transitionClose: 'slideBack',
        escClose: true,
        onClose: function () {
          // form.find('.response-alert').hide();
          form.trigger('reset');
          form.find('.suc-alert').css('display', 'none');
          form.find('.error-alert').css('display', 'none');
        }
      });

    });

    $('#call-form .popup-header__close').on('click touchstart', function(){
      popupBlock.close();
    });

  },

  burgerMenu: function() {
    $('.header__burg').click(function () {
      $(this).toggleClass('menu-on');
      if($('.header__burg').hasClass('menu-on')) {
        $('.mobile-navigation').fadeIn();
    } else {
        $('.mobile-navigation').fadeOut();
      }
      });
    $('.mobile-navigation__link').click(function(){
      $('.header__burg').toggleClass('menu-on');
      $('.mobile-navigation').fadeOut();
    })
  },

  showMorePlan: function() {
    $('.moreBtn').click(function(e){
      var $this = $(this);
      var filterBlock = $('.planing-block__list');
      var index = 0;
      var desktopK = 6462; // coefficient for each filter block
      var mobileK = 6462; // coefficient for each filter block (for mobile - one column)
      var k = 0;


      e.preventDefault();

      $('.planing-block__item').each(function(indx, elem) {
        if($(this).children('.planing-block__btn').hasClass('active')) {
          index = indx;
        }
      });

      switch(index) {
        case 0:
          desktopK = 6462;
          mobileK = 18586;
          break;
        case 1:
          desktopK = 1618;
          mobileK = 4850;
          break;
        case 2:
          desktopK = 1214;
          mobileK = 2830;
          break;
        case 3:
          desktopK = 1618;
          mobileK = 4850;
          break;
        case 4:
          desktopK = 800;
          mobileK = 1214;
          break;
        case 5:
          desktopK = 2022;
          mobileK = 5254;
          break;
      }
      console.log(window.screen.width);
      if(window.screen.width < 701) {
        k = mobileK;
      } else {
        k = desktopK;
      }
      var heightWrap = parseInt($('.wp-project-wrapper').css('height'));
      heightWrap = heightWrap + 4;
        var nHeight = heightWrap + 400;
      if(nHeight <= k) {
        console.log(nHeight); // height check (for debug when change entity plans in block plan)
        console.log(k);
        $('.wp-project-wrapper').css('height', nHeight);
      } else {
        $('.moreBtn').hide();
      }
    })
  }
};
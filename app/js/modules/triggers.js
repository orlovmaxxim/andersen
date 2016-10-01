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
  }
};
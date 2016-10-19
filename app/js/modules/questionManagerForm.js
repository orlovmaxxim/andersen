module.exports = {
  showForm: function() {
    var popupBlock = $('#question-form');
    $('.questions__btn').on('click touchstart', function(e){
      e.preventDefault();


      var form = popupBlock.find('#question-manager-form');

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
          $('input').removeClass('light-error');
        }
      });

    });

    $('#question-form .popup-header__close').on('click touchstart', function(){
      popupBlock.close();
    });
  }
};

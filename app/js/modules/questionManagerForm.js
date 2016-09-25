module.exports = {
  showForm: function() {
    $('.questions__btn').on('click touchstart', function(e){
      e.preventDefault();

      var popupBlock = $('#question-form');
      var form = popupBlock.find('#question-manager-form');

      popupBlock.bPopup({
        fadeSpeed: 'slow',
        followSpeed: 1000,
        modalColor: '#818e9b',
        transition: 'slideIn',
        transitionClose: 'slideBack',
        escClose: true,
        onClose: function () {
          // form.find('.response-alert').hide();
          form.trigger('reset');
        }
      });

    });
  }
};

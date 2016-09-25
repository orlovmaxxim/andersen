module.exports = {
  showForm: function() {
    $('.infomore-block__btn').on('click touchstart', function(e){
      e.preventDefault();

      var popupBlock = $('#addition-form');
      var form = popupBlock.find('#addition-manager-form');

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
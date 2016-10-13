module.exports = {

  showRangeSlider: function() {
    $('.house-tooltip').on('click touchstart', function(e){
      e.preventDefault();
      var $this = $(this);
      var individBlock = $this.attr('class');
      console.log(individBlock);
      var nwIndividBlock = individBlock.split(' ')[1];
      console.log(nwIndividBlock);
      var popupBlock = $('.range-slider');

      popupBlock.bPopup({
        // fadeSpeed: 'slow',
        // followSpeed: 1000,
        modalColor: '#818e9b',
        // transition: 'slideIn',
        // transitionClose: 'slideBack',
        escClose: true,
        onClose: function () {
        }
      });

      //$(nwIndividBlock).addClass('active');
      $('.' + nwIndividBlock).show();
      $('.' + nwIndividBlock).siblings('.com').hide();
    });
  }
};

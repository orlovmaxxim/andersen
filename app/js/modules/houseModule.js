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
        onOpen: function() {
          console.log('open Popup');
          console.log($(this));
          // $('.testlink').on('click touchstart', function(e){
          //   e.preventDefault();
          //   console.log('I am test');
          // });
        },
        onClose: function () {
        }
      });



      //$(nwIndividBlock).addClass('active');
      $('.' + nwIndividBlock).show();
      $('.' + nwIndividBlock).siblings('.com').hide();
    });
  },

  showTT: function() {

    var plans = {
      test1 : {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/34-98.png"
      },

      secondPlan: {
        tit: "Однокомнатная квартира",
        floor : "Подъезд 1, 2-8 этаж",
        category : "one",
        fot : "/img/apartments/oneroom/34-98.png"
      }
    };

    document.querySelector('object').addEventListener('load',function(){
      var p = this.contentDocument.documentElement.querySelectorAll('path');



      for(var i = 0; i < p.length; i++){
        p[i].addEventListener('click', function(){
          var testClass = this.getAttribute('class');
          var popupBlock = $('#planing-form');
          //alert("Hello my name is "+this.getAttribute('class')+"…");
          $.each(plans, function(key, value){
            if(testClass.indexOf(key)+1) {
              console.log('good job');
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
            }
          });
        });
      }
    });
  }
};

module.exports = {

  showRangeSlider: function() {
    $('.house-tooltip').on('click touchstart', function(e){
      e.preventDefault();
      var $this = $(this);
      var individBlock = $this.attr('class');
      // console.log(individBlock);
      var nwIndividBlock = individBlock.split(' ')[1];
      // console.log(nwIndividBlock);
      var popupBlock = $('.range-slider');
      var doorway = $this.text();
      popupBlock.find('h2:first').text(doorway);
      popupBlock.bPopup({
        // fadeSpeed: 'slow',
        // followSpeed: 1000,
        modalColor: '#818e9b',
        // transition: 'slideIn',
        // transitionClose: 'slideBack',
        escClose: true,
        // positionStyle: 'fixed',
        // onOpen: function() {
        //   console.log('open Popup');
        //   console.log($(this));
        //   // $('.testlink').on('click touchstart', function(e){
        //   //   e.preventDefault();
        //   //   console.log('I am test');
        //   // });
        // },
        onClose: function () {
        }
      });
      popupBlock.reposition();

      $('.' + nwIndividBlock).siblings('.com').removeClass('active');
      $('.' + nwIndividBlock).addClass('active');

      $('.' + nwIndividBlock).show();
      $('.' + nwIndividBlock).siblings('.com').hide();

      $('.range-slider .popup-header__close').on('click touchstart', function(){
        popupBlock.close();
      });
    });


  },

  showTT: function(plans) {


    var myObjId = '';
    var indivBlockTwo = '';
    // var p = [];

    $('.com').each(function(){
      if($(this).css('display') == 'block') {
        var individBlock = $(this).attr('class');
        indivBlockTwo = individBlock.split(' ')[1];
      }
    });


    $('.' + indivBlockTwo + ' .block-plan-pic').each(function(){
      //console.log($(this));s
      if($(this).css('display') == 'block') {
        myObjId = $(this).find('object').attr('id');
      }
    });

    var listener = function() {
      console.log('I am here');
      var p = this.contentDocument.documentElement.querySelectorAll('path');
      for(var i = 0; i < p.length; i++) {
        p[i].addEventListener('click', function() {
          var testClass = this.getAttribute('class');
          var popupBlock = $('#planing-form');
          //alert("Hello my name is "+this.getAttribute('class')+"…");
          $.each(plans, function(key, value){
            if(testClass.indexOf(key)+1) {
              console.log('good job');

              var form = popupBlock.find('#planing-choose-form');
              var formFoto = form.find('.plan__foto').find('img');
              var formTitle = $('#planing-form').find('.popup-header__title');
              var hiddenTitleContent = $('#planing-form').find('.planing-choose-form__title');
              var allsq = form.find('.allsq').find('span');
              var livesq = form.find('.livesq').find('span');

              formFoto.attr("src", value.fot);
              formTitle.text(value.tit);
              hiddenTitleContent.text(value.floor);
              allsq.text("Общая площадь: " + value.squareAll);
              livesq.text("Жилая площадь: " + value.squareLive);

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

              $('#planing-form .popup-header__close').on('click touchstart', function(){
                popupBlock.close();
              });
            }
          });
        });
      }
    };

    console.log($('#' + myObjId));

    var el = document.getElementById(myObjId),
      elClone = el.cloneNode(true);

    el.parentNode.replaceChild(elClone, el);

    elClone.addEventListener('load', listener);

    /*document.getElementById(myObjId).addEventListener('load', );*/
  }
};

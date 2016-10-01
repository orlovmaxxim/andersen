module.exports = {
  showPlanningForm: function() {

    var popupBlock = $('#planing-form');
    $('.view').on('click touchstart', function(e){
      e.preventDefault();

      var $this = $(this);
      // Собираем данные для формы
      var dataCategory = $this.closest('.planing-view__item').attr('data-category');
      var view = $this.closest('.view');
      var title = view.find('h2').text();
      var fotoPlan = view.find('img').attr('src');
      var squareAll = view.find('.view__parag_all').text();
      var squareLive = view.find('.view__parag_live').text();



          var form = popupBlock.find('#planing-choose-form');
          var formFoto = form.find('.plan__foto').find('img');
          var formTitle = $('#planing-form').find('.popup-header__title');
          var allsq = form.find('.allsq').find('span');
          var livesq = form.find('.livesq').find('span');

          formFoto.attr("src", fotoPlan);
          formTitle.text(title);
          allsq.text(squareAll);
          livesq.text(squareLive);

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


      $('#planing-form .popup-header__close').on('click touchstart', function(){
        console.log('I am click');
        popupBlock.close();
      });
    });

  },
  activeBtn: function() {
    
    // document.addEventListener('touchstart', handler, {capture: true});
    
    $('.planing-block__btn').on('click touchstart', function (e) {
      e.preventDefault();

      var $this = $(this);

      if ($this.hasClass('active')) {
        return;
      }
      $('.planing-block__list').find('.planing-block__btn.active').removeClass('active');
      $this.addClass('active');
    });
  }

};

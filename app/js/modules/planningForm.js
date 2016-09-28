module.exports = {
  showPlanningForm: function() {
    var plannings = {
      one : {
        fot: "/img/2.png"
      },

      two : {
        fot: "/img/5.png"
      },

      three : {
        fot: "/img/12.png"
      },

      four : {
        fot: "/img/16.png"
      },

      penthaus : {
        fot: "/img/2.png"
      }
    };

    var popupBlock = $('#planing-form');
    $('.view__btn').on('click touchstart', function(e){
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

          formFoto.attr("src", fotoPlan);
          formTitle.text(title);

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
            }
          });


      $('#planing-form .popup-header__close').on('click touchstart', function(){
        bPopup().close();
      });
    });

  }
};

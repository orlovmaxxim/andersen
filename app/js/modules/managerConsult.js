module.exports = {
  showConsultForm: function() {
    var managers = {
      firstManager : {
        name: "Ирины",
        fot: "/img/manager/kupchinskaya_irina.jpg",
        aboutme: "В своей работе главным считаю искреннее и внимательное отношение к клиенту"
      },

      secondManager: {
        name: "Андрея",
        fot: "/img/manager/bocharnikov_andrey.jpg",
        aboutme: "Все вопросы клиента для меня важны, всегда открыт для диалога"
      },

      thirdManager: {
        name: "Светланы",
        fot: "/img/manager/dikopoltseva_svetlana.jpg",
        aboutme: "Умею слышать других, отношусь к работе с душой и любовью"
      },

      fourthManager: {
        name: "Станислава",
        fot: "/img/manager/stanislav_shipilov.jpg",
        aboutme: "Ценю время людей, с которыми работаю"
      },

      fifthManager: {
        name: "Анастасии",
        fot: "/img/manager/titarenko_anastasiya.jpg",
        aboutme: "Процесс покупки квартиры должен быть удобным и понятным, с радостью помогу в этом"
      },

      sixthManager: {
        name: "Светланы",
        fot: "/img/manager/titova_svetlana.jpg",
        aboutme: "Хорошо разбираюсь в деталях своей работы, при покупке квартиры важны все нюансы"
      }
    };

    var popupBlock = $('#consult-form');
    $('.consult-link').on('click touchstart', function(e){
      e.preventDefault();

      var $this = $(this);
      $.each(managers, function(key, value){
        if($this.hasClass(key)) {
          var form = popupBlock.find('#manager-consult-form');
          var titleManager = popupBlock.find('.popup-header__title').find('span');
          var fotManager = form.find('.manager__foto').find('img');
          var aboutManager = form.find('.manager-consult-form__parag').find('span');

          titleManager.text(value.name);
          fotManager.attr("src", value.fot);
          aboutManager.text(value.aboutme);

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
            }
          });

        }
      });
    });
    $('#consult-form .popup-header__close').on('click touchstart', function(){
      popupBlock.close();
    });
  }
};
module.exports = {
  showConsultForm: function() {
    var managers = {
      firstManager : {
        name: "Ирины",
        fot: "/img/manager/kupchinskaya_irina.jpg",
        aboutme: "Умею слышть других и принимать обратную связь. Отношусь к работе с душой и любовью"
      },

      secondManager: {
        name: "Андрея",
        fot: "/img/manager/bocharnikov_andrey.jpg",
        aboutme: "Умею слышть других и принимать обратную связь."
      },

      thirdManager: {
        name: "Светланы",
        fot: "/img/manager/dikopoltseva_svetlana.jpg",
        aboutme: "Умею слышть других и принимать обратную связь."
      },

      fourthManager: {
        name: "Станислава",
        fot: "/img/manager/stanislav_shipilov.jpg",
        aboutme: "Умею слышть других и принимать обратную связь."
      },

      fifthManager: {
        name: "Анастасии",
        fot: "/img/manager/titarenko_anastasiya.jpg",
        aboutme: "Умею слышть других и принимать обратную связь."
      },

      sixthManager: {
        name: "Светланы",
        fot: "/img/manager/titova_svetlana.jpg",
        aboutme: "Умею слышть других и принимать обратную связь."
      }
    };
    

    $('.consult-link').on('click touchstart', function(e){
      e.preventDefault();

      var $this = $(this);
      $.each(managers, function(key, value){
        if($this.hasClass(key)) {
          var popupBlock = $('#consult-form');
          var form = popupBlock.find('#manager-consult-form');
          var titleManager = popupBlock.find('.popup-header__title').find('span');
          var fotManager = form.find('.manager__foto').find('img');

          titleManager.text(value.name);
          fotManager.attr("src", value.fot);

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

        }
      });
      
      



    });
  }
};
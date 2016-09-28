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
      console.log("1");

      var $this = $(this);
      $.each(plannings, function(key, value){
        if($this.parents().hasClass(key)) {
          var form = popupBlock.find('#planing-choose-form');
          var fotPlan = form.find('.plan__foto').find('img');

          fotPlan.attr("src", value.fot);

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
    $('#planing-form .popup-header__close').on('click touchstart', function(){
      popupBlock.close();
    });
  }
};
